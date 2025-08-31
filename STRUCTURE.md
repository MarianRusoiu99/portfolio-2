# Portfolio Project Structure

This document outlines the organized structure of the portfolio project after refactoring.

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/           # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts        # Barrel exports
│   ├── BlobCursor.tsx      # Existing components
│   ├── ImageSpawner.tsx
│   ├── InteractiveText.tsx
│   ├── Layout.tsx
│   ├── Preloader.tsx
│   ├── ProjectPage.tsx
│   ├── ScrollToTop.tsx
│   ├── StickyResetButton.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── portfolioData.ts    # All static data (skills, projects, etc.)
│   └── index.ts            # Barrel exports
├── hooks/
│   ├── useImageSpawner.ts  # Image spawning logic
│   ├── useParallaxAnimations.ts # Parallax animation logic
│   └── index.ts            # Barrel exports
├── pages/
│   └── HomePage.tsx        # Clean, organized main page
└── context/
    └── ThemeContext.tsx    # Theme management
```

## 🧩 Component Organization

### Section Components (`/components/sections/`)
Each major section of the homepage has been extracted into its own component:

- **HeroSection**: Main banner with animated text and scroll indicator
- **AboutSection**: Personal introduction and contact CTA
- **SkillsSection**: Technical skills and experience
- **ProjectsSection**: Featured projects with links
- **ContactSection**: Contact form and call-to-action
- **Footer**: Copyright and site information

### Custom Hooks (`/hooks/`)
Business logic extracted into reusable hooks:

- **useImageSpawner**: Handles image spawning on click interactions
- **useParallaxAnimations**: Manages GSAP parallax scroll animations

### Data Layer (`/data/`)
All static content centralized:

- **portfolioData.ts**: Skills, projects, personal traits, and image arrays

## 🚀 Benefits of This Structure

### 1. **Modularity**
- Each section is self-contained and reusable
- Easy to modify individual sections without affecting others
- Components can be easily tested in isolation

### 2. **Maintainability**
- Clear separation of concerns
- Logic separated from presentation
- Data centralized and easy to update

### 3. **Scalability**
- Easy to add new sections
- Simple to extend functionality
- Barrel exports for clean imports

### 4. **Developer Experience**
- Clean imports using index files
- TypeScript support throughout
- Consistent patterns and conventions

## 📝 Usage Examples

### Adding a New Section
```tsx
// 1. Create component in /components/sections/
export const NewSection: React.FC = () => {
  return <section>...</section>;
};

// 2. Add to sections/index.ts
export { default as NewSection } from './NewSection';

// 3. Import and use in HomePage
import { NewSection } from '../components/sections';
```

### Updating Data
```tsx
// All project, skill, and content updates go in /data/portfolioData.ts
export const projects = [
  // Add new project here
];
```

### Adding Custom Logic
```tsx
// Create new hook in /hooks/
export const useNewFeature = () => {
  // Custom logic here
  return { ... };
};

// Export from /hooks/index.ts
export { useNewFeature } from './useNewFeature';
```

## 🔧 Key Features Maintained

- ✅ Image spawning on click
- ✅ Interactive text animations
- ✅ Parallax scrolling effects
- ✅ Theme switching
- ✅ Responsive design
- ✅ Scroll-to-top navigation
- ✅ All existing animations and interactions

## 🎯 Next Steps

This structure makes it easy to:
- Add new portfolio projects
- Create additional page sections
- Implement new interactive features
- Maintain and update content
- Scale the application further

The refactored code maintains all existing functionality while providing a much cleaner, more maintainable architecture.
