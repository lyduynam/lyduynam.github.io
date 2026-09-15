// Content migrated from the supplied website. Update dates and roles here.
export const profile = {
  name: "Duy-Nam Ly", nickname: "Nam", role: "Researcher & developer",
  institution: "University of Science, VNU-HCM", email: "ldnam@selab.hcmus.edu.vn",
  // Set to "/ldnam-avatar.jpg" if the original photo exists in public/.
  avatar: "/images/ldnam-avatar.jpg",
  // Add the CV file at public/nam-cv.pdf.
  cv: "/nam-cv.pdf",
  bio: "I am a researcher in Human–Computer Interaction, exploring how computers can help people. I envision a future in which XR technologies and Robots become increasingly integrated into our daily lives to support a wide range of activities. Driven by this vision, I am particularly interested in creating XR interfaces that enable people to interact with computers, robots, and AI-powered systems for everyday use. I am currently seeking PhD opportunities. Feel free to explore my research, projects, and publications, and get in touch if my experience aligns with your research interests.",
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com.vn/citations?user=fXfeDqcAAAAJ&hl=en" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/duy-nam-ly-623520214" },
  ],
};
export const navigation = [
  { href: "/", label: "Home" }, { href: "/about", label: "About Me" },
  { href: "/updates", label: "Updates" }, { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" }, //{ href: "/blogs", label: "Blogs" },
];
export const interests = [
  {
    title: "Human–Computer Interaction",
    short: "HCI",
    description:
      "Exploring how computers and intelligent systems can better support people in their everyday activities.",
  },
  {
    title: "Extended Reality",
    short: "XR",
    description:
      "Exploring how AR, VR, and MR technologies can enable more effective and meaningful human–computer interactions.",
  },
  {
    title: "Intelligent XR Interfaces",
    short: "AI + XR",
    description:
      "Integrating AI into XR interfaces to support more effective and intuitive interactions in immersive environments.",
  },
  {
    title: "XR for Human–Robot Interaction",
    short: "XR + HRI",
    description:
      "Using XR to facilitate more transparent, intuitive, and effective interactions between people and robots.",
  },
];
export const education = [
  { title: "M.Sc. in Computer Science", organization: "University of Science, VNU-HCM", period: "2023 – 2026", details: ["GPA: ... / 4.0", "Thesis: Voice-enabled Multimodal Technique for Multiple Object Selection in Virtual Reality", "Advisors: Dr. Khanh-Duy Le, Prof. Wolfgang Stuerzlinger (informal)"]  },
  { title: "B.Sc. in Information Technology", organization: "University of Science, VNU-HCM", period: "2018 – 2022", details: ["GPA: 3.96 / 4.0", "Thesis: Design and Development of an Immersive Collaborative Virtual Environment for Tour Guiding Training", "Advisors: Dr. Khanh-Duy Le and Assoc. Prof. Minh-Triet Tran"] },
];
export const experience = [
   { title: "Visiting Student at IDG, SUSTech, China", organization: "Immersive Design Group (IDG), School of Design, Southern University of Science and Technology, China", period: "Jan 2026 – Sep 2026", details: ["Conducting research on XR technologies, Human-Robot Interaction and Technology for Accessibility."] },
  { title: "Researcher", organization: "SELAB, University of Science, VNU-HCM", period: "2022 – Present", details: ["Conducting research on Human–Computer Interaction, XR technologies, and AI-enabled interaction."] },
  { title: "Teaching Assistant", organization: "University of Science, VNU-HCM", period: "2022 – Present", details: ["Courses include Introduction to HCI, Object-Oriented Programming, Web Development, Game / 3D Application Development, and Mobile Development."] },
];
export const skills = [
  { title: "Development", items: ["AR / VR / MR", "Web development", "Mobile development", "ML model deployment"] },
  { title: "Languages & frameworks", items: ["Unity", "React", "C#", "Python", "SQL", "Nav2 (ROS2)"] },
  { title: "Research & design", items: ["System design", "UX design", "User study design", "Statistical analysis"] },
];
// Each activity accepts title, organization, period, details[], and optional href.
// Add verified reviewing, volunteering, organizing, or talk records here.
export const academicActivities = [
  { title: "Technical Supporter of The ACM Multimedia EVENTA Grand Challenge 2025", period: "2025", details: ["Role: Web Chair"] },
  { title: "Technical Supporter of The ACM Multimedia AOCV Workshop 2025",  period: "2025", details: ["Role: Web Chair"] },
  { title: "Technical Supporter of The ACCV LAVA Workshop 2024",  period: "2024", details: ["Role: Web Chair"] },
];
export const otherActivities = [];
