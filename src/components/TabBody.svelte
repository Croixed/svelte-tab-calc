<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";
  import Calc from "./Calc.svelte";
  import SelectType from "./SelectType.svelte";


  $: bodyTitle = $quoteStore[$activeStore - 1].title;
</script>

<div class="body-container">
  <h2>This is {bodyTitle}</h2>
  <p>{bodyTitle} says: Lorem ipsum dolor</p>
  {#if $quoteStore[$activeStore - 1].type === null}
    <SelectType />
  {:else}
    <p>the type is { $quoteStore[$activeStore - 1].type }</p>
    <Calc />
  {/if}
</div>

<style>
  p {
    font-size: 1.4em;
  }

  .body-container {
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
</style>