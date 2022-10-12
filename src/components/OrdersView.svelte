<script>
  import { Client, Databases, ID } from "appwrite";
  import { quoteStore } from "../stores";
  import { onMount } from "svelte";

  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("633dd7392c937232f639");

  const databases = new Databases(client);

  let orderIds = [];

  onMount(async () => {
    const response = await databases.listDocuments(
      "633f372e141ff8093ed6",
      "633f37367e3a34c6ff73"
    );
    // this is probably not good
    $quoteStore = response.documents;
    $quoteStore.forEach((quote) => {
      if (!orderIds.includes(quote.orderId)) {
        orderIds = [...orderIds, quote.orderId];
      }
    });
    console.log(orderIds);
  });

  // const listOrderIds = () => {
  //   const promise = databases.listDocuments("633f372e141ff8093ed6", "633f37367e3a34c6ff73");


  //   promise.then((response) => {
  //     console.log(response.documents, "list of docs");

  //     response.documents.forEach((doc) => {
  //       if (!orderIds.includes(doc.orderId)) {orderIds.push(doc.orderId)}
  //       console.log(orderIds, "orderIds");
  //     });

  //     // not sure which one is better for performance
  //     // response.documents.forEach((doc) => {
  //     //   orderIds.push(doc.orderId);
  //     //   orderIds = [...new Set(orderIds)];
  //     //   console.log(orderIds);
  //     // });

  //   }, (error) => {
  //     console.log(error);
  //   });
  // };


  const sliceOrderId = (orderId) => {
    return orderId.slice(-5).toUpperCase();
  };

</script>


<h2>this is OrdersView.svelte</h2>

<div class="orders-container">
  {#each orderIds as orderId}
  <div class="order">
    <p>Order {sliceOrderId(orderId)}</p>
    <p class="order-info">Contents: tabTitle1, tabTitle2, tabTitle3, </p>
    <p class="order-info">Number of models: ...</p>
    <p class="order-info">Total prints: ...</p>
    <p class="order-info">(date...)</p>
  </div>
  {/each}
</div>

<style>

  .orders-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .order {
    width: 50%;
    background-color: #333;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }

  .order-info {
    color: #bbb;
    text-align: left;
    padding: 2px;
  }
</style>