<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import { posts, formatDate } from '$lib/data/posts.js';

  let sortKey = 'date';
  let sortDir = -1; // -1 = descending, 1 = ascending

  function sort(key) {
    if (sortKey === key) {
      sortDir = -sortDir;
    } else {
      sortKey = key;
      sortDir = key === 'date' ? -1 : 1;
    }
  }

  $: sorted = [...posts].sort((a, b) => {
    let av = a[sortKey];
    let bv = b[sortKey];
    if (sortKey === 'date') {
      av = new Date(av);
      bv = new Date(bv);
    }
    if (sortKey === 'title') {
      return sortDir * av.localeCompare(bv);
    }
    return sortDir * (av > bv ? 1 : av < bv ? -1 : 0);
  });

  function indicator(key) {
    if (sortKey !== key) return '';
    return sortDir === -1 ? ' ▼' : ' ▲';
  }
</script>

<svelte:head>
  <title>blog — your name</title>
</svelte:head>

<Navbar />
<Divider />

<main class="page-content">
  <h1>blog</h1>
  <Divider />

  <p class="note">
    writing on software, systems, and occasionally other things.
    also posted on <a href="https://substack.com" target="_blank" rel="noopener noreferrer">substack</a>.
  </p>

  <div class="blog-list">
    <!-- Header row -->
    <div class="blogline blogline-header">
      <button class="sort-button" on:click={() => sort('date')}>
        Date<span class="sort-indicator">{indicator('date')}</span>
      </button>
      <button class="sort-button" on:click={() => sort('readCount')}>
        Reads<span class="sort-indicator">{indicator('readCount')}</span>
      </button>
      <button class="sort-button" on:click={() => sort('title')}>
        Title<span class="sort-indicator">{indicator('title')}</span>
      </button>
    </div>

    <!-- Post rows -->
    {#each sorted as post}
      <div class="blogline">
        <span class="col-date">{formatDate(post.date)}</span>
        <span class="col-reads">{post.readCount}</span>
        <a href="/blog/{post.slug}" class="col-title">{post.title}</a>
      </div>
    {/each}
  </div>
</main>

<style>
  .page-content {
    width: 100%;
    padding-top: 4px;
  }

  .note {
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .blog-list {
    width: 100%;
  }

  .blogline {
    display: grid;
    grid-template-columns: 100px 75px auto;
    gap: 15px;
    align-items: start;
    padding-bottom: 10px;
  }

  .blogline-header {
    font-weight: 700;
    margin-bottom: 15px;
  }

  .sort-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    padding: 0;
    color: inherit;
    text-align: left;
    width: 100%;
    font-weight: 700;
  }

  .sort-button:hover {
    color: red;
  }

  .sort-indicator {
    font-size: 0.9em;
    margin-left: 0.5em;
  }

  .col-date {
    font-size: 14px;
    color: gray;
    white-space: nowrap;
  }

  .col-reads {
    font-size: 14px;
    color: gray;
  }

  .col-title {
    color: rgb(0, 0, 255);
    text-decoration: underline;
    font-size: 15px;
  }

  .col-title:hover {
    color: red;
  }

  .col-title:visited {
    color: purple;
  }
</style>
