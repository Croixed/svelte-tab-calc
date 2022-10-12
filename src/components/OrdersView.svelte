<script>
  import { Client, Databases, ID } from "appwrite";
  import { quoteStore } from "../stores";

  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("633dd7392c937232f639");

  const databases = new Databases(client);

  $: orderIds = [];

  const listOrderIds = () => {
    const promise = databases.listDocuments("633f372e141ff8093ed6", "633f37367e3a34c6ff73");


    promise.then((response) => {
      console.log(response.documents, "list of docs");

      response.documents.forEach((doc) => {
        if (!orderIds.includes(doc.orderId)) {orderIds.push(doc.orderId)}
        console.log(orderIds, "orderIds");
      });

      // not sure which one is better for performance
      // response.documents.forEach((doc) => {
      //   orderIds.push(doc.orderId);
      //   orderIds = [...new Set(orderIds)];
      //   console.log(orderIds);
      // });

    }, (error) => {
      console.log(error);
    });
  };

</script>


<h2>this is OrdersView.svelte</h2>
<button on:click={listOrderIds}>list Order Ids</button>

{#each orderIds as orderId}
  <p>{orderId}</p>
{/each}