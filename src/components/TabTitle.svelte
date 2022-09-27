<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  $: activeIndex = $quoteStore.findIndex(quote => quote.id === $activeStore);
  $: bodyTitle = $activeStore != -1 ? $quoteStore[activeIndex].title : "Summary";
  // "summary" never displays because I'm not using it in the markup when the summary comp loads
  let editing = false;

  
  // I doubt this is the best way to set edit to false on tab change
  $: if (activeIndex != -1) editing = false;


  const handleEdit = () => {
    editing = !editing;
    // document.querySelector("input").focus();
  };
</script>

<h2>
  {#if !editing}
    {bodyTitle}
  {:else}
    <input type="text" bind:value={$quoteStore[activeIndex].title}>
  {/if}
  <button class="edit-button" on:click={handleEdit}>edit</button>
  <!-- <label for="title" class="edit-button" on:click={handleEdit}>edit</label> -->
</h2>

<style>
  h2 {
    position: relative;
    margin: 0 auto;
    
  }

  .edit-button {
    position: absolute;
    right: -32px;
  }
</style>