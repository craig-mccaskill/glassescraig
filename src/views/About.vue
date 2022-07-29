<template>

<div class="container my-12 mx-auto px-4 md:px-12">
    <h1 class="font-bold text-6xl mt-6">Films</h1> 
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

      {{films}}

        <!-- Column -->
        <div v-for="film in films" :key="film.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img :src=film.backdrop_path class="block w-full lg:max-h-48 md:max-h-48 max-h-52 object-cover" >
                </a>
                

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg font-bold">
                        <a class="no-underline hover:underline text-black" href="#">
                            {{film.original_title}}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm" v-if="film.vote_average">
                        <star-rating :rating="film.vote_average" :read-only="true" v-bind:increment="0.5" v-bind:star-size="20" :show-rating="false"></star-rating>
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
    certificate: require('@/assets/certificates/15.png'),
    films: null,
  }),
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/popular/?api_key=2310830fe46455468675814101e30ec5&page=1')
      .then(response => {
        this.films = response.data.results;
        this.films.forEach(function (arrayItem) {
            var x = arrayItem.vote_average / 2;
            var y = 'https://image.tmdb.org/t/p/w500' + arrayItem.backdrop_path;
            arrayItem.vote_average = x;
            arrayItem.backdrop_path = y;
            // https://stackoverflow.com/questions/61034616/multiple-axios-requests-into-vue
            // Map genre to ids -> to display genre names
        });
      })
      .catch((error) => {
          this.films = error.response
            throw error.response.data;
        });
  }
};
</script>