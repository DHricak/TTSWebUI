<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  let dispatch = createEventDispatcher();

  let voices = speechSynthesis.getVoices();

  import { clickOutside } from '@/scripts/outclick';
</script>

<div class="select card" use:clickOutside on:outclick={() => dispatch('close')}>
  {#each voices as voice}
    <button
      on:click={() => {
        dispatch('selected', {voice})
      }}
    >
      {voice.name}
    </button>
  {/each}
</div>

<style lang="scss">
  .select {
    z-index: 3;

    min-width: 10rem;
    min-height: 10rem;
    max-height: 90%;

    border-radius: 6px !important;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem;

    border-radius: 16px;
    border: 1px solid #d0d0d0;
    background: #e0e0e0;

    overflow: auto;
  }
</style>