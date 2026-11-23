'use client';

import {ArrowRight} from 'lucide-react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {StackItem} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Icon} from '@astryxdesign/core/Icon';
import {Divider} from '@astryxdesign/core/Divider';
import {BrandBand} from '@/app/providers';
import {Crest} from '@/components/brand/Crest';
import {Container} from './Container';
import {heroHighlights, site} from '@/content/site';
import {courses} from '@/content/courses';

export function Hero() {
  return (
    <BrandBand>
      <StackItem as="section" aria-labelledby="hero-heading" className="bg-linear-135 from-body to-surface py-16 md:py-20">
        <Container>
          <Grid columns={{minWidth: 320, max: 2}} gap={10} align="center">
            <VStack gap={6} hAlign="start">
              <Badge label="Based in Cavan • Nationwide Across Ireland" variant="yellow" />
              <Heading level={1} type="display-1" textWrap="balance" id="hero-heading">
                Certified Healthcare, First Aid &amp;{' '}
                <Text type="inherit" color="accent">
                  Workplace Safety Training
                </Text>
              </Heading>
              <Text type="large" color="secondary" as="p" textWrap="pretty">
                {site.name} delivers accredited, hands-on training directly at your workplace anywhere in Ireland. Every
                course includes a <Text type="inherit" weight="bold" color="primary">2-year valid certificate</Text> led by
                experienced instructors.
              </Text>
              <HStack gap={3} wrap="wrap">
                <Button
                  label={`Explore All ${courses.length} Courses`}
                  variant="primary"
                  size="lg"
                  href="#courses"
                  endContent={<Icon icon={ArrowRight} size="sm" />}
                />
                <Button label="Request a Group Quote" variant="secondary" size="lg" href="#contact" />
              </HStack>
              <VStack gap={4} width="100%">
                <Divider />
                <Grid columns={{minWidth: 150, max: 3}} gap={4}>
                  {heroHighlights.map(h => (
                    <VStack key={h.title} gap={0.5}>
                      <Text weight="bold" color="accent">
                        {h.title}
                      </Text>
                      <Text type="supporting" color="secondary">
                        {h.detail}
                      </Text>
                    </VStack>
                  ))}
                </Grid>
              </VStack>
            </VStack>

            <VStack
              gap={4}
              hAlign="center"
              padding={8}
              className="mx-auto rounded-xl border border-accent/30 bg-card/50 shadow-lg">
              <Crest size={240} />
              <Text type="label" weight="bold" color="accent" className="uppercase tracking-widest">
                {site.motto}
              </Text>
            </VStack>
          </Grid>
        </Container>
      </StackItem>
    </BrandBand>
  );
}
