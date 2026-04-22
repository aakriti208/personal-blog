<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Divider from '$lib/components/Divider.svelte';
</script>

<svelte:head>
  <title>about — your name</title>
</svelte:head>

<Navbar />
<Divider />

<main class="page-content">
  <h1>about</h1>
  <Divider />

  <!-- tl;dr -->
  <section>
    <h2>tl;dr</h2>
    <ul>
      <li>software engineer based in [City, State]</li>
      <li>interested in distributed systems, ML, and developer tooling</li>
      <li>currently working on [what you're building]</li>
      <li>previously studied [degree] at [university]</li>
      <li>open to interesting conversations — reach out via <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a></li>
    </ul>
  </section>

  <hr class="section-divider" />

  <!-- Background -->
  <section>
    <h2>background</h2>
    <p>
      hi, i'm <strong>your name</strong>. i write software and occasionally words.
    </p>
    <p>
      i'm interested in distributed systems, programming languages, and the intersection
      of technology and society. i try to build things that are simple, correct, and fast —
      roughly in that order.
    </p>
    <p>
      currently working at <strong>company name</strong> on [whatever you're building].
      previously at <strong>previous company</strong> doing something interesting.
    </p>
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

  <!-- Education -->
  <section>
    <h2>education</h2>
    <p>
      <strong>B.S. in Computer Science</strong> — University Name, 20XX
    </p>
    <p>
      Relevant coursework: algorithms, operating systems, machine learning, databases,
      distributed systems.
    </p>
  </section>

  <hr class="section-divider" />

  <!-- Contact -->
  <section>
    <h2>contact</h2>
    <p>
      best way to reach me is <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>
      or <a href="mailto:you@example.com">email</a>.
      i'm generally responsive within a few days.
    </p>
  </section>
</main>

<style>
  .page-content {
    width: 100%;
    padding-top: 4px;
    max-width: 700px;
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
