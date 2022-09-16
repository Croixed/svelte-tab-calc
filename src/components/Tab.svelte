<script>
  export let item;
  // item is a generic name, I might want to use quote instead?

  const setActive = (itemId) => {
    // find element in array with matching store
    // then set its active prop to true - this needs to trigger a rerender
    console.log(itemId)
  }
</script>


<button on:click={() => setActive(item.id)}>
  {item.title}
</button>

<style>
  button {
    height: 80%;
    font-size: 1.1em;
    border: none;
    margin: 0 5px;
    padding: 12px;
    border-radius: 12px 12px 0 0;
  }
</style>