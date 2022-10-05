<script>
  import { Account, Client, ID } from "appwrite";
  import { createEventDispatcher } from "svelte";
  import { loggedInStore } from "../stores.js";
  let newUser = false;

  let newUsername = '';
  let newPassword = '';

  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("633dd7392c937232f639");
  const account = new Account(client);

  const createNewUser = () => {
    const promise = account.create(ID.unique(), newUsername, newPassword);

    promise.then((response) => {
      console.log(response, "user created");
      alert(`User ${newUsername} created!`);
      newUsername = '';
      newPassword = '';
    }, (error) => {
      console.log(error);
    });
  }

  let username;
  let password;

  const login = () => {
    const promise = account.createEmailSession(username, password);

    promise.then((response) => {
      console.log(response, "logged in");
      $loggedInStore = true;
      username = '';
      password = '';
    }, (error) => {
      console.log(error);
    });
  }


  const checkIfauthenticated = () => {
    const promise = account.get();

    promise.then((response) => {
      console.log(response, "logged in");
      $loggedInStore = true;
    }, (error) => {
      console.log(error);
    });

  }

  // there has to be a simpler way to do this
  // const dispatch = createEventDispatcher();
  // const dispatchLogin = () => {
  //   dispatch('message', 'login msg custom');
  // }

  checkIfauthenticated();
</script>


<div class="login-container">
  {#if !newUser}

    <h1>Sign in</h1>
    <input type="email" id="username" name="username" placeholder="email" bind:value={username}/>
    <input type="password" id="password" name="password" placeholder="Password" bind:value={password} />

    <div class="misc-controls">
      <input type="checkbox" id="remember" name="remember" />
      <label for="remember">Remember me</label>
      <a href="#">Forgot password?</a>
    </div>

    <button type="submit" on:click={login}>Log in</button>

    <div class="auth-container">
      <button>Continue with Google</button>
      <button>Continue with Facebook</button>
      <button>Continue with GitHub</button>
    </div>

    <div class="signup">
      <p>Don't have an account?</p>
      <button on:click={() => newUser = true}>Sign up</button>
    </div>

  {:else}

    <div class="new-user-container">
      <h1>Sign up</h1>
      <input type="text" id="username" name="username" placeholder="Username" bind:value={newUsername} />
      <input type="password" id="password" name="password" placeholder="Password" bind:value={newPassword}/>
      <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" />
      <button type="submit" on:click={createNewUser}>Sign up</button>
      <p>Already have an account?</p>
      <button on:click={() => newUser = false}>Log in</button>
    </div>

  {/if}
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: green;

    min-height: 70vh;

    width: 370px;
    margin: 34px;
    padding: 20px;
    border-radius: 12px;

    flex-grow: 1;
    align-self: center;

    background: linear-gradient(108deg, hsla(282 98% 29% / 1) 45%, hsla(280 94% 30% / 0.1) 45%);
    box-shadow: #0005 0 5px 16px;
  }

  h1 {
    margin: 24px;
  }


  input {
    display: block;
    
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    width: 280px;
  }

  input[type="checkbox"] {
    padding: 0;
    margin: 0 6px;

    width: 1.1em;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  } 

  .misc-controls {
    width: 100%;
    display: flex;
    
  }

  a {
    margin-left: auto;
  }

  .auth-container {
    margin: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .auth-container button {
    width: 220px;
  }



  .new-user-container {
    border: 3px solid white;
    border-radius: 12px;
    padding: 20px;
  }
</style>