// Add, edit, or remove posts here. Each post becomes a page at /blogs/[slug].
export const blogs = [
  {
    slug: "notes-from-the-journey",
    title: "Notes from the journey",
    date: "2026-09",
    category: "Reflection",
    readTime: "2 min read",
    cover: "/images/projects/personal-website.svg",
    coverAlt: "A minimal illustration of a personal research website",
    excerpt: "A small space for writing about research, building, and the lessons I want to remember.",
    intro: "I want this blog to be a place for the thoughts that do not always fit into a paper, a project page, or a presentation.",
    tags: ["Reflection", "Research", "Building"],
    sections: [
      {
        heading: "Why I’m writing here",
        paragraphs: [
          "Research often leaves behind small observations: a conversation that changes the direction of a prototype, a failed experiment that teaches more than an expected result, or a design decision that becomes clearer only after it has been used.",
          "This is where I want to keep those observations. The writing will be personal, practical, and still in progress."
        ]
      },
      {
        heading: "What I’ll share",
        bullets: [
          "Lessons from designing and evaluating interactive systems.",
          "Reflections on building with HCI, XR, and AI.",
          "Small notes about the process behind the finished work."
        ]
      }
    ]
  }
];
