<template>

<div class="container my-12 mx-auto px-4 md:px-12">
    <h1 class="font-bold text-6xl mt-6">Films</h1> 
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
        <div v-for="film in films" :key="film.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

<!-- https://flowbite.com/docs/components/card/ -->
            <!-- <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src=film.img alt="">
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
                        <button v-for="genre in film.genre" :key="genre" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-full">
                            {{genre}}
                        </button>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
            </a> -->

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img :src=film.img class="block w-full lg:max-h-48 md:max-h-48 max-h-52 object-cover" >
                </a>
                

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg font-bold">
                        <a class="no-underline hover:underline text-black" href="#">
                            {{film.name}}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm" v-if="film.rating">
                        <star-rating :rating="film.rating" :read-only="true" v-bind:star-size="20" :show-rating="false"></star-rating>
                        <!-- https://www.npmjs.com/package/vue-star-rating hange to star rating -->
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" :src="certificate">
                        <button v-for="genre in film.genre" :key="genre" class="m-2 px-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold rounded-full">
                            {{genre}}
                        </button>
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
import axios from 'axios'
import StarRating from 'vue-star-rating'
export default {
  name: "Cards",
  components: {
    StarRating
  },
  data: () => ({
    lighthouse: require('@/assets/lighthouse.jpg'),
    certificate: require('@/assets/certificates/15.png'),
    films: null,
  }),
  mounted () {
    axios
      .get('http://localhost:8080/MOCK_DATA.json')
      .then(response => (this.films = response.data))
      .catch((error) => {
          this.films = error.response
            throw error.response.data;
        });
  }
};
</script>
