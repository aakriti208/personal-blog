<script>
  import '../app.css';
</script>

<div class="root-container">
  <div class="content-container">
    <slot />
  </div>
</div>

<style>
  :global(.root-container) {
    font-family: "Roboto Mono", monospace;
    height: 100vh;
    width: 100%;
    max-width: 1400px;
    justify-content: center;
    margin: auto;
    display: contents;
  }

  :global(.content-container) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 1400px;
    margin: auto;
  }
</style>
