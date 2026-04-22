<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Divider from '$lib/components/Divider.svelte';
</script>

<svelte:head>
  <title>work — your name</title>
</svelte:head>

<Navbar />
<Divider />

<main class="page-content">
  <h1>work</h1>
  <Divider />

  <!-- Table of contents -->
  <div class="toc-box">
    <strong>contents</strong>
    <ul class="toc-list">
      <li><a href="#software-engineering">software engineering</a></li>
      <li><a href="#academic">academic</a></li>
      <li><a href="#outreach">outreach</a></li>
    </ul>
  </div>

  <!-- Software Engineering -->
  <section id="software-engineering">
    <h2>software engineering</h2>

    <div class="project">
      <h3>Project Title One</h3>
      <p class="project-desc">
        Description of what this project does, the problem it solves, and your role in it.
        Include technologies used and impact where possible.
      </p>
      <p class="project-link"><a href="https://github.com" target="_blank" rel="noopener noreferrer">→ GitHub</a></p>
    </div>

    <div class="project">
      <h3>Project Title Two</h3>
      <p class="project-desc">
        Another project description. What did you build, what tech stack did you use,
        what was the outcome?
      </p>
      <p class="project-link"><a href="https://github.com" target="_blank" rel="noopener noreferrer">→ Repository</a></p>
    </div>
  </section>

  <hr class="section-divider" />

  <!-- Academic -->
  <section id="academic">
    <h2>academic</h2>

    <div class="project">
      <h3>Academic Project One</h3>
      <p class="project-desc">
        Course project or research work. Describe the problem statement, methodology,
        and what you learned or produced.
      </p>
      <p class="project-link"><a href="https://github.com" target="_blank" rel="noopener noreferrer">→ PDF</a></p>
    </div>

    <div class="project">
      <h3>Academic Project Two</h3>
      <p class="project-desc">
        Another academic project. Mention the course, collaborators if any,
        and the tools or languages used.
      </p>
      <p class="project-link"><a href="https://github.com" target="_blank" rel="noopener noreferrer">→ Repository</a></p>
    </div>
  </section>

  <hr class="section-divider" />

  <!-- Outreach -->
  <section id="outreach">
    <h2>outreach</h2>

    <div class="project">
      <h3>Talk / Workshop / Writing</h3>
      <p class="project-desc">
        A talk you gave, a workshop you ran, or a piece of writing you contributed
        to a broader community audience.
      </p>
      <p class="project-link"><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">→ YouTube</a></p>
    </div>
  </section>
</main>

<style>
  .page-content {
    width: 100%;
    padding-top: 4px;
    max-width: 700px;
  }

  .toc-box {
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .toc-list {
    margin: 6px 0 0 0;
    padding-left: 20px;
  }

  .toc-list li {
    margin-bottom: 4px;
  }

  section {
    margin-bottom: 10px;
  }

  section h2 {
    margin-bottom: 20px;
  }

  .project {
    margin-left: 16px;
    margin-bottom: 24px;
  }

  .project h3 {
    margin-bottom: 6px;
  }

  .project-desc {
    margin-bottom: 6px;
    line-height: 1.6;
    font-size: 15px;
  }

  .project-link {
    font-size: 14px;
    margin-bottom: 0;
  }

  .section-divider {
    border: none;
    border-top: 1px solid gray;
    margin: 28px 0;
  }
</style>
