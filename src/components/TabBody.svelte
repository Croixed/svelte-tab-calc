<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";
  import Calc from "./Calc.svelte";
  import SelectType from "./SelectType.svelte";
  import Summary from "./Summary.svelte";

  $: activeQuote = $quoteStore.find(quote => quote.id === $activeStore);
  // $: bodyTitle = activeQuote.title;
  $: bodyTitle = $activeStore != -1 ? activeQuote.title : "Summary";

  const handleDelete = () => {
    $quoteStore = $quoteStore.filter((quote) => quote.id !== $activeStore);
    activeStore.set($quoteStore[0].id);
  }
</script>

<!-- this is a bit messy, I can probably abstract/clean it up -->
<div class="body-container">
  {#if $activeStore === -1}
    <Summary />
  {:else}
    <h2>This is {bodyTitle}</h2>
    <p>{bodyTitle} says: Lorem ipsum dolor</p>
    <button id="delete" on:click={handleDelete}>delete</button>
    {#if !activeQuote.type}
      <SelectType />
    {:else}
      <p>the type is { activeQuote.type }</p>
      <Calc />
    {/if}
  {/if}
</div>

<style>
  p {
    font-size: 1.4em;
  }

  .body-container {
    position: relative;
    background-color: rgba(var(--primary), 0.24);
    /* background-color: #02406d88; */
    box-shadow: #0005 0 5px 16px;

    width: 900px;
    margin: 24px;
    padding: 20px;
    border-radius: 12px;

    border-left: 12px solid rgb(var(--primary));

    flex-grow: 1;
    align-self: center;

    display: flex;
    flex-direction: column;
  }

  #delete {
    position: absolute;
    right: 20px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 1.2em;
  }
</style>