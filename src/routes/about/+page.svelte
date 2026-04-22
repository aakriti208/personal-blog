<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Divider from '$lib/components/Divider.svelte';
</script>

<svelte:head>
  <title>about — aakriti dhakal</title>
</svelte:head>

<Navbar />
<Divider />

<main class="page-content">
  <h1>about</h1>
  <Divider />

    <!-- hi! -->
    <section>
    <h2>hi.</h2>
    <p> Hey there. I’m Aakriti, a software and AI engineer currently working as a graduate researcher focused on building intelligent systems and practical AI applications. 
    <br>
    <br>
    My background spans software engineering, machine learning, AI engineering, and product design. I’ve always enjoyed writing, and this blog is a way for me to return to that habit. Here, I write about building with AI, software engineering, and the technical ideas I explore along the way.
    <br>
    <br>
    Outside of work, I spend time cooking, gardening, hiking, and lifting heavy in the gym.

    </p>
  </section>

  <hr class="section-divider" />

  <!-- tl;dr -->
  <section>
    <h2>tl;dr</h2>
    <ul>
      <li>Software engineer based in Austin, Texas</li>
      <li>Interested in Web Development, AI, and NLP</li>
      <li>Currently working on building scalable RAG pipelines</li>
      <li>Open to interesting conversations — reach out via <a href="https://www.linkedin.com/in/aakriti-dhakal/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
    </ul>
  </section>

  <hr class="section-divider" />

  <!-- Tools -->
  <section>
    <h2>tools i like to work with</h2>

    <div class="tools-section">
      <div class="tool-category">
        <strong>Languages</strong>
        <ul>
          <li>Python</li>
          <li>JavaScript / TypeScript</li>
          <li>Go</li>
          <li>SQL</li>
        </ul>
      </div>

      <div class="tool-category">
        <strong>ML / Data</strong>
        <ul>
          <li>PyTorch</li>
          <li>HuggingFace</li>
          <li>pandas / numpy</li>
          <li>scikit-learn</li>
        </ul>
      </div>

      <div class="tool-category">
        <strong>Dev / Ops</strong>
        <ul>
          <li>Docker</li>
          <li>AWS</li>
          <li>GitHub Actions</li>
          <li>Linux</li>
        </ul>
      </div>

      <div class="tool-category">
        <strong>Frontend</strong>
        <ul>
          <li>Svelte / SvelteKit</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  </section>

  <hr class="section-divider" />


  <!-- Contact -->
  <section>
    <h2>contact</h2>
    <p>
      Best way to reach me is <a href="https://www.linkedin.com/in/aakriti-dhakal/" target="_blank" rel="noopener noreferrer">linkedin</a>
      or <a href="mailto:aakritidh208@gmail.com">email</a>.
      I'm generally responsive within a day or two.
    </p>
  </section>
</main>

<style>
  .page-content {
    width: 100%;
    padding-top: 4px;
  }

  section {
    margin-bottom: 8px;
  }

  section h2 {
    margin-bottom: 14px;
  }

  section p {
    line-height: 1.7;
    margin-bottom: 10px;
  }

  section ul {
    padding-left: 20px;
    margin: 0 0 10px 0;
  }

  section ul li {
    line-height: 1.7;
    margin-bottom: 4px;
  }

  .section-divider {
    border: none;
    border-top: 1px solid gray;
    margin: 28px 0;
  }

  .tools-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .tool-category ul {
    margin-top: 4px;
  }
</style>
