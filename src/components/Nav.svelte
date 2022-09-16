<script>
  import { QuoteStore } from "../stores";
  import Tab from "./Tab.svelte";


</script>

<nav>
  {#each $QuoteStore as quote (quote.id)}
    <Tab item={quote} />
  {/each}
</nav>


<style>
  nav {
    height: 50px;
    background-color: #02406d;

    display: flex;
    align-items: flex-end;
  }
</style>