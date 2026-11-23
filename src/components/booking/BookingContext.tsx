'use client';

import {createContext, useCallback, useContext, useMemo, useState} from 'react';

type BookingContextValue = {
  course: string | undefined;
  setCourse: (course: string | undefined) => void;
  /** Pre-select a course in the enquiry form and scroll to it. */
  bookCourse: (course: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({children}: {children: React.ReactNode}) {
  const [course, setCourse] = useState<string | undefined>(undefined);

  const bookCourse = useCallback((next: string) => {
    setCourse(next);
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }, []);

  const value = useMemo(() => ({course, setCourse, bookCourse}), [course, bookCourse]);
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>');
  return ctx;
}
