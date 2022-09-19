<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  // might not need these 2 lines
  $: activeIndex = $quoteStore.findIndex(quote => quote.id === $activeStore);

  const handleSummaryClick = () => {
    $activeStore = -1; // this probably isn't good
  }

</script>

<button on:click={handleSummaryClick}>
  Summary Total
</button>

<style>
  button {
    position: absolute;
    color: white;
    background-color: transparent;

    border: 3px solid white;
    border-radius: 8px;
    font-size: 1.4em;
    right: 20px;
    padding: 8px;
    z-index: 2;
    transition: background-color 0.5s, color 0.6s;
  }

  button:hover {
    background-color: white;
    color: rgb(var(--primary));
  }
</style>