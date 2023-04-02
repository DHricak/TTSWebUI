<script lang="ts">
  import Select from '@comp/VoiceSelect.svelte'

  const tts = window.speechSynthesis;

  let selecting = false;
  let text: string;
  let voice: SpeechSynthesisVoice = speechSynthesis.getVoices()[0];

  function speak() {
    let utter = new SpeechSynthesisUtterance(text);
    utter.voice = voice;
    tts.speak(utter);
  }
</script>

{#if selecting}
  <Select
    on:selected={({detail}) => {
      selecting = false;
      voice = detail.voice;
    }}
    on:close={() => selecting = false}
  />
{/if}

<div class="card">
  <h1>TTS</h1>
  <div class="c">
    <label>Input Text:</label>
    <textarea bind:value={text}></textarea>
    <label>Voice: {voice.name}</label>
    <div class="r">
      <button 
        class="hl"
        on:click={speak}
      >
        TTS Speak
      </button>
      <button
        on:click={() => selecting = !selecting}
      >
        Select voice
      </button>
    </div>
  </div>
</div>

<style lang=scss>
  h1 {
    margin: 0 0 1rem 0;
  }

  .card {
    min-width: 10rem;
    min-height: 3rem;
    
    h1 {
      text-align: center;
      width: 100%;
    }

    label {
      margin: 8px 0;
    }

    textarea {
      border-radius: 8px;
      border: 1px solid #d0d0d0;
      background: #e0e0e0;
      box-shadow: inset 5px 5px 7px #bebebe,
            inset -5px -5px 7px #ffffff;

      padding: 1rem;

      resize: none;

      min-width: 16rem;
      height: 8rem;
    }

    .c {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
      }

      button {
        width: fit-content;
      }
    }

    .r {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      margin: .4rem 0 0 0;
    }
  }
</style>