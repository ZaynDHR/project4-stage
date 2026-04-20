export interface Resource {
  id: number
  title: string
  url: string
  category: string
  difficulty: string
  description: string
}

export const resources: Resource[] = [
  { id: 1, title: "MDN Web Docs", url: "https://developer.mozilla.org", category: "Frontend", difficulty: "Beginner", description: "The most comprehensive documentation for HTML, CSS, and JavaScript. Essential for every web developer." },
  { id: 2, title: "freeCodeCamp", url: "https://www.freecodecamp.org", category: "Frontend", difficulty: "Beginner", description: "Free interactive coding lessons with certifications. Perfect for starting your coding journey." },
  { id: 3, title: "The Odin Project", url: "https://www.theodinproject.com", category: "Frontend", difficulty: "Beginner", description: "Full-stack curriculum that's completely free. Learn Ruby, Rails, JavaScript, and more." },
  { id: 4, title: "React Documentation", url: "https://react.dev", category: "Frontend", difficulty: "Intermediate", description: "Official React docs with interactive examples. Build modern UIs with the most popular library." },
  { id: 5, title: "CSS-Tricks", url: "https://css-tricks.com", category: "Frontend", difficulty: "Intermediate", description: "Tips, tricks, and techniques for CSS. Great for learning modern layout methods like Flexbox and Grid." },
  { id: 6, title: "Node.js Docs", url: "https://nodejs.org/docs", category: "Backend", difficulty: "Intermediate", description: "Official Node.js documentation. Learn server-side JavaScript and build scalable applications." },
  { id: 7, title: "Express.js Guide", url: "https://expressjs.com", category: "Backend", difficulty: "Intermediate", description: "Fast, unopinionated web framework for Node.js. Build APIs and web servers with ease." },
  { id: 8, title: "Django Documentation", url: "https://docs.djangoproject.com", category: "Backend", difficulty: "Intermediate", description: "High-level Python web framework. Great for building robust web applications quickly." },
  { id: 9, title: "Python.org Docs", url: "https://docs.python.org", category: "Backend", difficulty: "Beginner", description: "Official Python documentation. The gold standard for learning Python programming." },
  { id: 10, title: "Docker Documentation", url: "https://docs.docker.com", category: "DevOps", difficulty: "Intermediate", description: "Container platform for building, shipping, and running applications. Essential DevOps skill." },
  { id: 11, title: "Git Handbook", url: "https://docs.github.com/en/get-started/using-git/about-git", category: "DevOps", difficulty: "Beginner", description: "Version control with Git. Track changes and collaborate with other developers effectively." },
  { id: 12, title: "GitHub Actions", url: "https://docs.github.com/en/actions", category: "DevOps", difficulty: "Intermediate", description: "Automate your workflow. Build, test, and deploy code directly from GitHub." },
  { id: 13, title: "MongoDB University", url: "https://university.mongodb.com", category: "Databases", difficulty: "Intermediate", description: "Free courses on MongoDB. Learn NoSQL database fundamentals and building with documents." },
  { id: 14, title: "PostgreSQL Docs", url: "https://www.postgresql.org/docs", category: "Databases", difficulty: "Intermediate", description: "The world's most advanced open source relational database. ACID compliance and SQL power." },
  { id: 15, title: "SQLZoo", url: "https://sqlzoo.net", category: "Databases", difficulty: "Beginner", description: "Interactive SQL tutorials. Practice queries in your browser with real databases." },
  { id: 16, title: "VS Code Tips", url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks", category: "Tools", difficulty: "Beginner", description: "Master Visual Studio Code. Boost productivity with keyboard shortcuts and extensions." },
  { id: 17, title: "GitHub Learning Lab", url: "https://github.com/skills", category: "Tools", difficulty: "Beginner", description: "Hands-on GitHub skills. Learn version control, GitHub Actions, and more through interactive courses." },
  { id: 18, title: "LeetCode", url: "https://leetcode.com", category: "Career", difficulty: "Intermediate", description: "Practice coding problems for interviews. Build skills for technical interviews at top companies." },
  { id: 19, title: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org", category: "Career", difficulty: "Intermediate", description: "Curated interview prep materials. Algorithms, system design, and behavioral questions." },
  { id: 20, title: "Blind 75", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions", category: "Career", difficulty: "Advanced", description: "75 essential LeetCode problems. The most efficient list for interview preparation." },
  { id: 21, title: "JavaScript.info", url: "https://javascript.info", category: "Frontend", difficulty: "Beginner", description: "Modern JavaScript tutorial. From basics to advanced topics, everything you need to know." },
  { id: 22, title: "TypeScript Docs", url: "https://www.typescriptlang.org/docs", category: "Frontend", difficulty: "Intermediate", description: "Typed JavaScript. Learn TypeScript for better code quality and developer experience." },
  { id: 23, title: "AWS Documentation", url: "https://docs.aws.amazon.com", category: "DevOps", difficulty: "Advanced", description: "Cloud computing services. Deploy and scale applications on Amazon's cloud platform." },
  { id: 24, title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", category: "Career", difficulty: "Advanced", description: "Learn how to design scalable systems. Networking, databases, and architecture patterns." }
]

export const categories = ["All", "Frontend", "Backend", "DevOps", "Databases", "Tools", "Career"]
export const difficulties = ["Beginner", "Intermediate", "Advanced"]

export const difficultyColors: Record<string, string> = {
  "Beginner": "#10b981",
  "Intermediate": "#f59e0b",
  "Advanced": "#7c3aed"
}

export const categoryColors: Record<string, string> = {
  "Frontend": "#00d9ff",
  "Backend": "#10b981",
  "DevOps": "#f59e0b",
  "Databases": "#ec4899",
  "Tools": "#8b5cf6",
  "Career": "#7c3aed"
}