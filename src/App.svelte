<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import TabBody from "./components/TabBody.svelte";
  import Footer from "./components/Footer.svelte";

</script>

<main>
  <Header/>
  <Nav/>
  <TabBody/>
  <Footer/>
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
  }
</style>