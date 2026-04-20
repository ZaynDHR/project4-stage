# DevHub - Student Development Resource Library

## 1. Project Overview

**Project Name:** DevHub  
**Type:** Single Page Web Application  
**Core Functionality:** An online resource library that helps future development students discover learning materials, tutorials, tools, and guides organized by topic.  
**Target Users:** Computer science students, self-taught developers, bootcamp students

---

## 2. UI/UX Specification

### Layout Structure

**Header (64px height)**
- Logo on left: "DevHub" with terminal icon
- Navigation: Home, Categories, Bookmarks, About
- Search bar (expandable on mobile)

**Hero Section (400px height)**
- Large heading: "Your Gateway to Development Knowledge"
- Subheading explaining the platform
- Quick category buttons
- Animated code snippet background effect

**Main Content Area**
- Category filter tabs (horizontal scrollable on mobile)
- Resource grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card shows: title, category tag, difficulty badge, description preview

**Footer (200px)**
- Quick links
- Contributing guidelines
- GitHub link

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**
- Background: #0a0a0f (deep dark)
- Surface: #12121a (card background)
- Surface Hover: #1a1a24
- Primary: #00d9ff (cyan accent)
- Secondary: #7c3aed (purple)
- Success: #10b981 (green)
- Warning: #f59e0b (amber)
- Text Primary: #f8fafc
- Text Secondary: #94a3b8
- Border: #2e2e3a

**Typography**
- Headings: "JetBrains Mono", monospace
- Body: "Source Sans 3", sans-serif
- Code: "Fira Code", monospace
- H1: 48px, H2: 32px, H3: 24px, Body: 16px

**Spacing System**
- Base unit: 8px
- Section padding: 64px vertical
- Card padding: 24px
- Gap between cards: 24px

**Visual Effects**
- Cards: subtle glow on hover (box-shadow with primary color)
- Buttons: scale(1.02) on hover
- Page load: staggered fade-in animation
- Category tabs: underline slide animation

### Components

**ResourceCard**
- Title (truncate at 2 lines)
- Category tag (colored pill)
- Difficulty badge (Beginner/Intermediate/Advanced)
- Description (3 lines max)
- Bookmark icon (toggleable)
- "View Resource" button
- Hover: lift effect + glow

**CategoryTab**
- Icon + label
- Active state: primary color underline
- Hover: background highlight

**SearchBar**
- Icon on left
- Placeholder: "Search resources..."
- Clear button on input

**DifficultyBadge**
- Beginner: green
- Intermediate: amber
- Advanced: purple

---

## 3. Functionality Specification

### Core Features

1. **Browse Resources**
   - Display 20+ pre-loaded development resources
   - Categories: Frontend, Backend, DevOps, Databases, Tools, Career
   - Each resource has: title, url, category, difficulty, description

2. **Filter by Category**
   - Click category tab to filter resources
   - "All" tab shows everything
   - Smooth transition when filtering

3. **Search**
   - Real-time search as user types
   - Searches title and description
   - Shows "No results" message when empty

4. **Bookmarks**
   - Click bookmark icon to save/unsave
   - Bookmarks persist in localStorage
   - View all bookmarks in Bookmarks page

5. **External Links**
   - Resources link to actual websites (MDN, freeCodeCamp, etc.)
   - Opens in new tab

### User Interactions
- Click category → filter resources
- Type in search → filter in real-time
- Click bookmark icon → toggle saved state
- Click resource card → open external link

### Data Handling
- Resources stored in local JSON array
- Bookmarks saved to localStorage
- No backend required

### Edge Cases
- Empty search results: show friendly message
- No bookmarks: show "No bookmarks yet" message
- Invalid URL: fallback to "#"

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme with cyan/purple accents loads correctly
- [ ] Hero section displays with animated background
- [ ] All 6 category tabs visible and clickable
- [ ] Resource cards display in grid layout
- [ ] Cards have hover glow effect
- [ ] Responsive: stacks to single column on mobile

### Functional Checkpoints
- [ ] Clicking category filters resources
- [ ] Search filters resources in real-time
- [ ] Bookmark icon toggles and persists on refresh
- [ ] Bookmarks page shows saved items
- [ ] External links open in new tab
- [ ] Page loads without console errors

### Content Requirements
- Minimum 20 development resources
- Cover all 6 categories
- Include beginner, intermediate, advanced levels
