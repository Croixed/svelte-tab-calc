<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  let numOne = 0;
  let numTwo = 0;

</script>

<div class="calc-container">
  <label for="num-one">Operand One: </label>
  <input type="number" name="num-one" id="num-one" bind:value={numOne}>

  <label for="num-two">Operand Two: </label>
  <input type="number" name="num-two" id="num-two" bind:value={numTwo}>

  <p>result = </p>
</div>

<style>
  .calc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 100%;
    flex-grow: 1;
    gap: 10px;

    padding-top: 24px;
  }

  label {
    font-size: 1.4em;
  }

  input {
    font-size: 1.4em;
  }

  p {
    font-size: 1.4em;
  }
</style>