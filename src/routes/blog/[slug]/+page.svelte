<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import { formatDate, readingStats } from '$lib/data/posts.js';
  import { marked } from 'marked';

  export let data;

  $: post = data.post;
  $: html = marked.parse(post.content);
  $: stats = readingStats(post.content);
  $: dateStr = formatDate(post.date);
</script>

<svelte:head>
  <title>{post.title} — aakriti</title>
</svelte:head>

<Navbar />
<Divider />

<main class="page-content">
  <span class="button-container">[<a href="/blog" class="back-link">back</a>]</span>

  <div class="metadata">
    <p>aakriti, {dateStr}</p>
    <p>·</p>
    <p>{stats.words} Words, {stats.minutes} Minutes</p>
  </div>

  <h1>{post.title}</h1>
  <Divider />

  <div class="blog-content-container">
    {@html html}
  </div>
</main>

<style>
  .page-content {
    width: 100%;
    padding-top: 4px;
    max-width: 700px;
  }

  .button-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: rgb(0, 0, 0);
    margin-bottom: 16px;
  }

  .back-link {
    color: rgb(0, 0, 255);
    text-decoration: underline;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
  }

  .back-link:hover {
    color: red;
  }

  .back-link:visited {
    color: purple;
  }

  .metadata {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 12px;
  }

  .metadata p {
    margin-bottom: 0;
    font-size: 14px;
    color: gray;
  }

  .blog-content-container :global(h1),
  .blog-content-container :global(h2) {
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    margin: 24px 0 8px 0;
  }

  .blog-content-container :global(h1) {
    font-size: 28px;
  }

  .blog-content-container :global(h2) {
    font-size: 22px;
  }

  .blog-content-container :global(p) {
    margin-bottom: 14px;
    line-height: 1.7;
  }

  .blog-content-container :global(a) {
    color: rgb(0, 0, 255);
    text-decoration: underline;
  }

  .blog-content-container :global(a:hover) {
    color: red;
  }

  .blog-content-container :global(a:visited) {
    color: purple;
  }

  .blog-content-container :global(img) {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .blog-content-container :global(blockquote) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .blog-content-container :global(pre) {
    background: #f0f0f0;
    padding: 12px;
    overflow-x: auto;
    font-size: 14px;
    margin-bottom: 14px;
  }

  .blog-content-container :global(code) {
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
  }

  .blog-content-container :global(ul),
  .blog-content-container :global(ol) {
    padding-left: 24px;
    margin-bottom: 14px;
  }

  .blog-content-container :global(li) {
    line-height: 1.7;
    margin-bottom: 4px;
  }
</style>
