export type CourseCategory = 'phecc' | 'safety';

export type Course = {
  id: string;
  title: string;
  category: CourseCategory;
  tag: string;
  summary: string;
  modules: string[];
  certification: string;
};

export const courses: Course[] = [
  {
    id: 'cfr-a',
    title: 'CFR-A — Cardiac First Response Advanced',
    category: 'phecc',
    tag: 'PHECC Approved',
    summary:
      'Comprehensive pre-hospital emergency response training for healthcare professionals, first responders, and clinical teams managing cardiac and respiratory emergencies.',
    modules: [
      'Adult, child & infant CPR and Automated External Defibrillator (AED) operation',
      'Advanced airway management, supraglottic airways & bag-valve-mask ventilation',
      'Recognition & management of stroke, heart attack, and foreign body airway obstruction',
      'Team-based resuscitation protocols & handover to emergency medical services',
    ],
    certification: 'PHECC CFR-A (2 Yrs)',
  },
  {
    id: 'efr',
    title: 'Emergency First Response (EFR)',
    category: 'phecc',
    tag: 'PHECC Approved',
    summary:
      'Essential life-saving first aid and emergency care training equipping workplace responders and community members to act confidently before ambulance arrival.',
    modules: [
      'Scene safety assessment, primary & secondary patient survey',
      'CPR, AED defibrillation & choking relief for adults and children',
      'Control of severe bleeding, shock management & spinal injury care',
      'Medical emergencies including anaphylaxis, asthma, diabetes & seizures',
    ],
    certification: 'PHECC Approved (2 Yrs)',
  },
  {
    id: 'bls',
    title: 'BLS — Basic Life Support',
    category: 'phecc',
    tag: 'PHECC Approved',
    summary:
      'Focused, high-impact resuscitation and AED training designed for clinical staff, dental practices, care facilities, and workplace emergency teams.',
    modules: [
      'High-quality chest compressions & rescue breathing techniques',
      'Safe and rapid AED pad placement and shock delivery',
      'Single-rescuer and two-rescuer CPR coordination',
      'Recovery position & choking management across all age groups',
    ],
    certification: 'PHECC BLS (2 Yrs)',
  },
  {
    id: 'manual-handling',
    title: 'Manual Handling',
    category: 'safety',
    tag: 'Workplace Safety',
    summary:
      'Practical musculoskeletal injury prevention and safe lifting techniques compliant with Irish Safety, Health and Welfare at Work regulations.',
    modules: [
      'Irish manual handling legislation & employer/employee duties',
      'Anatomy of the spine, posture mechanics & injury prevention',
      'TILE risk assessment (Task, Individual, Load, Environment)',
      'Practical safe lifting, pushing, pulling & team handling drills',
    ],
    certification: 'Valid for 2 Years',
  },
  {
    id: 'patient-movement',
    title: 'Patient Movement & Handling',
    category: 'safety',
    tag: 'Healthcare Safety',
    summary:
      'Specialist people-handling training for nurses, healthcare assistants, home carers, and hospital staff focusing on dignity, safety, and assistive equipment.',
    modules: [
      'Ergonomic principles & balanced decision-making in patient care',
      'Safe bed mobility, transfers, sitting-to-standing & assisted walking',
      'Use of hoists, slings, slide sheets, transfer boards & standing aids',
      'Fall recovery protocols & protecting both carer and client',
    ],
    certification: 'Valid for 2 Years',
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety',
    category: 'safety',
    tag: 'Workplace Safety',
    summary:
      'Essential fire prevention, evacuation procedures, and fire extinguisher selection training to keep your staff and premises compliant and protected.',
    modules: [
      'Chemistry of fire, common workplace hazards & fire prevention',
      'Classes of fire and selecting the correct fire extinguisher',
      'Emergency alarm response, evacuation routes & assembly point duties',
      'Fire warden responsibilities & assisting vulnerable persons',
    ],
    certification: 'Valid for 2 Years',
  },
  {
    id: 'pmav',
    title: 'PMAV — Prevention and Management of Aggression and Violence',
    category: 'safety',
    tag: 'Healthcare & Frontline',
    summary:
      'De-escalation, conflict resolution, and personal safety skills for healthcare workers, social care teams, retail, and public-facing staff.',
    modules: [
      'Understanding triggers, escalation cycles & early warning signs',
      'Verbal & non-verbal de-escalation and calming communication',
      'Personal space awareness, breakaway techniques & safe disengagement',
      'Post-incident reporting, legal frameworks & staff wellbeing',
    ],
    certification: 'Valid for 2 Years',
  },
];

export const CUSTOM_PACKAGE = 'Multiple Courses / Custom Package';

export const courseOptions = [
  ...courses.map(c => ({
    value: c.title,
    label: c.title,
    description: c.category === 'phecc' ? 'PHECC Approved' : '2 Years Valid',
  })),
  {value: CUSTOM_PACKAGE, label: 'Multiple Courses / Custom Group Package', description: 'Combine courses on the same day'},
];

export const courseTitles = [CUSTOM_PACKAGE, ...courses.map(c => c.title)] as [string, ...string[]];
