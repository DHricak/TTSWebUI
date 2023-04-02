<script lang="ts">
  import Card from "@comp/Card.svelte"

  let support = false;
  if ('speechSynthesis' in window && speechSynthesis.getVoices().length > 0) {
    support = true;
  }
  console.log(speechSynthesis.getVoices())
</script>

<main>
  {#if support}
    <Card/>
  {:else}
    <div class="card">
      Sorry, your browser does not support Voice Synthesis.
    </div>
  {/if}
  <iframe src="/TTSWebUI/dist/ghbtn.html" frameborder="0" width="220" height="40" id="gh"></iframe>
</main>

<style>
  main {
    position: relative;
    height: 100%;
  }

  .card {
    min-width: 8rem;
    min-height: 2rem;

    display: flex;
    align-items: center;

    font-size: 1.2rem;
  }

  #gh {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>