<template>
  <div class="h-24 bg-white text-center text-black">
      <h1 class="text-black pt-2 pb-2">Made in Sunderland</h1>

      <div class="flex items-center justify-center space-x-3">
          <img :src=instgram class="object-contain h-8 inline-flex items-center space-x-2" >
          <img :src=twitter class="object-contain h-8 inline-flex items-center space-x-2" >
      </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
data: () => ({
    instgram: require('@/assets/instagram.svg'),
    twitter: require('@/assets/twitter.svg')
  })
};
</script>