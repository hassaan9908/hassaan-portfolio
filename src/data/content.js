// Single source of truth for every piece of copy on the site.
// Sourced from Muhammad Hassaan's Flutter + MERN CVs.

export const profile = {
  name: 'Muhammad Hassaan',
  firstName: 'Hassaan',
  roles: ['Full Stack Engineer', 'Mobile & Web Apps'],
  headline: 'I build cross-platform apps people actually keep on their home screen.',
  location: 'Islamabad, Pakistan',
  email: 'hassaanatif5@gmail.com',
  phone: '+92 310 5259908',
  phoneHref: '+923105259908',
  available: true,
  availabilityNote: 'Available for new opportunities',
  bio: [
    'I’m a developer who works across mobile and web — shipping production Flutter apps to the Apple App Store, and building full-stack products on the MERN stack.',
    'Most of my day-to-day is turning Figma files into pixel-perfect, responsive interfaces, wiring them to REST APIs, and keeping the state layer clean with GetX or BLoC. I’ve also shipped the unglamorous parts that make apps real: in-app purchases, StoreKit, ad monetization, and Firebase-backed configuration.',
  ],
  socials: [
    {
      label: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      href: 'https://www.linkedin.com/in/muhammad-hassaan-a91282264/',
    },
    { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/hassaan9908/' },
    { label: 'Email', icon: 'fas fa-envelope', href: 'mailto:hassaanatif5@gmail.com' },
    { label: 'Phone', icon: 'fas fa-phone', href: 'tel:+923105259908' },
  ],
};

export const stats = [
  { value: '10+', label: 'Apps shipped to production' },
  { value: '10+', label: 'Live on the Apple App Store' },
  { value: '2+', label: 'Years building with Flutter' },
  { value: '2+', label: 'Years building with React.js & Next.js' },
];

export const services = [
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Cross-Platform Mobile Apps',
    body: 'One Flutter codebase, two polished native apps. From Figma handoff to a signed build on the App Store — including release, review, and post-launch maintenance.',
    tags: ['Flutter', 'Dart', 'iOS + Android'],
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Full-Stack Web Development',
    body: 'End-to-end MERN builds — MongoDB schema design, Express REST APIs, and React front ends that stay fast and readable as the product grows.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    icon: 'fas fa-wand-magic-sparkles',
    title: 'AI Feature Integration',
    body: 'Bringing LLM and generative APIs into real products: chat, text-to-video, voice and audio generation, with the streaming and error handling done properly.',
    tags: ['OpenAI', 'ElevenLabs', 'REST'],
  },
  {
    icon: 'fas fa-sack-dollar',
    title: 'Monetization & Growth',
    body: 'Subscriptions and revenue plumbing that survives App Store review — in-app purchases, StoreKit, and Google Mobile Ads wired into a hybrid monetization model.',
    tags: ['StoreKit', 'IAP', 'AdMob'],
  },
];

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'Essenceware Technologies',
    period: 'Apr 2026 — Aug 2026',
    location: 'Rawalpindi',
    points: [
      'Developed scalable cross-platform mobile applications using Flutter, transforming Figma UI/UX designs into responsive, pixel-perfect, production-ready interfaces.',
      'Implemented robust state management architectures using GetX and BLoC to build maintainable, high-performance applications.',
      'Integrated RESTful APIs for seamless backend communication, dynamic data handling, and real-time content synchronization.',
      'Implemented monetization and subscription systems using google_mobile_ads, in_app_purchase, and StoreKit, enabling ad integration and secure in-app purchase workflows.',
    ],
    stack: ['Flutter', 'Dart', 'GetX', 'BLoC', 'StoreKit', 'Firebase'],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Essenceware Technologies',
    period: 'Jan 2026 — Mar 2026',
    location: 'Rawalpindi',
    points: [
      'Worked alongside senior developers to gain an industry-level perspective on software development.',
      'Developed cross-platform mobile applications using Flutter based on Figma UI/UX designs.',
      'Integrated RESTful APIs for dynamic data handling.',
      'Published and maintained applications on the Apple App Store.',
    ],
    stack: ['Flutter', 'REST APIs', 'App Store Connect'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Digital Empowerment Network',
    period: 'Jul 2024 — Sept 2024',
    location: 'Islamabad',
    points: [
      'Solved weekly real-world web development and problem-solving tasks.',
      'Designed compact, efficient front-end solutions contributing to the company’s growth initiatives.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'React'],
  },
];

