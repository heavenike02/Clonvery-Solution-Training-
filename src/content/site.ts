export const site = {
  name: 'Clonervy Training Solutions',
  shortName: 'Clonervy',
  motto: 'Train • Prepare • Save Lives',
  description:
    'Clonervy Training Solutions — Based in Cavan, providing nationwide on-site healthcare, workplace safety, and PHECC approved first aid training across Ireland.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clonvery-solution-training.vercel.app',
  phone: {display: '087 133 2401', href: 'tel:+353871332401', e164: '+353871332401'},
  email: 'Clonervytrainingsolutions@outlook.com',
  location: 'Based in Cavan • Nationwide On-Site Training Across Ireland',
  region: 'County Cavan, Ireland',
} as const;

export const navLinks = [
  {label: 'Courses', href: '#courses'},
  {label: 'Nationwide Delivery', href: '#delivery'},
  {label: 'FAQs', href: '#faq'},
] as const;

export const heroHighlights = [
  {title: 'PHECC Approved', detail: 'CFR-A, EFR & BLS Certified'},
  {title: '2-Year Validity', detail: 'On All 7 Accredited Courses'},
  {title: 'On-Site Ireland-Wide', detail: 'Cavan Base, Nationwide Travel'},
] as const;
