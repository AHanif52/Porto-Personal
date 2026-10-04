import gemiHome from '../assets/gemi-beranda.png';
import gemiReport from '../assets/gemi-laporan.png';
import gemiWallets from '../assets/gemi-kantong.png';

// All page content lives here. Components only decide how it looks.
// Client names are anonymised on purpose: this page is public, the CV carries the real names.

export const site = {
  name: 'Aufa Hanif',
  email: 'aufahanif85@gmail.com',
  cv: '/CV-Aufa-Hanif.pdf',
  linkedin: 'https://www.linkedin.com/in/aufahanif/',
  github: 'https://github.com/AHanif52',
  title: 'Mohammad Aufa Hanif, Project Analyst (Business and System Analyst)',
  description:
    'Mohammad Aufa Hanif, Project Analyst (Business and System Analyst) with 2+ years turning client requests into scoped, tested specs teams can build.',
};

export const hero = {
  role: 'Project Analyst',
  sub: '2+ years taking client requests from first meeting to signed-off release. Latest: a fiber-rollout approval workflow, live in production.',
};

export const featured = {
  meta: 'National ISP, 2026 to now',
  role: 'System Analyst, then Project Analyst',
  title: 'As-built approval workflow for fiber rollout',
  summary:
    'Vendors submit route maps, as-built documents and acceptance photos. Reviewers, approvers and construction managers sign off in turn before the network is handed to maintenance.',
  stats: [
    { n: '~165', label: 'User stories' },
    { n: '128', label: 'Test cases' },
    { n: '204', label: 'APIs catalogued' },
    { n: '32', label: 'Tests automated' },
  ],
  did: [
    { head: 'Scope', text: 'One workflow across three network segments, with file validation, bulk upload, about 20 role-based notifications and 3 monitoring dashboards.' },
    { head: 'Specification', text: 'Requirements spec, ERD and BPMN. The BPMN passed validation and was deployed. Every test case is mapped to a backend or frontend task.' },
    { head: 'Delivery', text: 'The client approved the mockup journey in June 2026. Production release in August 2026, UAT passed in September 2026.' },
  ],
};

export const projects = [
  {
    meta: 'Finance co-op, Malaysia, 2026',
    role: 'Project Analyst',
    title: 'Finance reporting portal',
    summary: 'A BI and reporting portal on top of a data warehouse, used by the finance team for daily and monthly reports.',
    did: [
      'Specified and laid out 37 finance reports, with the warehouse queries, filters and Excel export behind them',
      'Reviewed UAT results with the client and turned the feedback into follow-up tasks',
      'Both phases passed UAT in full and reached formal handover',
    ],
  },
  {
    meta: 'National ISP, 2026',
    role: 'Analyst on maintenance',
    title: 'Maintenance of live rollout systems',
    summary: 'Quarterly maintenance contracts on systems already in production, where I am the first stop for client issues and requests.',
    did: [
      'Triage client tickets and requests, analyse the impact and brief developers on the fix',
      'Weekly and monthly maintenance reports to the client',
      'Each maintenance quarter closed with formal handover to the client',
    ],
  },
  {
    meta: 'National ISP, ongoing',
    role: 'Project Analyst',
    title: 'Change request for coverage boundaries and compensation',
    summary: 'A change request on the same rollout platform, covering how coverage boundaries are redrawn and how compensation follows.',
    did: ['I own the requirements spec, ERD and user journey', 'About 40 user stories written so far'],
  },
  {
    meta: 'Internal, analyst team, 2026',
    role: 'Project Analyst',
    title: 'AI skills that make analyst work repeatable',
    summary: "Claude Code skills that encode the team's standards, so another analyst gets output in the same shape as mine.",
    did: ['User stories, test cases and task specs generated to the team standard', 'Output is linted, then synced to the task tracker'],
  },
];

export const earlier = [
  { year: '2024-2025', title: 'FTTH rollout workflow system', text: 'National ISP. Requirement gathering, the end-to-end workflow BPMN validated in Camunda, a requirements spec per module, ERD, mockups, API and UI testing.' },
  { year: '2025', title: 'Advertising asset CMS', text: 'Advertising agency. Asset flow from upload to distribution for every client.' },
  { year: '2025', title: 'WhatsApp blasting app', text: 'Internal tool. Requirements and workflows for bulk messaging through a third-party gateway.' },
];

