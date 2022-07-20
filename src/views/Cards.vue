<template>

<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
        <div v-for="film in films" :key="film.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

<!-- https://www.youtube.com/watch?v=MBQ-Kxy0EIM -->
<!-- https://adnan-tech.com/chat_app_mevn/deploy-node-js-mongo-db-and-vue-js/ -->

<!-- https://www.youtube.com/watch?v=W-b9KGwVECs -->
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img :src=film.img class="block h-auto w-full" >
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg font-bold">
                        <a class="no-underline hover:underline text-black" href="#">
                            {{film.name}}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {{film.date}}
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                        <p class="ml-2 text-sm">
                            {{film.genre}}
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
            <!-- END Article -->

        </div>
        <!-- END Column -->

        <!-- https://codepen.io/codetimeio/pen/RYMEJe -->

    </div>
</div>



</template>

<script>
import filmsData from "../../src/data/MOCK_DATA.json"
export default {
  name: "Cards",
  data: () => ({
    lighthouse: require('@/assets/lighthouse.jpg'),
    films: filmsData,
  }),
};
</script>
