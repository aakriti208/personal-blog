<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — your name</title>
</svelte:head>

<div class="error-container">
  <p class="error-msg">whoopsie, you should not have ended up here.</p>

  <div class="navlink-container">
    <span class="button-container">[<a href="/" class="button">home</a>]</span>
    <span class="button-container">[<a href="/blog" class="button">blog</a>]</span>
    <span class="button-container">[<a href="/work" class="button">work</a>]</span>
    <span class="button-container">[<a href="/about" class="button">about</a>]</span>
  </div>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .error-msg {
    font-family: "Roboto Mono", monospace;
    font-size: 18px;
    margin-bottom: 0;
  }

  .navlink-container {
    width: auto;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: row;
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
</style>
