<template>
  <div class="landing h-24 min-h-screen">


    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 pl-10 pt-10">
        <h1 class="font-black text-6xl mt-6">Hey!</h1>
        <h3 class="font-black text-xl mt-6">Welcome to my site blahblahbl ahb la hblahb  lahblahbl ahblahblahblah  blahblahblah</h3>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ornare velit blandit, ullamcorper nunc quis, sagittis elit. Nulla nec velit libero. Proin accumsan eu dolor at ullamcorper. Morbi at urna iaculis, tempus arcu vel, pharetra eros. Donec tempor est a malesuada ultricies.</p>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ornare velit blandit, ullamcorper nunc quis, sagittis elit. Nulla nec velit libero. Proin accumsan eu dolor at ullamcorper. Morbi at urna iaculis, tempus arcu vel, pharetra eros. Donec tempor est a malesuada ultricies.</p>
      </div>
      <div class="col-span-1 pt-10">
        <img :src=lighthouse>
        <!-- <v-img :src="require('@/assets/desktop.svg')" aspect-ratio="2.75" ></v-img> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data: () => ({
    lighthouse: require('@/assets/lighthouse.jpg')
  })
};
</script>

<style>
.landing {
  color: white;
}


</style>