export const gemi = {
  meta: 'Side project, 2026',
  title: 'Gemi, an offline money app',
  summary: 'A personal finance app for Android with no account and no server. Run like a client project: requirements first, a 21-screen prototype, then the Flutter build.',
  url: 'https://github.com/AHanif52/gemi',
  shots: [
    { src: gemiHome, alt: "Gemi home screen showing the remaining monthly budget and today's expenses" },
    { src: gemiReport, alt: 'Gemi weekly report with a bar chart of daily spending' },
    { src: gemiWallets, alt: 'Gemi wallets screen listing bank, e-money and cash balances' },
  ],
};

export const experience = [
  {
    group: 'Work',
    items: [
      {
        when: 'Jun 2026 - now', what: 'Project Analyst', where: 'PT Javan Cipta Solusi', note: '',
        points: [
          'Lead requirement sessions with client users and turn them into user stories, journeys and acceptance criteria',
          'Own project scope and change requests, a duty that moved here when the Product Owner role was merged in',
          'Plan the Gantt chart and delivery timeline with the Tribe Lead',
          'Lead UAT sessions and follow feedback through to sign-off',
        ],
      },
      { when: 'Dec 2024 - Jun 2026', what: 'System Analyst', where: 'PT Javan Cipta Solusi', note: 'BPMN, ERD and mockups for client workflows, API and UI testing, production issue triage and system documentation.' },
      { when: 'Jul - Dec 2024', what: 'System Analyst Intern', where: 'PT Javan Cipta Solusi', note: 'Moved from programming to analysis.' },
      { when: 'Jun - Jul 2024', what: 'PHP Programmer Intern', where: 'PT Javan Cipta Solusi', note: 'APIs and pages for an internal QA tool.' },
    ],
  },
  {
    group: 'Education',
    items: [
      { when: '2020 - 2024', what: 'Information Systems, GPA 3.78', where: 'Universitas Amikom Yogyakarta', note: '' },
      { when: '2023', what: 'Bangkit Academy', where: 'Google, GoTo, Traveloka', note: 'Android path, capstone with machine learning.' },
    ],
  },
];

// The four core groups follow the order of a project, each with one line of proof. The rest supports them.
export const toolkit = [
  { group: 'Analysis', items: ['Requirement gathering', 'User stories', 'Acceptance criteria', 'UAT'], proof: 'About 165 user stories on one rollout project' },
  { group: 'Modeling', items: ['BPMN', 'Camunda Modeler', 'ERD', 'draw.io'], proof: 'BPMN that passed validation and was deployed' },
  { group: 'Delivery', items: ['Scrum', 'Gantt planning', 'Scope management', 'ActiveCollab'], proof: 'Mockup approved in June, live in August 2026' },
  { group: 'Testing', items: ['Postman', 'Apidog', 'Playwright', 'Sentry'], proof: '128 test cases mapped, 32 automated' },
];

export const toolkitMore = [
  { group: 'Data', items: ['SQL', 'SSRS', 'Metabase', 'PostgreSQL'] },
  { group: 'AI', items: ['Claude Code', 'Custom agent skills', 'MCP integrations'] },
  { group: 'Design and code', items: ['Figma', 'Balsamiq', 'PHP', 'Laravel', 'React', 'Flutter'] },
];

export const codeProjects = [
  { name: 'LigaEnggres', url: 'https://github.com/AHanif52/LigaEnggres' },
  { name: 'Village API', url: 'https://github.com/AHanif52/memento-mori' },
  { name: 'StoryApps', url: 'https://github.com/AHanif52/Submision_intermediate' },
];

// Structured data so search engines and AI screeners read the same facts the page shows.
export const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohammad Aufa Hanif',
  jobTitle: 'Project Analyst',
  worksFor: { '@type': 'Organization', name: 'PT Javan Cipta Solusi' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitas Amikom Yogyakarta' },
  address: { '@type': 'PostalAddress', addressLocality: 'Tegal', addressCountry: 'ID' },
  email: `mailto:${site.email}`,
  url: 'https://aufahanif.supsub.my.id',
  sameAs: [site.linkedin, site.github],
  knowsAbout: [...toolkit, ...toolkitMore].flatMap((t) => t.items),
};
