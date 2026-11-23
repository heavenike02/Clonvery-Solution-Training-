import {VStack} from '@astryxdesign/core/VStack';

/** Centred 1180px content column with page gutters — the original page's `.container`. */
export function Container({children, gap = 0}: {children: React.ReactNode; gap?: 0 | 4 | 6 | 8 | 10}) {
  return (
    <VStack gap={gap} maxWidth={1180} paddingInline={5} className="mx-auto w-full">
      {children}
    </VStack>
  );
}
