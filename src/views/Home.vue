<template>
  <div class="home h-24 min-h-screen">
    <div class="grid grid-auto gap-4 md:grid-flow-col">
      <div class="col-span-1 p-10 ">
        <h1 class="font-black text-6xl mt-6">Hey!!</h1>
        <h3 class="font-black text-xl mt-6">Welcome to my site blahblahbl ahb la hblahb  lahblahbl ahblahblahblah  blahblahblah</h3>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ornare velit blandit, ullamcorper nunc quis, sagittis elit. Nulla nec velit libero. Proin accumsan eu dolor at ullamcorper. Morbi at urna iaculis, tempus arcu vel, pharetra eros. Donec tempor est a malesuada ultricies.</p>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ornare velit blandit, ullamcorper nunc quis, sagittis elit. Nulla nec velit libero. Proin accumsan eu dolor at ullamcorper. Morbi at urna iaculis, tempus arcu vel, pharetra eros. Donec tempor est a malesuada ultricies.</p>
      </div>
      <div class="col-span-1 pt-10 hidden md:block">
        <img :src=lighthouse>
      </div>
    </div>
  </div>
  <Cards/>
</template>

<script>
import Cards from '@/views/Cards.vue';
export default {
  name: "Home",
  data: () => ({
    lighthouse: require('@/assets/lighthouse.jpg')
  }),
  components: {
    Cards
}
};
</script>

<style>
.landing {
  color: black;
}


</style>