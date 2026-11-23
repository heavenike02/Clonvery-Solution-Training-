import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';

export function SectionHeader({
  tag,
  title,
  id,
  children,
}: {
  tag: string;
  title: string;
  id: string;
  children?: React.ReactNode;
}) {
  return (
    <VStack gap={3} hAlign="center" maxWidth={720} className="mx-auto">
      <Badge label={tag} variant="blue" />
      <Heading level={2} type="display-3" justify="center" textWrap="balance" id={id}>
        {title}
      </Heading>
      {children ? (
        <Text color="secondary" justify="center" textWrap="pretty" as="p">
          {children}
        </Text>
      ) : null}
    </VStack>
  );
}
