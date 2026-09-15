import { publications } from "./publications.js";

// Add a record here to create /projects/[slug] automatically.
// publicationLinks connects a research project to one or more bibliography entries.
// publicationLink remains supported for backward compatibility.
// Optional fields: abstract, sections[{heading, paragraphs[], bullets[]}],
// gallery[{src, alt, caption}], youtubeUrl, videoCaption, codeUrl, paperUrl,
// pdfUrl, acknowledgments, affiliations[], role, tools[], liveUrl.
// The SVG covers are concept illustrations, not research screenshots.
const researchProjects = [
  {
    slug: "beyond-motion-intent", title: "Mobile Robot Transparency Through AR Visualizations", year: "2026",
    // publicationLink: "https://doi.org/10.1007/s10055-025-01206-0",
    tags: ["XR", "HRI"], cover: "/images/projects/beyond-motion-intent-mobile-robot.png",
    note: "CHI 2027 Under Review",

    imageAlt: "Concept illustration of connected participants in a panoramic virtual environment.",
    summary: "Collaborative virtual reality for practicing tour guiding together.",
    overview: "This research explores a collaborative virtual reality system for tour guide training. It brings together immersive environments, collaborative interaction, and the development and evaluation of a training system.",
  },
  {
    slug: "lassay", title: "Multimodal Technique for Multiple Object Selection in VR", year: "2026",
    // Temporary title for anonymous review; replace with the actual title after the review period.
   // publicationLink: "Under Review",
    tags: ["XR", "Input Technique"], cover: "/images/projects/lassay.png",
    note: "CHI 2027 Under Review",
    imageAlt: "Concept illustration of connected participants in a panoramic virtual environment.",
    summary: "Collaborative virtual reality for practicing tour guiding together.",

    overview: "This research explores a collaborative virtual reality system for tour guide training. It brings together immersive environments, collaborative interaction, and the development and evaluation of a training system.",
  },
  // {
  //   slug: "collaborative-vr-tour-training", title: "Collaborative VR Tour Guiding Training", year: "2025",
  //   publicationLink: "https://doi.org/10.1007/s10055-025-01206-0",
  //   tags: ["VR", "Collaborative System"], cover: "/images/projects/tour-training.svg",
  //   imageAlt: "Concept illustration of connected participants in a panoramic virtual environment.",
  //   summary: "Collaborative virtual reality for practicing tour guiding together.",
  //   overview: "This research explores a collaborative virtual reality system for tour guide training. It brings together immersive environments, collaborative interaction, and the development and evaluation of a training system.",
  // },
  {
    slug: "hybridmingler", title: "HybridMingler", year: "2023",
    publicationLink: "https://doi.org/10.1145/3544549.3585806",
    tags: ["XR", "Collaborative System"], cover: "/images/projects/hybrid-mingler.png",
    imageAlt: "Concept illustration of connected conversation groups at a hybrid conference.",
    summary: "Mixed-reality support for mingling at hybrid conferences.",
    overview: "HybridMingler explores mixed-reality support for mingling at hybrid conferences. It connects immersive interaction with the social experience of meeting other attendees.",
  },
  {
    slug: "360tourguiding", title: "360TourGuiding: Immersive Collaborative System for Tour Guiding Training", year: "2022",
    publicationLinks: ["https://doi.org/10.1145/3528575.3551436", "https://doi.org/10.1007/s10055-025-01206-0"],
    tags: ["XR", "Collaborative System"], cover: "/images/projects/360tourguiding.png",
    imageAlt: "Concept illustration of a panoramic landscape viewed through a virtual-reality interface.",
    summary: "Towards virtual reality training for tour guiding.",
    overview: "360TourGuiding explores virtual reality training for tour guiding. This project is associated with the MobileHCI 2022 adjunct publication and the tour guiding training theme in my research.",
  },
];

const otherProjects = [
  // {
  //   slug: "virtual-chem-lab", type: "other", title: "Virtual Chemistry Lab", year: "2022",
  //   tags: ["Web", "Design"], cover: "/images/projects/personal-website.svg",
  //   imageAlt: "Interface illustration of the personal website, with a compact profile and project cards.",
  //   summary: "A personal website for research, projects, and the things along the way.",
  //   overview: "A space to bring my research and development work together, with a compact introduction, a running list of updates, project stories, and a full publication archive.",
  //   role: "Design & development", tools: ["Next.js", "React", "CSS"], liveUrl: "/",
  //   sections: [
  //     { heading: "A clear starting point", paragraphs: ["The home page offers a short introduction and a small selection of recent updates and publications. The full background has its own page, keeping the first visit focused and easy to browse."] },
  //     { heading: "Different work, different stories", paragraphs: ["Projects can be explored by topic. Research pages put authors, papers, videos, and citations within reach, while other projects have room for the process, details, and final result."] },
  //     { heading: "Built to keep growing", bullets: ["An update archive for publications, career milestones, and other news.", "A project grid with topic filters and search.", "Responsive layouts for reading on a phone or a larger screen."] },
  //   ],
  // },
  // {
  //   slug: "iot-learning", type: "other", title: "Smart Lock", year: "2021",
  //   tags: ["Web", "Design"], cover: "/images/projects/personal-website.svg",
  //   imageAlt: "Interface illustration of the personal website, with a compact profile and project cards.",
  //   summary: "A personal website for research, projects, and the things along the way.",
  //   overview: "A space to bring my research and development work together, with a compact introduction, a running list of updates, project stories, and a full publication archive.",
  //   role: "Design & development", tools: ["Next.js", "React", "CSS"], liveUrl: "/",
  //   sections: [
  //     { heading: "A clear starting point", paragraphs: ["The home page offers a short introduction and a small selection of recent updates and publications. The full background has its own page, keeping the first visit focused and easy to browse."] },
  //     { heading: "Different work, different stories", paragraphs: ["Projects can be explored by topic. Research pages put authors, papers, videos, and citations within reach, while other projects have room for the process, details, and final result."] },
  //     { heading: "Built to keep growing", bullets: ["An update archive for publications, career milestones, and other news.", "A project grid with topic filters and search.", "Responsive layouts for reading on a phone or a larger screen."] },
  //   ],
  // },
];

export const projects = [
  ...researchProjects.map(project => {
    const links = project.publicationLinks || (project.publicationLink ? [project.publicationLink] : []);
    const linkedPublications = links.map(link => link === "Under Review"
      ? { Title: project.title, Publication: "Under Review", Venue: "Under Review", Year: project.year, Link: "Under Review", Authors: project.authors || [] }
      : publications.find(item => item.Link === link));
    const missingLink = links.find((link, index) => !linkedPublications[index]);
    if (missingLink) {
      throw new Error(`Unknown publication for ${project.slug}: ${missingLink}`);
    }

    return { ...project, type: "research", publications: linkedPublications, publication: linkedPublications[0], youtubeUrl: project.youtubeUrl || linkedPublications.find(item => item?.Demo)?.Demo || "", coverCaption: project.coverCaption ?? "Concept illustration. See the linked paper for the research figures." };
  }),
  ...otherProjects,
];
export function getProject(slug) { return projects.find(project => project.slug === slug); }
export function getPublicationProject(link) { return projects.find(project => project.publications?.some(publication => publication.Link === link)); }
export const projectTags = [...new Set(projects.flatMap(project => project.tags))].sort();
