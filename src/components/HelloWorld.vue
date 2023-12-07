<script setup>
  import { defineProps, ref } from 'vue';
  import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();
  const auth = getAuth();

  const props = defineProps({ msg: String });
  const user = ref('');
  const isSigneIn = ref(false);

  const handleSignInGoogle = () => {
    signInWithPopup(auth, providerGoogle)
    .then((result) => {
      isSigneIn.value = !isSigneIn.value;
      user.value = result.user.displayName;
      console.log(result.user.displayName);
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // const user = result.user;
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleSignInGitHub = () => {
    signInWithPopup(auth, providerGitHub)
  .then((result) => {
      isSigneIn.value = !isSigneIn.value;
      user.value = result.user.email;
      console.log(result.user.email);
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    //const user = result.user;
  }).catch((error) => {
    console.log(error);
  });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      isSigneIn.value = false;
      user.value = '';
    }).catch((error) => {
      console.log(error);
    });
  };
</script>
<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <h2 v-if="user">{{ `Активный пользователь: ${user}` }}</h2>
    <br>
    <div id="logout" v-if="isSigneIn">
      <button @click="handleSignOut">Выход</button>
    </div>
    <br>
    <div id="GoogleSignIn" v-if="!isSigneIn">
      <h3> Вход через Гугл</h3>
      <button @click="handleSignInGoogle">Вход</button>
    </div>
     <br>
    <div id="GitHubSignIn" v-if="!isSigneIn">
      <h3> Вход через Гит Хаб</h3>
      <button @click="handleSignInGitHub">Вход</button>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
