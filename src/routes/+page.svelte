<script>
  import Divider from '$lib/components/Divider.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
  <title>your name</title>
</svelte:head>

<main class="homepage">
  <h1>your name</h1>
  <h3>your tagline goes here</h3>

  <Divider />

  <div class="image-links-container">
    <img
      src="/profile.svg"
      alt="Profile photo"
      class="profile-photo"
      width="200"
      height="200"
    />

    <nav class="nav-links-container">
      <span class="button-container">[<a href="/" class="button">home</a>]</span>
      <span class="button-container">[<a href="/blog" class="button">blog</a>]</span>
      <span class="button-container">[<a href="/work" class="button">work</a>]</span>
      <span class="button-container">[<a href="/about" class="button">about</a>]</span>
    </nav>
  </div>

  <Divider />

  <SocialLinks />
</main>

<style>
  .homepage {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
  }

  .image-links-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-flow: row wrap;
    gap: 10px;
  }

  .profile-photo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 0;
    display: block;
  }

  .nav-links-container {
    width: auto;
    display: flex;
    flex-flow: column wrap;
    text-align: right;
    align-items: flex-end;
    justify-content: space-between;
  }

  .button-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 16px;
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
    .image-links-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .nav-links-container {
      align-items: center;
      text-align: center;
    }
  }
</style>
