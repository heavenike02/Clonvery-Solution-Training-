'use client';

import {useMemo, useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {StackItem} from '@astryxdesign/core/Stack';
import {SegmentedControl, SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {List, ListItem} from '@astryxdesign/core/List';
import {Divider} from '@astryxdesign/core/Divider';
import {Container} from './Container';
import {SectionHeader} from './SectionHeader';
import {useBooking} from '@/components/booking/BookingContext';
import {courses, type Course, type CourseCategory} from '@/content/courses';

type Filter = 'all' | CourseCategory;

export function Courses() {
  const [filter, setFilter] = useState<Filter>('all');
  const counts = useMemo(
    () => ({
      all: courses.length,
      phecc: courses.filter(c => c.category === 'phecc').length,
      safety: courses.filter(c => c.category === 'safety').length,
    }),
    [],
  );
  const visible = filter === 'all' ? courses : courses.filter(c => c.category === filter);

  return (
    <StackItem as="section" id="courses" aria-labelledby="courses-heading" className="bg-surface py-16 md:py-20">
        <Container gap={10}>
          <SectionHeader tag="Accredited Training Catalogue" title={`Our ${courses.length} Certified Training Courses`} id="courses-heading">
            All courses include practical assessment and certification valid for 2 years. Open{' '}
            <Text type="inherit" weight="semibold">
              Course syllabus &amp; details
            </Text>{' '}
            on any card to see full module topics and certification details.
          </SectionHeader>

          <HStack hAlign="center">
            <StackItem className="hidden md:flex">
              <SegmentedControl label="Filter training courses" value={filter} onChange={v => setFilter(v as Filter)}>
                <SegmentedControlItem value="all" label={`All Courses (${counts.all})`} />
                <SegmentedControlItem value="phecc" label={`PHECC Approved (${counts.phecc})`} />
                <SegmentedControlItem value="safety" label={`Workplace & Healthcare Safety (${counts.safety})`} />
              </SegmentedControl>
            </StackItem>
            <StackItem className="w-full md:hidden">
              <SegmentedControl label="Filter training courses" value={filter} onChange={v => setFilter(v as Filter)} layout="fill">
                <SegmentedControlItem value="all" label={`All (${counts.all})`} />
                <SegmentedControlItem value="phecc" label={`PHECC (${counts.phecc})`} />
                <SegmentedControlItem value="safety" label={`Safety (${counts.safety})`} />
              </SegmentedControl>
            </StackItem>
          </HStack>

          <Grid columns={{minWidth: 320, max: 3}} gap={6} align="stretch">
            {visible.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Grid>
        </Container>
    </StackItem>
  );
}

function CourseCard({course}: {course: Course}) {
  const {bookCourse} = useBooking();
  const isPhecc = course.category === 'phecc';

  return (
    <Card elevation="low" padding={6} height="100%">
      <VStack gap={4} height="100%">
        <StackItem aria-hidden className={`h-1 w-16 rounded-full ${isPhecc ? 'bg-red-vivid' : 'bg-accent'}`} />
        <HStack gap={2} wrap="wrap">
          <Badge label={course.tag} variant={isPhecc ? 'red' : 'blue'} />
          <Badge label="Valid: 2 Years" variant="green" />
        </HStack>
        <VStack gap={2}>
          <Heading level={3} textWrap="balance">
            {course.title}
          </Heading>
          <Text color="secondary" as="p">
            {course.summary}
          </Text>
        </VStack>

        <StackItem size="fill">
          <Collapsible defaultIsOpen={false} trigger={<Text weight="semibold">Course syllabus &amp; details</Text>}>
            <VStack gap={3}>
              <Text type="label" weight="bold">
                Key modules covered
              </Text>
              <List density="compact" listStyle="disc" edge="flush">
                {course.modules.map(m => (
                  <ListItem key={m} label={<Text type="supporting">{m}</Text>} />
                ))}
              </List>
              <Divider />
              <HStack hAlign="between" wrap="wrap" gap={2}>
                <Text type="supporting" color="secondary">
                  <Text type="inherit" weight="bold">Certification:</Text> {course.certification}
                </Text>
                <Text type="supporting" color="secondary">
                  <Text type="inherit" weight="bold">Delivery:</Text> On-Site Nationwide
                </Text>
              </HStack>
            </VStack>
          </Collapsible>
        </StackItem>

        <Button label="Book This Course" variant="primary" width="100%" onClick={() => bookCourse(course.title)} />
      </VStack>
    </Card>
  );
}
