<script>
  export let quote;
  import { activeStore } from "../stores";

  // const setActive = (quoteId) => {
    // find element in array with matching store
    // then set its active prop to true - this needs to trigger a rerender
  //   console.log(quoteId)
  // }

  const handleTabClick = () => $activeStore = quote.id;
</script>

<button on:click={handleTabClick} class:active={$activeStore === quote.id}>
  {quote.title}
</button>

<style>
  button {
    background-color: #555;
    height: 80%;
    font-size: 1.1em;
    border: none;
    margin: 0 5px;
    padding: 12px;
    border-radius: 12px 12px 0 0;
  }

  .active{
    background-color: #037ce7;
  } 
    
</style>