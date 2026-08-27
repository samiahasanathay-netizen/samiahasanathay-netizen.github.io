// ============================================================
// Academic Portfolio — 14 coursework projects
// Source: Samia Hasan Athay, Portfolio Report, ULAB (2022–2025)
// ============================================================

const ACADEMIC_PROJECTS = [
  {
    id: 1,
    pdf: "assets/academic-pdfs/1-communication-research.pdf",
    course: "MSJ1201 · Communication Research",
    title: "Analysis of the Fashion and Costume Trend of Bangladeshi Film and Media Industry (1940–2020)",
    type: "Research Proposal",
    theme: "N/A",
    semester: "Summer 2022",
    description: "A research proposal tracing how fashion and costume in Bangladeshi film and media shifted between 1940 and 2020 — how historical events, cultural change and Western influence reshaped on-screen clothing over eight decades, and how film in turn helped popularise those trends while still holding onto local tradition.",
    justification: "Costume is never just clothing — on screen it carries character, story and social value. As global fashion and media keep reshaping local dress, this research set out to map that push and pull, and to think about where cultural heritage and modern style can meet.",
    link: null
  },
  {
    id: 2,
    pdf: "assets/academic-pdfs/2-communication-and-technology.pdf",
    course: "MSJ2101 · Communication and Technology",
    title: "Women in Architecture: Marina Tabassum",
    type: "Blog Post",
    theme: "N/A",
    semester: "Fall 2022",
    description: "A blog profile of architect Marina Tabassum — her philosophy, her body of work, and her standing as a Bangladeshi voice on the world stage. It traces how her buildings speak to local culture and how her career has opened doors for other women in architecture and design.",
    justification: "Women still meet real friction in technical and creative fields. Tabassum's career is proof that talent and persistence move past that. Writing about her was a way to put gender equity in STEM and design in front of readers, and to make her story a small nudge for anyone else weighing a similar path.",
    link: null
  },
  {
    id: 3,
    pdf: "assets/academic-pdfs/3-mass-communication.pdf",
    course: "MSJ2201 · Mass Communication",
    title: "Threatening Social Cohesion and Undermining Democracy",
    type: "Mask Making",
    theme: "Group Polarization",
    semester: "Summer 2023",
    description: "A group mask-making piece built around the theme of group polarization — colour, cave-art motifs, spiral patterns and dried plant material used to render how political division fractures social unity. The finished mask was shown at the CI Visual Art Exhibition at ULAB, where the team walked visitors and faculty through its meaning.",
    justification: "Polarization erodes trust and makes it harder for people to actually hear each other. Building an object around the idea — rather than writing about it — forced a more careful, physical kind of thinking about conflict, division and how art can hold a hard topic without flattening it.",
    link: null
  },
  {
    id: 4,
    pdf: "assets/academic-pdfs/4-advanced-english-writing.pdf",
    course: "GEF1202 · Advanced English Writing Skills",
    title: "Jamdani Sarees: A Journey Through the History and Artistry of Bengal's Handloom Weaving Tradition",
    type: "Feature Writing",
    theme: "Resource Mobilization",
    semester: "Spring 2023",
    description: "A feature article on the Jamdani saree — its history, its craft, and its UNESCO recognition as an intangible cultural heritage of Bangladesh. The piece walks through the weaving technique itself and what the textile represents for national identity.",
    justification: "Jamdani sits at the centre of Bangladeshi textile heritage, yet its origins and the labour behind it are often invisible to the people who wear it. This feature was written to put that craftsmanship back in view, and to make a case for protecting and supporting the weavers who keep it alive.",
    link: null
  },
  {
    id: 5,
    pdf: "assets/academic-pdfs/5-advanced-bangla-writing.pdf",
    course: "GEF1203 · Advanced Bangla Writing Skills",
    title: "Shilpaguru Safiuddin Ahmed",
    titleBn: "শিল্পগুরু সফিউদ্দিন আহমেদ",
    type: "Feature Writing",
    theme: "N/A",
    semester: "Fall 2022",
    description: "A Bangla-language feature on Safiuddin Ahmed, one of the pioneers of modern art in Bangladesh — his life, his printmaking practice, and his role in shaping the country's visual art tradition.",
    justification: "Safiuddin Ahmed's contribution to Bangladeshi art runs deep but isn't always taught in detail. The piece was written to introduce his legacy to readers and to argue, gently, for keeping this part of the country's artistic history visible.",
    link: null
  },
  {
    id: 6,
    pdf: "assets/academic-pdfs/6-convergence-communication-1.pdf",
    course: "MSJ2102 · Convergence Communication I",
    title: "And Then, Princess Ariel Has Nowhere to Stay",
    type: "Trashion Show",
    theme: "Resource Mobilization",
    semester: "Spring 2023",
    description: "An 8-member trashion show built entirely from recycled waste materials, staged around marine pollution and its effect on ocean life. As one of the costume designers, this project meant sourcing and shaping discarded material into wearable pieces that carried a real environmental message rather than just a runway look.",
    justification: "Marine pollution rarely gets the audience it deserves. Turning waste into costume made the issue tangible — a way of using fashion as advocacy, and of showing that discarded material still has creative and communicative value.",
    link: null
  },
  {
    id: 7,
    pdf: "assets/academic-pdfs/7-convergence-communication-2.pdf",
    course: "MSJ2202 · Convergence Communication II",
    title: "Echoes of Mastery",
    type: "Video Art",
    theme: "Theory of Desirable Difficulty",
    semester: "Spring 2024",
    description: "A video-art piece on what mastery actually requires — patience, repetition and lived experience over rote memorisation. Built around the Theory of Desirable Difficulty, the visuals and pacing were designed to make that struggle feel earned rather than simply stated.",
    justification: "Learning is rarely linear, and the theory behind desirable difficulty says as much. The film was made to give viewers a felt sense of that — that real growth tends to come from friction, not shortcuts — and to show video as a legitimate way to carry an academic idea.",
    link: { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=AU4d5ETNKX8" }
  },
  {
    id: 8,
    pdf: "assets/academic-pdfs/8-interpersonal-intercultural.pdf",
    course: "MSJ2241 · Interpersonal and Intercultural Communication",
    title: "Navigating Diversity: A Brief Summary of Approach to Intercultural Communication Research",
    type: "Digital Story",
    theme: "N/A",
    semester: "Fall Semester",
    description: "A team-produced audiovisual piece on intercultural and interpersonal communication, using Dhaka's rickshaw art as a case study in how local, everyday craft becomes a channel for cultural exchange and understanding.",
    justification: "Rickshaw art is easy to overlook precisely because it's everywhere. Using it as the case study was a way to argue that respect for cultural difference doesn't need to start somewhere grand — it can start with something as local and recognisable as a painted rickshaw.",
    link: { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=cq06bfXVQMs" }
  },
  {
    id: 9,
    pdf: "assets/academic-pdfs/9-created-private-media.pdf",
    course: "MSJ3242 · Created Private Media",
    title: "Story of Our Bonoful",
    type: "PSA",
    theme: "Poverty Trap",
    semester: "Fall 2024",
    description: "A corporate audiovisual made with a small production team for the Akij Foundation's Bonoful project, following how the initiative supports children from low-income families with access to education. The film combines student interviews with input from the project manager to lay out its impact.",
    justification: "Breaking a poverty cycle is, in large part, an education problem. This project was built to show how a corporate CSR programme can move that needle, and to give the students behind the statistics an actual voice in how the story got told.",
    link: { label: "View on Google Drive", url: "https://drive.google.com/drive/folders/1kEPnYcocAo7Vd8ozamXcuTxB1km1mTu_" }
  },
  {
    id: 10,
    pdf: "assets/academic-pdfs/10-pr-campaign.pdf",
    course: "MSJ3141 · Public Relations Campaign",
    title: "Grameenphone Digital School: Pathway to a Digital Future",
    titleBn: "গ্রামীণফোন ডিজিটাল স্কুল",
    type: "Campaign Planning",
    theme: "Poverty Trap Theory",
    semester: "Summer 2024",
    description: "A full PR campaign plan built around Grameenphone's CSR push to bring digital education to underprivileged communities — communication strategy, content planning and a digital engagement plan, including a promotional social-media reel produced as part of the deliverables.",
    justification: "Digital literacy is one of the more direct levers on the poverty gap. The campaign was designed to build awareness and community buy-in around Grameenphone's programme, and to make the case that corporate CSR can do more than sponsor — it can actually shift outcomes.",
    link: { label: "View campaign deck", url: "https://drive.google.com/file/d/1vDlfpdv3swlgPtyPhDz_7TOVi-YQoBLo/view?usp=sharing" }
  },
  {
    id: 11,
    pdf: "assets/academic-pdfs/11-media-relations.pdf",
    course: "MSJ3142 · Media Relations",
    title: "Press Coverage: 9th Dhaka International Film Festival",
    type: "Press Release / News Report",
    theme: "N/A",
    semester: "Spring 2025",
    description: "A news report covering the 9th Dhaka International Film Festival (2023) — its opening ceremony, screening schedule, guest speakers and audience response on the ULAB campus, written in standard journalistic style for event coverage.",
    justification: "Event reporting is a core media-relations skill — getting the facts down clearly, on deadline, in a form an editor could run as-is. This project was practice at exactly that discipline.",
    link: null
  },
  {
    id: 12,
    pdf: "assets/academic-pdfs/12-pr-research.pdf",
    course: "MSJ3141 · Public Relations Research",
    title: "Visual Communication in Campus Media: Assessing the Quality of ULAB TV's Graphic Content and Its PR Impact",
    type: "Research",
    theme: "N/A",
    semester: "Summer 2025",
    description: "A research study evaluating the graphic content produced by ULAB TV and how it shapes audience perception, brand image and PR outcomes for the university — looking specifically at where visual design supports, or undercuts, an organisation's communication strategy.",
    justification: "Visual identity does a lot of quiet work in how an organisation is perceived. This research set out to pinpoint where ULAB TV's graphic content was landing well and where it could tighten up, with an eye on what that means for audience engagement.",
    link: null
  },
  {
    id: 13,
    pdf: "assets/academic-pdfs/13-advertisement.pdf",
    course: "MSJ4142 · Advertisement",
    title: "Desh Shobar",
    titleBn: "দেশ সবার",
    type: "PSA",
    theme: "Revolution and Aftermath",
    semester: "Fall 2024",
    description: "A public-service advertisement built around religious equality and social harmony in Bangladesh, using visual storytelling to bring together people from different religions, ethnicities and social backgrounds under one message: the country belongs to everyone.",
    justification: "Religious harmony isn't automatic — it takes active, repeated communication. This advertisement was made to put that message in front of a wide audience and encourage the kind of everyday respect that keeps a pluralistic society workable.",
    link: { label: "View on Google Drive", url: "https://drive.google.com/drive/folders/1kEPnYcocAo7Vd8ozamXcuTxB1km1mTu_" }
  },
  {
    id: 14,
    pdf: "assets/academic-pdfs/14-speech-writing.pdf",
    course: "MSJ3243 · Speech Writing and Public Speaking",
    title: "Network Propaganda about Chittagong Hill Tracts",
    type: "Speech Writing",
    theme: "Network Propaganda",
    semester: "Spring 2025",
    description: "An extemporaneous speech unpacking the competing narratives around the Chittagong Hill Tracts — how government, Indigenous communities and other stakeholders each frame the conflict differently, and what role media and propaganda play in shaping public understanding.",
    justification: "The CHT is one of Bangladesh's more complex and sensitive issues, and it's easy for a single narrative to dominate. This project was an exercise in holding multiple perspectives at once, and in trying to speak about a contested issue responsibly.",
    link: null
  }
];
