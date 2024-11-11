<script setup>
import { SignedIn, SignedOut, SignInButton, UserButton, SignUp } from 'vue-clerk'
</script>

<template>
  <div>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn appearance="colorPrimary">
      <UserButton />
    </SignedIn>
  </div>
</template>