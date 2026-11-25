import { publications } from "./publications.js";

// Add a record here to create /projects/[slug] automatically.
// publicationLinks connects a research project to one or more bibliography entries.
// publicationLink remains supported for backward compatibility.
// Optional fields: note, abstract, overview, sections[{heading, paragraphs[], bullets[],
// images:[{src, alt, caption}], youtubeUrl, videoCaption}],
// gallery[{src, alt, caption}], youtubeUrl, videoCaption, codeUrl, paperUrl,
// pdfUrl, acknowledgments, affiliations[], role, tools[], liveUrl.
// The SVG covers are concept illustrations, not research screenshots.
const researchProjects = [
  {
    slug: "beyond-motion-intent", title: "Mobile Robot Transparency Through AR Visualizations", year: "2026",
    // publicationLink: "https://doi.org/10.1007/s10055-025-01206-0",
    tags: ["XR", "HRI"], cover: "/images/projects/beyond-motion-intent-mobile-robot.png",
    note: "on-going",

    coverCaption: "Concept illustration of connected participants in a panoramic virtual environment.",
    summary: "Collaborative virtual reality for practicing tour guiding together.",
    overview: "This research explores a collaborative virtual reality system for tour guide training. It brings together immersive environments, collaborative interaction, and the development and evaluation of a training system.",
  },
  {
    slug: "lassay", title: "Multimodal Technique for Multiple Object Selection in Virtual Reality", year: "2026",
    // Temporary title for anonymous review; replace with the actual title after the review period.
   // publicationLink: "Under Review",
    tags: ["XR", "Input Technique"], cover: "/images/projects/lassay.png",
    note: "Under review",
    youtubeUrl: "https://www.youtube.com/watch?v=HyKfxd-4Ih8",
    
    coverCaption: "Concept illustration of our proposed multimodal technique for multiple object selection in virtual reality (VR) environments.",
    // abstract: "Your research abstract...",
    overview: "We introduce a novel multimodal technique for multiple object selection in virtual reality (VR) environments, which is under review for a flagship conference in HCI (MINOR REVISION - Round 1). Due to the anonymous review process, the title and abstract are temporarily withheld.",

    // youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",

    // sections: [
    //   {
    //     heading: "System Design",
    //     paragraphs: [
    //       "Description of the system..."
    //     ],
    //     images: [
    //       {
    //         src: "/images/projects/lassay/system.png",
    //         caption: "System architecture"
    //       }
    //     ]
    //   },
    //   {
    //     heading: "User Study",
    //     paragraphs: [
    //       "Description of the experiment..."
    //     ]
    //   }
    // ],

    // gallery: [
    //   {
    //     src: "/images/projects/lassay/demo.png",
    //     caption: "Lassay demonstration"
    //   },
    //   {
    //     src: "/images/projects/lassay/demo.png",
    //     caption: "Lassay demonstration"
    //   }
    // ],
    },
{
    slug: "icontra", title: "icontra: Toward thematic collection design via interactive concept transfer", year: "2024",
    publicationLinks: ["https://doi.org/10.1145/3613905.3650788"],
    tags: ["XR", "Generative AI"], cover: "/images/projects/icontra.png",
    note: "CHI Extended Abstract 2024",
    abstract: "Creating thematic collections in industries demands innovative designs and cohesive concepts. Designers may face challenges in maintaining thematic consistency when drawing inspiration from existing objects, landscapes, or artifacts. While AI-powered graphic design tools offer help, they often fail to generate cohesive sets based on specific thematic concepts. In response, we introduce iCONTRA, an interactive CONcept TRAnsfer system. With a user-friendly interface, iCONTRA enables both experienced designers and novices to effortlessly explore creative design concepts and efficiently generate thematic collections. We also propose a zero-shot image editing algorithm, eliminating the need for fine-tuning models, which gradually integrates information from initial objects, ensuring consistency in the generation process without influencing the background. A pilot study suggests iCONTRA’s potential to reduce designers’ efforts. Experimental results demonstrate its effectiveness in producing consistent and high-quality object concept transfers. iCONTRA stands as a promising tool for innovation and creative exploration in thematic collection design.",
    coverCaption: "Given a single object image (i.e., left image), when users input brief prompts, our proposed iCONTRA system unleashes the power of generative AI, recommending objects that have the same theme as the input object (i.e., right images). The system also preserves the original structure and scene layout with unwavering precision, which is helpful for designers when visualizing new objects in the same environment, such as background and light.",
  },
   {
    slug: "artvista", title: "ARtVista: Gateway To Empower Anyone Into Artist", year: "2024",
    publicationLinks: ["https://doi.org/10.1145/3613905.3650760"],
    tags: ["XR", "Generative AI"], cover: "/images/projects/artvista.png",
    coverCaption: "Drawing is an art that enables people to express their imagination and emotions. However, individuals usually face challenges in drawing, especially when translating conceptual ideas into visually coherent representations and bridging the gap between mental visualization and practical execution. In response, we propose ARtVista - a novel system integrating AR and generative AI technologies. ARtVista not only recommends reference images aligned with users’ abstract ideas and generates sketches for users to draw but also goes beyond, crafting vibrant paintings in various painting styles. ARtVista also offers users an alternative approach to create striking paintings by simulating the paint-by-number concept on reference images, empowering users to create visually stunning artwork devoid of the necessity for advanced drawing skills. We perform a pilot study and reveal positive feedback on its usability, emphasizing its effectiveness in visualizing user ideas and aiding the painting process to achieve stunning pictures without requiring advanced drawing skills.",
    note: "CHI Extended Abstract 2024",
    abstract: "Mixed Reality (MR) is often viewed and experienced by users wearing specialized head-mounted displays (HMDs) to perceive virtual objects spatially positioned in the users’ physical environment. In a classroom or during on-stage presentation, it is often presenters only who are equipped with MR HMDs. However, since spectators most often outnumber presenters, equipping collocated spectators with HMDs to create a shared immersive experience can be costly. This imbalance can result in inefficient presenter-spectator communication and can reduce spectator engagement. To address the need of viewing MR content in such collocated asymmetric groups, we present a concept called XRPublicSpectator. This system utilizes a large display to present a third-person-view of the MR environment constructed by combining RGB-D data of the physical space obtained from a depth-sensing camera with objects from the same virtual environment as tracked by the MR HMDs. Leveraging the XRPublicSpectator concept, we developed an exemplary application which captivated an MR game arena where non-HMD users can watch players performing a duel card game. Results from a preliminary study with the exemplary application show that compared to the first-person MR view, XRPublicSpectator enabled non-HMD users to more comprehensively perceive information within the MR environment and potentially improved their engagement with HMD users and MR contents.",
  },
   {
    slug: "xrpublicspectator", title: "XRPublicSpectator: Towards Public Mixed Reality Viewing in Collocated Asymmetric Groups", year: "2024",
    publicationLinks: ["https://doi.org/10.1145/3613905.3650796"],
    tags: ["XR"], cover: "/images/projects/xrpublicspectator.png",
    coverCaption: "XRPublicSpectator concept and its system elements for on-stage presentation in an collocated asymmetric group: \"opposite\" scene view from a depth camera mounted on top of the large public display facing non-HMD users (left); \"same-side\" scene view from an on-stage mounted depth camera on the same side with non-HMD users, facing the public display (right). Non-HMD users in the same room can still comprehensively perceive the presence and spatiality of virtual objects in the MR space, including those outside the first-person views of users wearing MR HMDs.",
    note: "CHI Extended Abstract 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=fa2HkcKgxHI",
    abstract: "Mixed Reality (MR) is often viewed and experienced by users wearing specialized head-mounted displays (HMDs) to perceive virtual objects spatially positioned in the users’ physical environment. In a classroom or during on-stage presentation, it is often presenters only who are equipped with MR HMDs. However, since spectators most often outnumber presenters, equipping collocated spectators with HMDs to create a shared immersive experience can be costly. This imbalance can result in inefficient presenter-spectator communication and can reduce spectator engagement. To address the need of viewing MR content in such collocated asymmetric groups, we present a concept called XRPublicSpectator. This system utilizes a large display to present a third-person-view of the MR environment constructed by combining RGB-D data of the physical space obtained from a depth-sensing camera with objects from the same virtual environment as tracked by the MR HMDs. Leveraging the XRPublicSpectator concept, we developed an exemplary application which captivated an MR game arena where non-HMD users can watch players performing a duel card game. Results from a preliminary study with the exemplary application show that compared to the first-person MR view, XRPublicSpectator enabled non-HMD users to more comprehensively perceive information within the MR environment and potentially improved their engagement with HMD users and MR contents.",
  },
  {
    slug: "hybridmingler", title: "HybridMingler: Towards Mixed-Reality Support for Mingling at Hybrid Conferences ", year: "2023",
    publicationLink: "https://doi.org/10.1145/3544549.3585806",
    tags: ["XR", "Collaborative System"], cover: "/images/projects/hybrid-mingler.png",
    coverCaption: "HybridMingler concept illustrations: On-site attendees while mingling with remote attendees through a mobile MR interface after scanning the physical meet-up hub (left) and remote attendee while mingling using a 3D interface, enabled for VR, where she can see on-site and remote attendees spatially anchored in a virtual copy of the physical mingling space (right).",
    note: "CHI Extended Abstract 2023",
    youtubeUrl: "https://www.youtube.com/watch?v=LfBWy50K6OA",
    abstract: "Mingling, the activity of ad-hoc, private, opportunistic conversations ahead of, during, or after breaks, is an important socializing activity for attendees at scheduled events, such as in-person conferences. The Covid-19 pandemic had a dramatic impact on the way conferences are organized, so that most of them now take place in a hybrid mode where people can either attend on-site or remotely. While on-site attendees can resume in-person mingling, hybrid modes make it challenging for remote attendees to mingle with on-site peers. In addressing this problem, we propose a collaborative mixed-reality (MR) concept, including a prototype, called HybridMingler. This is a distributed MR system supporting ambient awareness and allowing both on-site and remote conference attendees to virtually mingle. HybridMingler aims to provide both on-site and remote attendees with a spatial sense of co-location in the very same venue location, thus ultimately improving perceived presence."
  },
  {
    slug: "360tourguiding", title: "360TourGuiding: Immersive Collaborative System for Tour Guiding Training", year: "2022",
    publicationLinks: ["https://doi.org/10.1145/3528575.3551436", "https://doi.org/10.1007/s10055-025-01206-0"],
    tags: ["XR", "Collaborative System"], cover: "/images/projects/360tourguiding.png",
    coverCaption: "360TourGuiding concept: a tour guiding trainee can view and practice tour guiding with 360 travel videos in VR. Other people can remotely join into the training session as audiences or acting tourist using their mobile device (e.g., tablet)or personal computer (e.g., laptop), which can capture their facial video streams using the built-in front facing camera. The audiences’ facial video streams are displayed on corresponding 3D avatars in the VR environment.",
    note: "MobileHCI'22 Adjunct & Springer VR",
    youtubeUrl: "https://www.youtube.com/watch?v=vCcoaCaGifw",
    overview: "Tour guiding plays an important role in turning sightseeing tours into memorable experiences. Tour guides, especially inexperienced ones, must practice intensively to perfect their craft. It is key that guides acquire knowledge about sights, in-situ presentation skills, and perfection ability to interact with and engage tourists. Therefore, tour-guide education requires on-site training at the place of interest including live tourist audiences. However, for modest budgets, such setups are costly and tourism students have to practice tour guiding at home or in simulated class-room setups. It has become a challenge for students to adequately prepare themselves for jobs in terms of relevant knowledge and skills. To tackle this problem, we propose 360TourGuiding, a VR system enabling its users to practice tour guiding with 360 travel videos plus the attendance of remote audiences participating through their mobile and personal device. This project reports on the concept, on our design, current implementation, and evaluation of the 360TourGuiding prototype. This work has been accepted for two publications MobileHCI 2022 Adjunct and the Springer VR journal.",
  },
 
  
];

const otherProjects = [
  // {
  //   slug: "virtual-chem-lab", type: "other", title: "Virtual Chemistry Lab", year: "2022",
  //   tags: ["Web", "Design"], cover: "/images/projects/personal-website.svg",
  //   coverCaption: "Interface illustration of the personal website, with a compact profile and project cards.",
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
  //   coverCaption: "Interface illustration of the personal website, with a compact profile and project cards.",
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
