<script>
  import { quoteStore } from "../stores";
  import { currentIdStore } from "../stores";
  import { activeStore } from "../stores";
  import Tab from "./Tab.svelte";

  const handleNewTabClick = () => {
    quoteStore.update((current) => {
      return [...current, quoteFactory()]
    })
  }

  const quoteFactory = () => {
    const newQuote = {
      title: `tab ${$currentIdStore}`,
      id: $currentIdStore++,
    }
    return newQuote;
  }

  $: console.log('the active tab is: ' + $activeStore)

</script>

<nav>
  {#each $quoteStore as quote (quote.id)}
    <Tab {quote} />
  {/each}
  <button on:click={handleNewTabClick}>new tab</button>
</nav>


<style>
  nav {
    height: 50px;
    background-color: #02406d;

    display: flex;
    align-items: flex-end;
  }
</style>