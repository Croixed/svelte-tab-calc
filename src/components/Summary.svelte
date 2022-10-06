<script>
  import { Client, Databases, ID } from "appwrite";
  import { quoteStore } from "../stores";

  let total = $quoteStore.reduce((acc, quote) => acc + quote.quantity, 0);

  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("633dd7392c937232f639");

  const databases = new Databases(client);

  const submitHandler = (event) => {

    $quoteStore.forEach((quote) => {
      console.log(quote.title, quote.type);
      const promise = databases.createDocument(
        "633f372e141ff8093ed6",
        "633f37367e3a34c6ff73",
        ID.unique(),
        {
          title: quote.title,
          type: quote.type,
          material: quote.material,
          quantity: quote.quantity,
          height: quote.height,
          width: quote.width,
          depth: quote.depth,
          description: quote.description,
          requirements: quote.requirements,
          url: quote.url,
        }
      );

      promise.then((response) => {
        console.log(response, "uploaded one item");
      }, (error) => {
        console.log(error);
      });
    });
  };

  const listDocs = () => {
    const promise = databases.listDocuments("633f372e141ff8093ed6", "633f37367e3a34c6ff73");

    promise.then((response) => {
      console.log(response.documents, "list of docs");
      $quoteStore = response.documents;
    }, (error) => {
      console.log(error);
    });
  };

  // listDocs();

</script>


<div class="summary">
  <button class="reset-docs" on:click={listDocs}>query DB for data reset</button>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th >Type</th>
        <th>Material</th>
        <th>Quant.</th>
      </tr>
    </thead>
  {#each $quoteStore as quote}
    {#if quote.type}
    <!-- I'm not sure if a table is the best idea here-->
      <tr>
        <td>{quote.title}</td>
        <td>{quote.type}</td>
        <td>{quote.material}</td>
        <td>{quote.quantity}</td>
      </tr>
    {/if}
    {/each}
  </table>
  <p class="total">Total: {Math.round(total * 100) / 100} models</p>
  <label for="email">Enter email to submit: </label>
  <input type="email" name="email" id="email">
  <button on:click={submitHandler}>Submit</button>
</div>

<style>
  .summary {
    width: 440px;
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
    background-color: rgb(46, 170, 93);
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

  th {
    min-width: 96px;
  }

  td:first-child {
    background-color: hsl(285 20% 50%);
    /* min-width: 90px; */
  }

  tr {
    background-color: hsl(285 30% 40%);
  }

  tr:nth-child(odd) {
    background-color: hsl(285 30% 50%);
    color: white;
  }

  input {
    color: white;
    background-color: var(--my-gray);
    border: none;
    font-size: 20px;
    border-radius: 8px;
  }
</style>