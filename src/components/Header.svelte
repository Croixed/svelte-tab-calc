<script>
  import SummaryButton from "./SummaryButton.svelte";

</script>

<header>
  <SummaryButton />
  <img src="./assets/ACubedLogo.png" alt="A Cubed Design Logo">
  <h1>Tabbed Calc</h1>
  <div class="accent-block" aria-hidden="true"></div>
  <div class="accent-block-2" aria-hidden="true"></div>
</header>

<style>
  header {
    background-color: rgb(var(--primary)); 
    width: 100vw;

    display: flex;
    align-items: center;
    position: relative;

    overflow: hidden;
  }

  header {
    height: 96px;
  }

  img {
    height: 160%;
    padding: 0 10px;
  }

  .accent-block {
    position: absolute;
    height: 330%;
    width: 30%;
    background-color: hsl(285 100% 25%);
    right: -10px;

    transform: rotate(17deg);
  }

  .accent-block-2 {
    position: absolute;
    height: 250%;
    width: 15%;
    background-color: hsl(285 100% 20%);
    margin-left: auto;
    right: -10px;

    transform: rotate(17deg);
  }

</style>