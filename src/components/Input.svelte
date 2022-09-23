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
      <label for="dim-h">height (mm) </label>
      <input type="number" name="dim-h" id="dim-h">
    </div>
  
    <div class="dimension-inp">
      <label for="dim-w">width (mm) </label>
      <input type="number" name="dim-w" id="dim-w">
    </div>
  
    <div class="dimension-inp">
      <label for="dim-d">depth (mm) </label>
      <input type="number" name="dim-d" id="dim-d">
    </div>
  </div>



  <label for="req">requirements </label>
  <textarea name="req" id="req" cols="40" rows="6" placeholder="Does the print need to be strong?"></textarea>

  <label for="desc">description </label>
  <textarea name="desc" id="desc" cols="40" rows="6" placeholder="Tell us about the print"></textarea>
</div>

<style>
  input, 
  textarea {
    background-color: var(--my-gray);
    color: white;
    border-radius: 5px;
    border: hsl(285 40% 66%) 2px solid;
    resize: none;
  }

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
</style>