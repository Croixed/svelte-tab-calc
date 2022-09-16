<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";
  import TypeButton from "./TypeButton.svelte"

  $: bodyTitle = $quoteStore[$activeStore - 1].title;
</script>

<div class="body-container">
  <h2>This is {bodyTitle}</h2>
  <p>{bodyTitle} says: Lorem ipsum dolor sit amet consectetur adiplit, sit laudantium? Beatae vel incidunt, quibus at.</p>
  <!-- I'll fix this later with a loop -->
  <TypeButton imageUrl={'/assets/unsplash-royalty-free-printer-1.jpg'} />
  <TypeButton imageUrl={'/assets/pixabay-royalty-free-printer-1.jpg'} />
  <TypeButton imageUrl={'/assets/pixabay-royalty-free-printer-2.jpg'} />
</div>

<style>
  p {
    font-size: 1.4em;
  }

  .body-container {
    background-color: rgba(var(--primary), 0.24);
    /* background-color: #02406d88; */
    box-shadow: #0005 0 5px 16px;

    max-width: 900px;
    margin: 24px;
    padding: 20px;
    border-radius: 12px;

    border-left: 12px solid rgb(var(--primary));

    flex-grow: 1;
    align-self: center;
  }
</style>