'use client';

import {useState} from 'react';
import {Menu} from 'lucide-react';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {List, ListItem} from '@astryxdesign/core/List';
import {BrandBand} from '@/app/providers';
import {CrestMini} from '@/components/brand/Crest';
import {navLinks, site} from '@/content/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrandBand>
      <StackItem as="header" className="sticky top-0 z-50 border-b-2 border-accent bg-body shadow-md">
        <VStack maxWidth={1180} paddingInline={3} paddingBlock={2} className="mx-auto w-full">
          <TopNav
            label="Main navigation"
            heading={
              <TopNavHeading
                logo={<CrestMini size={44} />}
                heading={site.name}
                headingHref="#top"
                subheading={site.motto}
              />
            }
            endContent={
              <HStack gap={2} vAlign="center">
                <StackItem className="hidden md:flex">
                  <HStack gap={1} vAlign="center">
                    {navLinks.map(link => (
                      <TopNavItem key={link.href} label={link.label} href={link.href} />
                    ))}
                  </HStack>
                </StackItem>
                <Button label="Book Training" variant="primary" href="#contact" />
                <StackItem className="md:hidden">
                  <Button
                    label="Open menu"
                    isIconOnly
                    variant="ghost"
                    icon={<Icon icon={Menu} />}
                    onClick={() => setIsMenuOpen(true)}
                  />
                </StackItem>
              </HStack>
            }
          />
        </VStack>
      </StackItem>
      <MobileNav
        isOpen={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        side="end"
        label="Site menu"
        header={<Text weight="bold">{site.name}</Text>}>
        <List density="spacious">
          {[...navLinks, {label: 'Book Training', href: '#contact'}].map(link => (
            <ListItem key={link.href} label={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} />
          ))}
        </List>
      </MobileNav>
    </BrandBand>
  );
}
