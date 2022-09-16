<script>
  export let imageUrl;
  console.log(imageUrl);
</script>

<button style="background-image: url({imageUrl})">
  type button
</button>

<style>
  button {
    /* background: url({imageUrl}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-color: rgba(0, 0, 0, 0.38);
    background-blend-mode: darken;

    width: 50%;
    height: 110px;
    
    border: none;
    border-radius: 8px;

    color: white;
    font-size: 32px;

    border: 5px solid #059669;

    margin: 8px 0;
  }
</style>