<script>
  import { quoteStore } from "../stores";

  let total = $quoteStore.reduce((acc, quote) => {
    return acc + quote.numOne + quote.numTwo;
  }, 0);

</script>


<div class="summary">
  <table>
  {#each $quoteStore as quote}
    {#if quote.type}
    <!-- I'm not sure if a table is the best idea here-->
      <tr>
        <td>{quote.title}</td>
        <td>{quote.numOne}</td>
        <td>{quote.numTwo}</td>
      </tr>
    {/if}
    {/each}
  </table>
  <p class="total">Total: {total}</p>
  <button>Submit</button>
</div>

<style>
  .summary {
    width: 400px;
    padding: 12px;
    background-color: rgb(var(--primary));
    margin: 0 auto;
    font-size: 1.4em;
    
    border-radius: 12px;
    
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .total {
    font-size: 1.4em;
    font-weight: bold;
    margin-top: auto;
  }

  button {
    width: 200px;
    margin-top: 12px;
    padding: 8px;
    border-radius: 8px;
    border: 0px;
    background-color: rgb(64, 103, 175);
    color: white;
    font-size: 1.4em;
    transition: background-color 0.5s, color 0.6s;
  }

  button:hover {
    background-color: white;
    color: cornflowerblue;
  }

  table {
    border-collapse: collapse;
  }

  td {
    padding: 3px 10px;
  }

  td:first-child {
    background-color: #065f46;
    min-width: 90px;
  }

  tr {
    background-color: #059669;
  }

  tr:nth-child(odd) {
    background-color: #064e3b;
    color: white;
  }
</style>