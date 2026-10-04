import gemiBeranda from '../assets/gemi-beranda.png';
import gemiLaporan from '../assets/gemi-laporan.png';
import gemiKantong from '../assets/gemi-kantong.png';

// Edit content here. Everything on the page renders from these lists.
// The page is drawn as a BPMN diagram: start event (hero), lanes, events, end event (contact).
// Client names are anonymised on purpose: this page is public, the CV (sent privately) carries real names.

export const featured = {
  client: 'National ISP',
  year: '2026 - now, live since Aug 2026',
  title: 'As-built approval workflow for fiber rollout',
  summary:
    'Vendors submit route maps, as-built documents and acceptance photos. Reviewers, approvers and construction managers sign off in turn before the network is handed to maintenance.',
  figures: [
    { n: '~165', label: 'user stories written' },
    { n: '128', label: 'test cases mapped to dev tasks' },
    { n: '204', label: 'APIs catalogued' },
    { n: '3', label: 'network segments in one workflow' },
  ],
  did: [
    'Wrote the requirements spec, ERD and BPMN; the BPMN passed validation and was deployed',
    'Built a clickable mockup for 3 monitoring dashboards, reusing the existing dashboard pattern',
    'Automated 32 dashboard tests in Playwright',
  ],
};

export const lanes = [
  {
    client: 'Finance co-op, Malaysia',
    year: '2026',
    title: 'Finance reporting portal',
    summary: 'A reporting portal on top of a data warehouse, used by the finance team for daily and monthly reports.',
    flow: ['Finance needs', '37 report layouts', 'Warehouse queries', 'Dashboards', 'UAT'],
    end: 'Client sign-off',
    did: ['SSRS reports for receipts, payments, vouchers, claims, profit and loss, cash book', 'Report filters and Excel export'],
  },
  {
    client: 'Internal, PA team',
    year: '2026',
    title: 'AI skills that make PA work repeatable',
    summary:
      "Claude Code skills that encode the team's standards for user stories, test cases, task specs and journeys. Another PA gives the same input and gets output in the same shape as mine, ready for review.",
    flow: ['Team standard', 'Skill rules + examples', 'Lint before push'],
    end: 'Synced to the tracker',
    did: [
      'User story with BPMN and system test, test cases derived 1:1 from its scenarios',
      'Fullstack task specs with acceptance criteria, pushed to ActiveCollab',
      'Journey sheets built to Excel and synced to Google Sheets without touching reviewer columns',
      'Pre-QC task testing that posts a PASSED or FEEDBACK report with evidence',
    ],
  },
];

export const earlier = [
  { client: 'National ISP', year: '2024 - 2025', title: 'FTTH rollout workflow system', text: 'BPMN validated in Camunda, ERD, mockups, API and UI testing.' },
  { client: 'Advertising agency', year: '2025', title: 'Advertising asset CMS', text: 'Asset flow from upload to distribution for every client.' },
  { client: 'Internal tool', year: '2025', title: 'WhatsApp blasting app', text: 'Bulk messaging through a third-party gateway.' },
];

export const gemi = {
  title: 'Gemi, an offline money app',
  summary:
    'A personal finance app for Android with no account and no server. I ran it like a client project: BRD first, a 21-screen prototype, then the Flutter build.',
  flow: ['BRD', '21-screen prototype', 'Flutter build'],
  end: 'APK v1.0.1',
  url: 'https://github.com/AHanif52/gemi',
  shots: [
    { src: gemiBeranda, alt: "Gemi home screen showing remaining September budget and today's expenses" },
    { src: gemiLaporan, alt: 'Gemi weekly report with a bar chart of daily spending' },
    { src: gemiKantong, alt: 'Gemi wallets screen listing bank, e-money and cash balances' },
  ],
};

export const timeline = [
  { when: 'Jun 2026 - now', what: 'Project Analyst', where: 'PT Javan Cipta Solusi', note: 'Requirements with client users, project scope, timelines with the Tribe Lead, UAT. The Product Owner role merged into this one.' },
  { when: 'Dec 2024 - Jun 2026', what: 'System Analyst', where: 'PT Javan Cipta Solusi', note: 'Analyst and consultant on client projects.' },
  { when: 'Jul - Dec 2024', what: 'System Analyst Intern', where: 'PT Javan Cipta Solusi', note: 'Moved from programming to analysis.' },
  { when: 'Jun - Jul 2024', what: 'PHP Programmer Intern', where: 'PT Javan Cipta Solusi', note: 'APIs and pages for an internal QA tool.' },
  { when: '2023', what: 'Bangkit Academy', where: 'Google, GoTo, Traveloka', note: 'Android path, capstone with machine learning.' },
  { when: '2020 - 2024', what: 'Information Systems, GPA 3.78', where: 'Universitas Amikom Yogyakarta', note: '' },
];

export const toolkit = [
  { group: 'AI', items: ['Claude Code', 'Custom agent skills', 'MCP integrations'] },
  { group: 'Analysis', items: ['Requirement gathering', 'User stories', 'Acceptance criteria', 'UAT'] },
  { group: 'Modeling', items: ['BPMN', 'Camunda Modeler', 'ERD', 'draw.io'] },
  { group: 'Delivery', items: ['Scrum', 'Gantt planning', 'Scope management', 'ActiveCollab'] },
  { group: 'Testing', items: ['Postman', 'Apidog', 'Playwright', 'Sentry'] },
  { group: 'Data', items: ['SQL', 'SSRS', 'Metabase', 'PostgreSQL'] },
  { group: 'Design and code', items: ['Figma', 'Balsamiq', 'PHP', 'Laravel', 'React', 'Flutter'] },
];

export const codeProjects = [
  { name: 'LigaEnggres', kind: 'Android', url: 'https://github.com/AHanif52/LigaEnggres' },
  { name: 'Village API', kind: 'REST API', url: 'https://github.com/AHanif52/memento-mori' },
  { name: 'StoryApps', kind: 'Android', url: 'https://github.com/AHanif52/Submision_intermediate' },
];

export const cv = '/CV-Aufa-Hanif.pdf';
export const title = 'Mohammad Aufa Hanif, Project Analyst (Business and System Analyst)';
export const description = 'Mohammad Aufa Hanif, Project Analyst (Business and System Analyst) with 2+ years turning client requests into scoped, tested specs teams can build.';

// Structured data so search engines and AI screeners read the same facts the page shows.
export const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohammad Aufa Hanif',
  jobTitle: 'Project Analyst',
  worksFor: { '@type': 'Organization', name: 'PT Javan Cipta Solusi' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitas Amikom Yogyakarta' },
  address: { '@type': 'PostalAddress', addressLocality: 'Tegal', addressCountry: 'ID' },
  email: 'mailto:aufahanif85@gmail.com',
  url: 'https://aufahanif.supsub.my.id',
  sameAs: ['https://www.linkedin.com/in/aufahanif/', 'https://github.com/AHanif52'],
  knowsAbout: [
    'Business Analysis', 'System Analysis', 'Requirement Gathering', 'Scope Management', 'User Acceptance Testing',
    'BPMN', 'Camunda', 'ERD', 'User Stories', 'Acceptance Criteria', 'Test Cases', 'SQL', 'SSRS', 'Metabase',
    'Scrum', 'Gantt Chart Planning', 'Figma', 'Postman', 'Playwright', 'AI-assisted analysis', 'Claude Code',
  ],
};
