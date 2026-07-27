module.exports = {
  profile: {
    name: 'Martin Kuria',
    title: 'Computer Science Student',
    tagline: 'Building thoughtful software, one commit at a time.',
    university: 'University of Nairobi',
    degree: 'B.Sc. Computer Science',
    year: 'Class of 2026',
    location: 'Nairobi, Kenya',
    email: 'martin.kuria@students.uon.ac.ke',
    github: 'https://github.com/MartinKuria254',
    linkedin: 'https://linkedin.com/in/martin-kuria',
    bio: `I'm a third-year CS student who fell in love with programming through a broken calculator app in high school. These days I split my time between algorithms coursework, hackathons, and building side projects that solve problems I've actually encountered — from campus bus schedules to study-group coordination.`,
    interests: [
      'Distributed systems',
      'Developer tooling',
      'Competitive programming',
      'Open-source contributions',
      'Tech for education',
    ],
    currentlyLearning: ['Rust', 'System design', 'Machine learning fundamentals'],
  },

  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C / C++', level: 70 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      category: 'Web & Frameworks',
      items: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'React', level: 82 },
        { name: 'HTML / CSS', level: 92 },
        { name: 'REST APIs', level: 85 },
        { name: 'Git & GitHub', level: 90 },
      ],
    },
    {
      category: 'Tools & Concepts',
      items: [
        { name: 'Data structures & algorithms', level: 85 },
        { name: 'Linux / CLI', level: 78 },
        { name: 'Docker basics', level: 65 },
        { name: 'Unit testing', level: 72 },
        { name: 'Agile / Scrum', level: 70 },
      ],
    },
  ],

  projects: [
    {
      slug: 'campus-nav',
      title: 'CampusNav',
      tagline: 'Real-time campus navigation for first-years',
      description:
        'A mobile-friendly web app that maps walking routes between lecture halls, libraries, and cafeterias. Built after watching three freshmen get lost during orientation week.',
      tech: ['React', 'Node.js', 'Leaflet', 'Express'],
      status: 'Live',
      year: '2025',
      highlights: [
        'Offline-first map tiles for slow campus Wi-Fi',
        'Crowdsourced shortcut suggestions',
        'Used by ~200 students during orientation',
      ],
      links: { demo: '#', repo: 'https://github.com/MartinKuria254' },
      featured: true,
    },
    {
      slug: 'study-sync',
      title: 'StudySync',
      tagline: 'Collaborative study session scheduler',
      description:
        'Helps study groups find overlapping free slots in their timetables and auto-generates Google Calendar invites. Born from too many "when are you free?" group chats.',
      tech: ['Python', 'Flask', 'SQLite', 'FullCalendar'],
      status: 'Open source',
      year: '2025',
      highlights: [
        'ICS import from university portal exports',
        'Conflict detection across 5+ schedules',
        'Deployed on Render free tier',
      ],
      links: { demo: '#', repo: 'https://github.com/MartinKuria254' },
      featured: true,
    },
    {
      slug: 'code-snippet-vault',
      title: 'Snippet Vault',
      tagline: 'Personal code snippet manager with tagging',
      description:
        'A CLI + web dashboard for saving, searching, and sharing reusable code snippets across courses. Syntax highlighting for 15+ languages.',
      tech: ['Node.js', 'Express', 'EJS', 'Prism.js'],
      status: 'In progress',
      year: '2026',
      highlights: [
        'Full-text search with fuzzy matching',
        'Export to Markdown for Obsidian',
        'Dark mode by default (obviously)',
      ],
      links: { demo: '#', repo: 'https://github.com/MartinKuria254' },
      featured: true,
    },
    {
      slug: 'algo-visualizer',
      title: 'AlgoViz',
      tagline: 'Step-through visualizer for sorting algorithms',
      description:
        'Interactive canvas animations for bubble sort, merge sort, quicksort, and Dijkstra. Built as a study aid for the Data Structures final.',
      tech: ['JavaScript', 'HTML Canvas', 'Vanilla CSS'],
      status: 'Complete',
      year: '2024',
      highlights: [
        'Adjustable array size and speed controls',
        'Big-O complexity overlay',
        'Shared with CS club study sessions',
      ],
      links: { demo: '#', repo: 'https://github.com/MartinKuria254' },
      featured: false,
    },
    {
      slug: 'budget-tracker-cli',
      title: 'PocketLedger CLI',
      tagline: 'Terminal budget tracker for students',
      description:
        'Track daily expenses from the command line with monthly reports and category breakdowns. Because spreadsheets felt like overkill for chai and matatu fare.',
      tech: ['Python', 'Click', 'Rich', 'JSON storage'],
      status: 'Complete',
      year: '2024',
      highlights: [
        'Zero dependencies beyond stdlib + Rich',
        'Export to CSV for parents (optional)',
        'KES currency support',
      ],
      links: { demo: '#', repo: 'https://github.com/MartinKuria254' },
      featured: false,
    },
  ],

  experience: [
    {
      role: 'Teaching Assistant — Intro to Programming',
      org: 'University of Nairobi, CS Department',
      period: 'Jan 2025 – Present',
      description:
        'Lead weekly lab sessions for 40+ first-year students. Debug Python assignments, hold office hours, and maintain a FAQ wiki that cut repeat questions by half.',
    },
    {
      role: 'Open Source Contributor',
      org: 'Various projects',
      period: '2024 – Present',
      description:
        'Documentation fixes, bug reports, and small feature PRs across Node.js ecosystem packages and Kenyan dev community tools.',
    },
    {
      role: 'Hackathon Participant',
      org: 'Nairobi Tech Week, AngelHack',
      period: '2024 – 2025',
      description:
        'Built MVP prototypes in 24–48 hours. Won "Best Developer Tool" at a local hackathon for an API mock server generator.',
    },
  ],

  education: {
    school: 'University of Nairobi',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022 – 2026 (expected)',
    gpa: '3.7 / 4.0',
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Systems',
      'Computer Networks',
      'Software Engineering',
      'Artificial Intelligence',
      'Web Application Development',
    ],
  },
};
