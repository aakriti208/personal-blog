export const posts = [
  {
    slug: 'getting-started-with-sveltekit',
    title: 'Getting Started with SvelteKit',
    date: '2024-03-10',
    readCount: 284,
    content: `# Getting Started with SvelteKit

SvelteKit is a framework for building web apps with Svelte. It gives you file-based routing, server-side rendering, and a great developer experience right out of the box.

## Why SvelteKit?

Unlike React or Vue, Svelte compiles your components to vanilla JavaScript at build time — no virtual DOM overhead. SvelteKit layers routing and SSR on top of that.

## Installation

\`\`\`bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

## File-based Routing

Every file inside \`src/routes\` becomes a route. A \`+page.svelte\` file is the page component, \`+page.js\` is the loader, and \`+layout.svelte\` wraps child routes.

## What's Next

From here you can add adapters for deployment, configure SSR vs CSR per-page, and start building real features.
`
  },
  {
    slug: 'building-a-rag-chatbot',
    title: 'Building a RAG Chatbot for Your Personal Blog',
    date: '2024-04-01',
    readCount: 97,
    content: `# Building a RAG Chatbot

RAG stands for Retrieval-Augmented Generation. The idea: instead of asking an LLM to answer from memory, you feed it relevant context pulled from your own data.

## How It Works

1. You write a knowledge base — your work experience, projects, skills.
2. Each entry gets converted to a vector embedding.
3. When a user asks a question, you embed the question too.
4. You find the most similar entries using cosine similarity.
5. You inject those entries into the LLM prompt.
6. The LLM answers based on that context.

## The Stack

For a personal blog, you don't need a vector database. A JSON file of embeddings with in-memory search is fast enough for under a few hundred chunks.

- **Embeddings**: \`@xenova/transformers\` (runs locally in Node)
- **LLM**: Claude API (\`claude-haiku-4-5\`)
- **UI**: A simple Svelte chat widget

## Cost

Fractions of a cent per query. Claude Haiku is very cheap for short prompts.
`
  }
];

export function getPost(slug) {
  return posts.find(p => p.slug === slug) ?? null;
}

/** Parse 'YYYY-MM-DD' → 'MM/DD/YYYY' without timezone shift */
export function formatDate(str) {
  const [y, m, d] = str.split('-');
  return `${m}/${d}/${y}`;
}

/** Returns word count and reading time (200 wpm) */
export function readingStats(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return { words, minutes };
}
