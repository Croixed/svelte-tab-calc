<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  $: activeIndex = $quoteStore.findIndex(quote => quote.id === $activeStore);
  $: type = $quoteStore[activeIndex].type;

</script>

<div class="inp-container">
  <!-- I can probably abstract this into a component and use it multiple times? -->
  <div class="inp">
    <label for="quantity">Quantity: </label>
    <input type="number" name="quantity" id="quantity" bind:value={$quoteStore[activeIndex].quantity} min="0" max="999" />
  </div>
  
  <div class="upload-container">
    <label for="stl" id="stl-label">upload STL</label>
    <input type="file" name="stl" id="stl">
  </div>
  <form class="material-container" action="">
    <label for="material">Material:</label>
    <div class="material">
      <input type="radio" name="material" id="PLA" value="PLA" bind:group={$quoteStore[activeIndex].material} />
      <label for="PLA">PLA</label>
    </div>
    <div class="material">
      <input type="radio" name="material" id="PETG" value="PETG" bind:group={$quoteStore[activeIndex].material} />
      <label for="PETG">PETG</label>
    </div>
    <div class="material">
      <input type="radio" name="material" id="ABS" value="ABS" bind:group={$quoteStore[activeIndex].material} />
      <label for="ABS">ABS</label>
    </div>
  </form>
  

  <div class="dimensions">
    <div class="dimension-inp">
      <!-- these could probably also be moved to a child component -->
      <label for="dim-h">height (mm) </label>
      <input type="number" name="dim-h" id="dim-h" bind:value={$quoteStore[activeIndex].height} min="0" max="999" />
    </div>
  
    <div class="dimension-inp">
      <label for="dim-w">width (mm) </label>
      <input type="number" name="dim-w" id="dim-w" bind:value={$quoteStore[activeIndex].width} min="0" max="999" />
    </div>
  
    <div class="dimension-inp">
      <label for="dim-d">depth (mm) </label>
      <input type="number" name="dim-d" id="dim-d" bind:value={$quoteStore[activeIndex].depth} min="0" max="999" />
    </div>
  </div>



  <label for="req">requirements </label>
  <textarea name="req" id="req" cols="40" rows="6" placeholder="Does the print need to be strong?" bind:value={$quoteStore[activeIndex].req}></textarea>

  <label for="desc">description </label>
  <textarea name="desc" id="desc" cols="40" rows="6" placeholder="Tell us about the print" bind:value={$quoteStore[activeIndex].desc}></textarea>
</div>

<style>
  input, 
  textarea {
    background-color: var(--my-gray);
    color: white;
    border-radius: 10px;
    /* border: hsl(285 50% 46%) 2px solid; */
    border: none;
    border: 4px solid hsl(282 98% 29%);;
    resize: none;
    padding: 0 4px;
  }

  /* input[type=file] {
    border: none;
  } */

  .inp-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 100%;
    flex-grow: 1;
    gap: 10px;

    padding-top: 24px;
  }

  .dimension-inp {
    width: 25%;
    display: inline-block;
    margin: 0 10px;
  }

  .dimension-inp>input {
    width: 100%;
  }

  label,
  input {
    font-size: 1.4em;
  }

  #quantity {
    width: 65px;
  }

  #stl {
    width: 400px;
  }

  .material {
    display: inline-block;
    padding: 0 12px;
  }

  textarea {
    padding: 4px;
  }
</style>