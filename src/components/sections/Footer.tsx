'use client';

import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {BrandBand} from '@/app/providers';
import {CrestMini} from '@/components/brand/Crest';
import {Container} from './Container';
import {site} from '@/content/site';

export function Footer() {
  return (
    <BrandBand>
      <StackItem as="footer" className="border-t-2 border-accent bg-body py-9">
        <Container>
          <HStack hAlign="between" vAlign="center" wrap="wrap" gap={4}>
            <HStack gap={3} vAlign="center">
              <CrestMini size={32} />
              <Text color="secondary">
                <Text type="inherit" weight="bold" color="primary">
                  {site.name}
                </Text>{' '}
                — {site.motto}
              </Text>
            </HStack>
            <HStack gap={3} wrap="wrap" vAlign="center">
              <Text type="supporting" color="secondary">
                Cavan, Ireland
              </Text>
              <Link href={site.phone.href} type="supporting">
                {site.phone.display}
              </Link>
              <Link href={`mailto:${site.email}`} type="supporting">
                {site.email}
              </Link>
            </HStack>
          </HStack>
          <Text type="supporting" color="secondary">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </Text>
        </Container>
      </StackItem>
    </BrandBand>
  );
}
