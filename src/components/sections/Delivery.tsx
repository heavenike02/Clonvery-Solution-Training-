'use client';

import {CalendarClock, MapPin, ShieldCheck, BadgeCheck} from 'lucide-react';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Container} from './Container';
import {SectionHeader} from './SectionHeader';
import {features} from '@/content/faqs';

const ICONS = {reach: MapPin, phecc: ShieldCheck, cert: BadgeCheck, schedule: CalendarClock} as const;

export function Delivery() {
  return (
    <StackItem as="section" id="delivery" aria-labelledby="delivery-heading" className="bg-muted py-16 md:py-20">
      <Container gap={10}>
        <SectionHeader tag="Why Clonervy Training Solutions" title="Flexible On-Site Training Across Ireland" id="delivery-heading">
          Based in County Cavan, we travel directly to healthcare facilities, businesses, schools, and community
          organizations nationwide.
        </SectionHeader>
        <Grid columns={{minWidth: 240, max: 4}} gap={6}>
          {features.map(f => (
            <Card key={f.id} padding={6} height="100%">
              <VStack gap={3}>
                <StackItem className="flex size-11 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  <Icon icon={ICONS[f.id]} size="md" />
                </StackItem>
                <Heading level={3}>{f.title}</Heading>
                <Text color="secondary" as="p">
                  {f.body}
                </Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </Container>
    </StackItem>
  );
}
