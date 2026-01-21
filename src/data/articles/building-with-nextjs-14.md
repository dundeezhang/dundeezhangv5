# Building with Next.js 14: Server Components and Beyond

November 8, 2025

![Next.js 14 Development](../../../public/images/articles/test3.webp)

Next.js 14 has revolutionized how we think about building React applications. With the introduction of Server Components, the framework has shifted from being just a React framework to a full-fledged application platform. In this article, I'll share my experience rebuilding my portfolio with Next.js 14 and the lessons I learned.

## Why Next.js 14?

When I decided to rebuild my portfolio (dundeezhangv5), I had several requirements:
- Fast initial page loads
- SEO optimization
- Modern developer experience
- Easy deployment

Next.js 14 checked all these boxes and more. The new App Router with Server Components was the main selling point.

## Understanding Server Components

Server Components are probably the biggest paradigm shift in React since Hooks. The idea is simple but powerful: components that run only on the server.

### Benefits I've Experienced

**1. Reduced JavaScript Bundle**

My previous portfolio (v4) had a bundle size of ~180KB. With Server Components, the new version is down to ~45KB for the initial load. That's a 75% reduction!

**2. Direct Database/API Access**

No more API routes for simple data fetching. Server Components can directly query databases or call APIs:

```jsx
// This runs on the server!
async function ProjectsList() {
  const projects = await db.projects.findMany();

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

**3. Better SEO**

Since components render on the server, the HTML is fully populated before reaching the browser. Search engines love this.

## The Mental Model Shift

The hardest part of adopting Server Components wasn't the code—it was the mental model. You have to think about:

- Which components need interactivity (use 'use client')
- Where to fetch data (as high up as possible in the tree)
- How to compose server and client components

### Server vs Client Components

Here's my decision framework:

**Use Server Components when:**
- No interactivity needed
- Fetching data
- Accessing backend resources
- SEO matters

**Use Client Components when:**
- Using useState, useEffect, or other hooks
- Handling browser events
- Using browser-only APIs
- Need interactivity

## Real Implementation: My Portfolio

Let me walk through how I structured dundeezhangv5.

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Server Component
│   ├── page.tsx            # Server Component
│   ├── about/
│   │   └── page.tsx        # Server Component
│   └── works/
│       └── page.tsx        # Client Component (needs filtering)
├── components/
│   ├── theme-toggle.tsx    # Client Component
│   ├── social-cons.tsx     # Server Component
│   └── webring.tsx         # Server Component
```

### Metadata API

One of my favorite features is the new Metadata API. Instead of manually managing meta tags, you export a metadata object:

```jsx
export const metadata = {
  title: 'Dundee Zhang - Software Engineer',
  description: 'CS student at UWaterloo...',
  openGraph: {
    title: 'Dundee Zhang',
    images: ['/preview.png'],
  },
};
```

This automatically generates all the necessary meta tags for SEO and social media sharing.

### Image Optimization

Next.js 14's Image component is fantastic. It automatically:
- Generates multiple sizes
- Serves WebP format
- Lazy loads images
- Prevents layout shift

```jsx
import Image from 'next/image';

<Image
  src="/project-thumbnail.png"
  alt="Project preview"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

## Performance Results

After deploying to Vercel, here are my Lighthouse scores:

- Performance: 98
- Accessibility: 100 (after the fixes we just did!)
- Best Practices: 100
- SEO: 100

This is a massive improvement from my previous version which scored in the 70-80 range.

## Challenges and Solutions

### Challenge 1: Client Component Composition

Initially, I wrapped my entire app in a client component for the theme provider. This negated many benefits of Server Components.

**Solution:** Move client components as far down the tree as possible. Use the children prop to allow Server Components to render inside Client Components.

```jsx
// ThemeProvider is a Client Component
'use client';

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children} {/* These can still be Server Components! */}
    </ThemeContext.Provider>
  );
}
```

### Challenge 2: Data Fetching Patterns

Coming from client-side fetching, Server Components felt strange at first.

**Solution:** Embrace the new patterns. Fetch data at the page level and pass it down as props. Use React Suspense for loading states.

### Challenge 3: Development Workflow

Hot Module Replacement (HMR) was slower with the new App Router initially.

**Solution:** This has improved significantly in recent versions. Also, using TypeScript helped catch errors before runtime.

## Deployment on Vercel

Vercel makes deploying Next.js 14 trivial:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy

Vercel automatically:
- Builds the application
- Optimizes assets
- Sets up CDN distribution
- Provides preview deployments for PRs

The DX (developer experience) is incredible.

## Things I Love

1. **File-based routing** - Intuitive and powerful
2. **Server Components** - Less JavaScript, better performance
3. **Built-in optimizations** - Images, fonts, scripts
4. **TypeScript support** - First-class citizen
5. **Developer experience** - Fast refresh, great error messages

## Things to Watch Out For

1. **Learning curve** - The new paradigms take time to internalize
2. **Bundle size can grow** - Be mindful of client components
3. **Caching complexity** - Understanding when things revalidate
4. **Third-party library compatibility** - Not all work with Server Components yet

## Conclusion

Rebuilding my portfolio with Next.js 14 was one of the best technical decisions I've made. The performance improvements are real, the developer experience is excellent, and I'm confident the site will be maintainable for years to come.

If you're on the fence about trying Next.js 14, I highly recommend it. The future of React development is here, and it's server-first.

Check out the source code for my portfolio on GitHub, and feel free to reach out if you have questions!

Happy building!
