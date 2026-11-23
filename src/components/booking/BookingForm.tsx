'use client';

import {useState, useTransition} from 'react';
import {Send} from 'lucide-react';
import {Card} from '@astryxdesign/core/Card';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/VStack';
import {TextInput} from '@astryxdesign/core/TextInput';
import {NumberInput} from '@astryxdesign/core/NumberInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Selector} from '@astryxdesign/core/Selector';
import {Button} from '@astryxdesign/core/Button';
import {Banner} from '@astryxdesign/core/Banner';
import {Icon} from '@astryxdesign/core/Icon';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {useBooking} from './BookingContext';
import {sendEnquiry, type FieldErrors} from '@/app/actions';
import {courseOptions} from '@/content/courses';
import {site} from '@/content/site';

type Status = 'idle' | 'sent' | 'failed';

const EMPTY = {fullName: '', orgName: '', email: '', phone: '', county: '', notes: '', website: ''};

export function BookingForm() {
  const {course, setCourse} = useBooking();
  const [fields, setFields] = useState(EMPTY);
  const [participants, setParticipants] = useState<number | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [isPending, startTransition] = useTransition();

  const update = (key: keyof typeof EMPTY) => (value: string) => {
    setFields(f => ({...f, [key]: value}));
    if (errors[key]) setErrors(e => ({...e, [key]: undefined}));
  };
  const err = (key: keyof FieldErrors) => (errors[key] ? {type: 'error' as const, message: errors[key]} : undefined);

  function mailtoFallback() {
    const body = [
      'Hello Clonervy Training Solutions,',
      '',
      'I would like to enquire about booking the following training:',
      '',
      `• Course: ${course ?? ''}`,
      `• Name: ${fields.fullName}`,
      fields.orgName && `• Company / Organization: ${fields.orgName}`,
      `• Phone: ${fields.phone}`,
      `• Location / County: ${fields.county}`,
      participants ? `• Approx. Number of Trainees: ${participants}` : null,
      fields.notes && `• Additional Notes: ${fields.notes}`,
      '',
      'Kind regards,',
      fields.fullName,
    ]
      .filter((line): line is string => typeof line === 'string')
      .join('\n');
    const subject = `Training Enquiry: ${course ?? 'General'} (${fields.county})`;
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    startTransition(async () => {
      const result = await sendEnquiry({
        ...fields,
        course: (course ?? '') as never,
        participants: participants ?? undefined,
      });
      if (result.ok) {
        setStatus('sent');
        setFields(EMPTY);
        setParticipants(null);
        setCourse(undefined);
        setErrors({});
      } else if (result.reason === 'validation') {
        setErrors(result.fieldErrors);
      } else {
        setStatus('failed');
      }
    });
  }

  return (
    <Card padding={8} elevation="low">
      <form onSubmit={onSubmit} noValidate aria-label="Training enquiry form">
        <VStack gap={5}>
          {status === 'sent' ? (
            <Banner
              status="success"
              title="Thank you — your enquiry has been sent."
              description="We'll be in touch shortly to confirm dates and details."
              collapsible={false}
              isDismissable
              onDismiss={() => setStatus('idle')}
            />
          ) : null}
          {status === 'failed' ? (
            <Banner
              status="error"
              title="Sorry, we couldn't send your enquiry just now."
              description={
                <Text type="inherit">
                  Please call <Link href={site.phone.href}>{site.phone.display}</Link> or{' '}
                  <Link href={mailtoFallback()}>send it by email instead</Link>.
                </Text>
              }
              collapsible={false}
            />
          ) : null}

          <FormLayout defaultOptionality="required">
            <Grid columns={{minWidth: 220, max: 2}} gap={4}>
              <TextInput label="Your name" value={fields.fullName} onChange={update('fullName')} placeholder="e.g. Sarah Murphy" autoComplete="name" htmlName="fullName" isRequired status={err('fullName')} />
              <TextInput label="Company / Organization" value={fields.orgName} onChange={update('orgName')} placeholder="e.g. St. Mary's Care Home" autoComplete="organization" htmlName="orgName" isOptional />
              <TextInput type="email" label="Email address" value={fields.email} onChange={update('email')} placeholder="you@example.ie" autoComplete="email" htmlName="email" isRequired status={err('email')} />
              <TextInput type="tel" label="Phone number" value={fields.phone} onChange={update('phone')} placeholder="e.g. 087 123 4567" autoComplete="tel" inputMode="tel" htmlName="phone" isRequired status={err('phone')} />
              <TextInput label="County / Location" value={fields.county} onChange={update('county')} placeholder="e.g. Cavan, Dublin, Meath, Galway" autoComplete="address-level1" htmlName="county" isRequired status={err('county')} />
              <NumberInput label="Approx. number of trainees" value={participants} onChange={setParticipants} min={1} max={500} isIntegerOnly placeholder="e.g. 10" htmlName="participants" isOptional status={err('participants')} />
            </Grid>
            <Selector
              label="Course"
              options={courseOptions}
              value={course}
              onChange={v => {
                setCourse(v ?? undefined);
                if (errors.course) setErrors(e => ({...e, course: undefined}));
              }}
              placeholder="Choose a training course"
              htmlName="course"
              width="100%"
              isRequired
              status={err('course')}
            />
            <TextArea label="Preferred dates or additional details" value={fields.notes} onChange={update('notes')} placeholder="Let us know your preferred timeframe or any specific workplace requirements…" rows={3} maxLength={2000} htmlName="notes" isOptional />
            <VisuallyHidden>
              <TextInput label="Website (leave blank)" value={fields.website} onChange={update('website')} htmlName="website" autoComplete="off" isOptional />
            </VisuallyHidden>
          </FormLayout>

          <Button type="submit" label="Send Training Enquiry" variant="primary" size="lg" width="100%" isLoading={isPending} icon={<Icon icon={Send} size="sm" />} />
          <Text type="supporting" color="secondary" justify="center">
            We only use your details to respond to this enquiry.
          </Text>
        </VStack>
      </form>
    </Card>
  );
}
