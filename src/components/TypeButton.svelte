<script>
  export let imageUrl;
</script>

<button style="background-image: url({imageUrl})">
  type button
</button>

<style>
  button {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-color: rgba(0, 0, 0, 0.38);
    background-blend-mode: darken;

    width: 55%;
    height: 17vh;
    
    border: none;
    border-radius: 8px;

    color: white;
    font-size: 32px;

    border: 5px solid #059669;

    
  }
</style>