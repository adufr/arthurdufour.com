<template>
  <div>
    <!------------------------------------>
    <!-- 1: HERO ------------------------->
    <!------------------------------------>
    <div class="min-h-screen h-full flex flex-col justify-center bg-white dark:bg-nord-night-1">
      <div class="mx-auto px-5 lg:px-20 2xl:px-72 py-20">
        <div class="flex flex-col lg:flex-row space-x-5">
          <!-- left column -->
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <div class="mb-8">
              <h1 class="text-3xl sm:text-5xl leading-snug font-extrabold text-nord-night-4 dark:text-nord-snow-3">
                Hello,<br>
                I'm Arthur Dufour!
              </h1>
            </div>

            <div class="mb-8">
              <p class="text-lg sm:text-xl px-0 sm:px-20 lg:px-0 text-nord-night-4 dark:text-nord-snow-3">
                I'm a fullstack developer based in France. I design and code web applications as a job and a hobby, and I love what I do.
              </p>
            </div>

            <nuxt-link to="/">
              <button class="bg-nord-frost-3 text-nord-night-0 p-2 mr-4 rounded hover:bg-nord-frost-2 focus:outline-none transition duration-300">
                Portfolio
              </button>
            </nuxt-link>

            <nuxt-link to="/">
              <button class="border-2 border-nord-night-3 hover:border-nord-frost-3 text-nord-night-0 dark:text-nord-snow-3 hover:text-nord-frost-3 dark:hover:text-nord-frost-3 p-2 rounded focus:outline-none transition duration-300">
                My Blog
              </button>
            </nuxt-link>
          </div>

          <!-- right column -->
          <div class="flex-1 order-1 mb-12 lg:order-2 lg:mb-0">
            <img class="h-40 sm:h-64 w-full" src="~/assets/images/svg/mountains.svg" alt="Mountains">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
