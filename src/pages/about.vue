<template>
  <section class="flex min-h-[95vh] bg-white dark:bg-menu-dark">
    <div class="py-8 lg:py-16 px-4 m-auto max-w-screen-md">
      <div
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-delay="400"
        data-aos-once="false"
      >
        <h3 class="mt-8 mb-4 text-6xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          My Story
        </h3>
        <div class="justify-center p-8 m-auto w-fit">
          <ol class="relative">
            <li class="mr-12 mb-24">
              <span
                class="flex absolute -left-6 justify-center items-center w-24 h-24 bg-custom-purple dark:bg-custom-green
            rounded-full ring-4 ring-white dark:ring-gray-900"
              >
                <img
                  class="mr-1 w-16 h-16 text-white"
                  src="/img/story.png"
                >
              </span>
              <h2 class="flex items-center pt-6 text-5xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white" />
            </li>
          </ol>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-delay="400"
      >
        <h3 class="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          The Beginning
        </h3>
        <p class="mb-16 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-lg">
          Sometime in 2015, I came into contact with the IT field through an idea for an app and the subsequent
          question of how to implement it. However, it quickly became clear that the project was impossible to
          implement due to the complexity of the idea. Nevertheless, interest was aroused and I began to read more
          and more about the subject. Just one year later, after more than 6 years as an employee at Sparkasse Passau,
          it was time for a career change.
        </p>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-delay="500"
      >
        <h3 class="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          The Struggle
        </h3>
        <p class="mb-16 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-lg">
          The initial situation was not easy. Of course, the income from the previous job was lost. A huge step
          backwards from a financial point of view. The loss of quality of life due to not owning a car was
          omnipresent. In addition, I lived in a cramped space in a student room. Due to my school career, I lacked
          some previous knowledge in mathematics, which most of my fellow students brought with them. These topics had
          to be learned independently. The coronavirus epidemic hasn't made the situation any easier either.
        </p>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-delay="500"
        data-aos-offset="30"
      >
        <h3 class="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          The Vision
        </h3>
        <p class="mb-16 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-lg">
          The vision is clear: enjoy life, improve every day, be satisfied with what you have, and appreciate others.
          After all the time of theoretical learning, I now want to put my skills to the test in practice.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'About',
};
</script>
