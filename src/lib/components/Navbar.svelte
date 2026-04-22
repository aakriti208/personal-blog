<script>
  import SocialLinks from './SocialLinks.svelte';
</script>

<nav class="navbar">
  <div class="nav-links-container">
    <span class="button-container">[<a href="/" class="button">home</a>]</span>
    <span class="button-container">[<a href="/blog" class="button">blog</a>]</span>
    <span class="button-container">[<a href="/work" class="button">work</a>]</span>
    <span class="button-container">[<a href="/about" class="button">about</a>]</span>
  </div>
  <div class="social-wrapper">
    <SocialLinks />
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    padding-top: 2px;
    padding-bottom: 4px;
  }

  .nav-links-container {
    display: flex;
    gap: 15px;
  }

  .button-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: rgb(0, 0, 0);
  }

  .button {
    color: rgb(0, 0, 255);
    text-decoration: underline;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
  }

  .button:hover {
    color: red;
  }

  .button:visited {
    color: purple;
  }

  @media (max-width: 768px) {
    .social-wrapper {
      display: none;
    }
  }
</style>
