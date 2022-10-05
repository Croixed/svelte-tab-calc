<script>
  import { Account, Client } from "appwrite";
  import { loggedInStore } from "../stores.js";

  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("633dd7392c937232f639");
  const account = new Account(client);

  const logOutHandler = () => {
    const promise = account.deleteSession('current');

    promise.then((response) => {
      console.log(response, "logged out");
      $loggedInStore = false;
    }, (error) => {
      console.log(error);
    });
  }
</script>

{#if $loggedInStore}
  <button on:click={logOutHandler}>Log Out</button>
{/if}