export const projectFilters = ['All', 'Mobile', 'Web', 'AI'];

export const projects = [
  {
    title: 'AI Ringtone App',
    org: 'Essenceware Technologies',
    period: 'Jul 2026 — Aug 2026',
    categories: ['Mobile', 'AI'],
    featured: true,
    icon: 'fas fa-music',
    summary:
      'An AI-powered ringtone studio: text-to-ringtone creation, sound effects generation, audio import and trimming, plus a shareable library of downloadable tones.',
    points: [
      'Integrated the ElevenLabs API for AI-driven voice and audio generation.',
      'Firebase Firestore for user profiles and ringtone metadata, Realtime Database for dynamic API key and ad configuration.',
      'Cloudflare Storage for scalable audio hosting and delivery.',
    ],
    stack: ['Flutter', 'ElevenLabs API', 'Firestore', 'Cloudflare R2'],
  },
  {
    title: 'AI Chat & Video Generator',
    org: 'Essenceware Technologies',
    period: 'Apr 2026 — May 2026',
    categories: ['Mobile', 'AI'],
    featured: true,
    icon: 'fas fa-comments',
    summary:
      'A personalized AI chatbot with contextual conversation, paired with text-to-video generation driven by natural-language prompts.',
    points: [
      'Built contextual conversation flows delivering intelligent, user-centric responses.',
      'Connected conversational AI workflows to REST APIs for real-time communication and recommendations.',
    ],
    stack: ['Flutter', 'REST APIs', 'Generative AI'],
  },
  {
    title: 'CarHive',
    org: 'Final Year Project · Air University',
    period: 'Aug 2025 — May 2026',
    categories: ['Mobile'],
    featured: true,
    icon: 'fas fa-car-side',
    summary:
      'A car buying and selling marketplace with vehicle verification, mutual investment, and an immersive 360° car view.',
    points: [
      'Designed the verification flow that gates listings before they reach buyers.',
      'Built a 360° vehicle viewer for a showroom-quality browsing experience.',
    ],
    stack: ['Flutter', 'Firebase', 'Dart'],
  },
  {
    title: 'Zip–UnZip',
    org: 'Essenceware Technologies',
    period: 'Feb 2026',
    categories: ['Mobile'],
    icon: 'fas fa-file-zipper',
    appStore: true,
    summary:
      'A cross-platform file utility with ZIP/UNZIP support and media-specific compression for photos, audio, and video.',
    points: [
      'Hybrid monetization with in-app purchases and Google Ads.',
      'Published and maintained on the Apple App Store.',
    ],
    stack: ['Flutter', 'In-App Purchase', 'Google Ads'],
  },
  {
    title: 'AI Humanizer',
    org: 'Essenceware Technologies',
    period: 'Jan 2026',
    categories: ['Mobile', 'AI'],
    icon: 'fas fa-pen-fancy',
    appStore: true,
    summary:
      'A writing toolkit built around text humanizing, grammar checking, AI detection, paraphrasing, and plagiarism checks.',
    points: [
      'Integrated the OpenAI API, Firebase, and Google Mobile Ads.',
      'Shipped and maintained on the Apple App Store.',
    ],
    stack: ['Flutter', 'OpenAI API', 'Firebase'],
  },
  {
    title: 'Feasto — Crave. Click. Eat.',
    org: 'Air University',
    period: 'May 2025 — Jun 2025',
    categories: ['Web'],
    icon: 'fas fa-burger',
    summary:
      'A full-stack online food ordering platform covering restaurant listings, cart management, and order placement.',
    points: [
      'Designed REST APIs for menu and order management.',
      'Responsive React front end tuned for a fast ordering flow.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'AI Finance Advisor',
    org: 'Air University',
    period: 'May 2025 — Jun 2025',
    categories: ['Web', 'AI'],
    icon: 'fas fa-chart-line',
    summary:
      'An AI/ML-powered personal finance assistant delivering real-time, personalized financial guidance.',
    points: [
      'Node.js/Express REST APIs connecting a React front end to MongoDB.',
      'Stored user data and generated recommendations for repeat sessions.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
  },
  {
    title: 'Plantify',
    org: 'Personal Project',
    period: 'Feb 2025',
    categories: ['Web'],
    icon: 'fas fa-seedling',
    summary:
      'A full-stack plant e-commerce app where users browse categories and buy plants online.',
    points: [
      'Product catalog, shopping cart, and order management over REST APIs.',
      'Responsive UI across browsing, cart, and checkout.',
    ],
    stack: ['React', 'Express', 'MongoDB', 'Bootstrap'],
  },
];

export const skillGroups = [
  {
    title: 'Mobile Development',
    icon: 'fas fa-mobile-screen-button',
    skills: [
      { name: 'Flutter', icon: 'fab fa-flutter' },
      { name: 'Dart', icon: 'fas fa-code' },
      { name: 'GetX', icon: 'fas fa-bolt' },
      { name: 'BLoC', icon: 'fas fa-diagram-project' },
      { name: 'StoreKit', icon: 'fab fa-apple' },
      { name: 'In-App Purchases', icon: 'fas fa-cart-shopping' },
      { name: 'Google Mobile Ads', icon: 'fab fa-google' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'fas fa-laptop-code',
    skills: [
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Next.js', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'TypeScript', icon: 'fab fa-typescript'},
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: 'fas fa-database',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'Firebase', icon: 'fas fa-fire' },
      { name: 'Supabase', icon: 'fas fa-bolt-lightning' },
      { name: 'SQLite', icon: 'fas fa-database' },
    ],
  },
  {
    title: 'APIs, Cloud & Tooling',
    icon: 'fas fa-cloud',
    skills: [
      { name: 'REST APIs', icon: 'fas fa-plug' },
      { name: 'FastAPI', icon: 'fas fa-gauge-high' },
      { name: 'OpenAI API', icon: 'fas fa-robot' },
      { name: 'Google Cloud', icon: 'fab fa-google' },
      { name: 'Git & GitHub', icon: 'fab fa-github' },
      { name: 'CI/CD', icon: 'fas fa-arrows-rotate' },
    ],
  },
];

export const marqueeItems = [
  'Flutter', 'Dart', 'React.js', 'Node.js', 'Express', 'MongoDB',
  'Firebase', 'GetX', 'BLoC', 'REST APIs', 'OpenAI', 'Supabase',
  'StoreKit', 'FastAPI', 'Git', 'CI/CD',
];

export const education = [
  {
    degree: 'BS in Computer Science',
    school: 'Air University, Islamabad',
    period: '2022 — 2026',
  },
  {
    degree: 'FSc (Pre-Engineering)',
    school: 'Islamabad Model College for Boys (I-8/3)',
    period: '2020',
  },
  {
    degree: 'Matric (Science)',
    school: 'Modern Language School, Islamabad',
    period: '2018',
  },
];

export const certifications = [
  { name: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps', issuer: 'Coursera — IBM', date: 'Dec 2024' },
  { name: 'Developing Front-End Apps with React', issuer: 'Coursera — IBM', date: 'Mar 2025' },
  { name: 'Introduction to Software Engineering', issuer: 'Coursera — IBM', date: 'Jan 2025' },
  { name: 'Web Development Boot-camp', issuer: 'Air University', date: 'Jan 2023' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
