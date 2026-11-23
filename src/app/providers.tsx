'use client';

import Link from 'next/link';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {themes, defaultThemeSlug} from '../astryx-themes';

/** Light page; navy brand bands opt into the theme's dark (navy + gold) mode via <BrandBand>. */
export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={themes[defaultThemeSlug]} mode="light">
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}

export function BrandBand({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={themes[defaultThemeSlug]} mode="dark">
      {children}
    </Theme>
  );
}
