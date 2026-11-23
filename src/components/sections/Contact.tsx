'use client';

import type {ComponentType, SVGProps} from 'react';
import {Mail, MapPin, Phone, Shield} from 'lucide-react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {BrandBand} from '@/app/providers';
import {BookingForm} from '@/components/booking/BookingForm';
import {Container} from './Container';
import {SectionHeader} from './SectionHeader';
import {site} from '@/content/site';

export function Contact() {
  return (
    <StackItem as="section" id="contact" aria-labelledby="contact-heading" className="bg-muted py-16 md:py-20">
      <Container gap={10}>
        <SectionHeader tag="Get In Touch" title="Book a Course or Request a Quote" id="contact-heading">
          Call, email, or use the booking form. Choosing “Book This Course” on any course fills it in for you.
        </SectionHeader>
        <Grid columns={{minWidth: 320, max: 2}} gap={8} align="start">
          <BrandBand>
            <Card padding={8} elevation="med">
              <VStack gap={6}>
                <VStack gap={2}>
                  <Heading level={3} color="accent">
                    {site.name}
                  </Heading>
                  <Text color="secondary" as="p">
                    Reach out directly to discuss group bookings, individual places, or nationwide on-site training dates.
                  </Text>
                </VStack>
                <ContactRow icon={Phone} label="Phone / WhatsApp">
                  <Link href={site.phone.href} color="primary" weight="bold" isStandalone>
                    {site.phone.display}
                  </Link>
                </ContactRow>
                <ContactRow icon={Mail} label="Email address">
                  <Link href={`mailto:${site.email}`} color="primary" weight="bold" isStandalone>
                    {site.email}
                  </Link>
                </ContactRow>
                <ContactRow icon={MapPin} label="Location & coverage">
                  <Text weight="bold">{site.location}</Text>
                </ContactRow>
                <ContactRow icon={Shield} label="Motto">
                  <Text weight="bold">{site.motto}</Text>
                </ContactRow>
              </VStack>
            </Card>
          </BrandBand>
          <BookingForm />
        </Grid>
      </Container>
    </StackItem>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <HStack gap={4} vAlign="start">
      <StackItem className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
        <Icon icon={icon} size="md" />
      </StackItem>
      <VStack gap={0.5} className="min-w-0 break-words">
        <Text type="supporting" color="secondary" weight="semibold" className="uppercase tracking-wide">
          {label}
        </Text>
        {children}
      </VStack>
    </HStack>
  );
}
