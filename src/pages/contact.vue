<template>
  <section class="flex min-h-[95vh] bg-white dark:bg-menu-dark">
    <div class="py-8 lg:py-16 px-4 m-auto w-[100vw] max-w-[700px]">
      <h2 class="mb-10 text-5xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a question? Want to know more about me or my work? Need additional information? Let me know. Feel free to
        reach out to me!
      </p>
      <div
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-delay="500"
        class="m-auto mt-12 w-fit md:mt-20"
      >
        <ol class="relative">
          <li class="mb-10 ml-20">
            <span
              class="flex absolute -left-2 justify-center items-center w-12 h-12 bg-custom-purple dark:bg-custom-green
            rounded-full ring-4 ring-white dark:ring-gray-900"
            >
              <img
                class="mr-1 w-8 h-8 text-white"
                src="/img/email.png"
              >
            </span>
            <h3 class="flex items-center pt-2 text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl">
              martinjloos@mail.de
            </h3>
          </li>
          <li class="mb-10 ml-20">
            <span
              class="flex absolute -left-2 justify-center items-center w-12 h-12 bg-custom-purple dark:bg-custom-green
            rounded-full ring-4 ring-white dark:ring-gray-900"
            >
              <img
                class="w-8 h-8 text-white"
                src="/img/phone.png"
              >
            </span>
            <h3 class="flex items-center pt-2 text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl">
              +49 176 72847157
            </h3>
          </li>
          <li class="mb-10 ml-20">
            <span
              class="flex absolute -left-2 justify-center items-center w-12 h-12 bg-custom-purple dark:bg-custom-green
            rounded-full ring-4 ring-white dark:ring-gray-900"
            >
              <img
                class="w-8 h-6 text-white"
                src="/img/discord.png"
              >
            </span>
            <h3 class="flex items-center pt-2 text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl">
              MartinJL#9627
            </h3>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
