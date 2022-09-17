<script>
  import { quoteStore } from "../stores";
  import { activeStore } from "../stores";

  $: activeIndex = $quoteStore.findIndex(quote => quote.id === $activeStore);
  $: type = $quoteStore[activeIndex].type;

  const calcResult = (numOne, numTwo, type) => {
    if (type === "Addition") {
      return `${numOne} + ${numTwo} = ${numOne + numTwo}`;
    }  else if (type === "Multiplication") {
      return `${numOne} x ${numTwo} = ${numOne * numTwo}`;
    } else if (type === "Division") {
      return `${numOne} / ${numTwo} = ${numOne / numTwo}`;
    }
  };

  $: result = calcResult(
    $quoteStore[activeIndex].numOne,
    $quoteStore[activeIndex].numTwo,
    type
  );

</script>

<div class="calc-container">
  <label for="num-one">Operand One: </label>
  <input type="number" name="num-one" id="num-one" bind:value={$quoteStore[activeIndex].numOne}>

  <label for="num-two">Operand Two: </label>
  <input type="number" name="num-two" id="num-two" bind:value={$quoteStore[activeIndex].numTwo}>

  <p>result: {result}</p>
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