<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  $: bodyTitle = $quoteStore[$activeStore - 1].title;
</script>

<h2>This is {bodyTitle}</h2>
<p>{bodyTitle} says: Lorem ipsum dolor sit amet consectetur adiplit, sit laudantium? Beatae vel incidunt, quibus at.</p>

<style>
  h2 {
    padding: 14px;
  }

  p {
    font-size: 1.5em;
  }
</style>