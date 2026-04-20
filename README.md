# DevHub - Student Development Resource Library

An online resource library that helps future development students discover learning materials, tutorials, tools, and guides organized by topic.

## Features

- **Browse Resources**: 24 curated development resources
- **Filter by Category**: Frontend, Backend, DevOps, Databases, Tools, Career
- **Search**: Real-time search across titles and descriptions
- **Bookmarks**: Save favorite resources (persists in localStorage)
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- TypeScript
- Vite
- CSS (custom styles, no framework)

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Navigate to the project directory:
```bash
cd devhub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
devhub/
├── src/
│   ├── main.ts      # Main application code
│   ├── style.css   # All styles
│   └── counter.ts  # Counter utility
├── index.html      # HTML entry point
├── package.json    # Dependencies
└── vite.config.ts # Vite configuration
```

## Adding New Resources

To add more resources, edit the `resources` array in `src/main.ts`:

```typescript
const resources = [
  { id: 1, title: "Resource Name", url: "https://example.com", category: "Frontend", difficulty: "Beginner", description: "Description here" },
  // Add more...
]
```

## Deploying to GitHub Pages

1. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/devhub",
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install -D gh-pages
```

3. Deploy:
```bash
npm run deploy
```

Alternatively, use Vercel or Netlify:
- Connect your GitHub repository
- Vercel/Netlify will auto-detect Vite and deploy

## License

MIT