'use client';

import {VStack} from '@astryxdesign/core/VStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Collapsible, CollapsibleGroup} from '@astryxdesign/core/Collapsible';
import {Container} from './Container';
import {SectionHeader} from './SectionHeader';
import {faqs} from '@/content/faqs';

export function Faq() {
  return (
    <StackItem as="section" id="faq" aria-labelledby="faq-heading" className="bg-surface py-16 md:py-20">
      <Container gap={10}>
        <SectionHeader tag="Common Questions" title="Frequently Asked Questions" id="faq-heading">
          Details on accreditation, nationwide travel, and booking requirements.
        </SectionHeader>
        <VStack maxWidth={840} width="100%" className="mx-auto">
          <Card padding={2} elevation="low">
            <CollapsibleGroup type="multiple" defaultValue={[faqs[0].id]} hasDividers density="spacious">
              {faqs.map(faq => (
                <Collapsible key={faq.id} value={faq.id} trigger={<Text weight="semibold">{faq.question}</Text>}>
                  <Text color="secondary" as="p">
                    {faq.answer}
                  </Text>
                </Collapsible>
              ))}
            </CollapsibleGroup>
          </Card>
        </VStack>
      </Container>
    </StackItem>
  );
}
