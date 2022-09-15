<template>
  <div
    id="main-page"
    class="dark:bg-custom-black"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:ml-6">
      <div
        id="top-grid1"
        class="grid md:h-[95vh] not-visible"
      >
        <div class="justify-self-center p-4 my-auto mt-6 w-[100%] max-w-[550px] md:justify-self-end md:my-auto md:-mr-0">
          <div class="m-auto max-w-[350px]">
            <img
              class="max-h-[100%]"
              src="/img/martinloos.png"
              alt="profile picture"
            >
          </div>
          <div />
          <figure class="mx-auto mt-8 max-w-screen-md text-center">
            <blockquote>
              <p class="text-xl italic font-medium text-gray-900 dark:text-gray-400">
                "A website can be like an attic
                that never fills up. Space is not the problem. Attention is."
              </p>
            </blockquote>
            <figcaption class="flex justify-center items-center mt-4 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite class="pr-3 text-sm font-light text-menu-dark dark:text-gray-400">Gerry McGovern</cite>
                <cite class="pl-3 text-sm font-light text-menu-dark dark:text-gray-400">Designer</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div
        id="top-grid2"
        class="grid md:h-[95vh] not-visible"
      >
        <div class="justify-self-center p-4 my-auto mt-6 w-[100%] max-w-[550px] md:justify-self-start md:my-auto md:-mr-0">
          <h1
            class="mx-auto mt-0 text-[1.7rem] font-bold text-center text-menu-dark dark:text-gray-100 vs:text-4xl sm:text-5xl
          md:my-6"
          >
            Websites promote you 24/7.
          </h1>
          <p class="my-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base md:mt-12">
            A website is of great importance for every business. Many customers, especially those of the younger
            generation, prefer to look online than to phone or stop by in person to get basic information. Not having
            a website would mean missing out on all those potential customers. With a high-quality website, you can
            build and gain trust in your company. <br> <br>
            Every company has its own culture, philosophy and identity. Therefore, a tailor-made, target
            group-oriented website is essential. Serious but modern websites with an individual design are my priority.
          </p>
          <span><router-link
            to="/contact"
            class="text-lg text-blue-700"
          >Get in touch ></router-link></span>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="2000ms"
      data-aos-duration="1000ms"
      class="flex justify-center bg-gray-50 dark:bg-menu-dark"
    >
      <div class="p-6 max-w-[800px]">
        <h1
          class="mx-auto mt-10 mb-14 text-[1.7rem] font-bold text-center text-menu-dark dark:text-gray-100 vs:text-3xl
          sm:text-4xl"
        >
          Resume
        </h1>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/computer_science.svg"
              >
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Internet Computing @ University of Passau
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10/2017 - 09/2022</time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Average grade 2.2. The hardest but also the most rewarding time of my life. Persistence pays off. In
              case you're not familiar with the Internet Computing degree, it's basically computer science but with a
              little less math and more electives.
            </p>
            <Button @click="changeUniPDFState">
              <a>Diploma</a>
            </Button>
            <div
              v-if="openUniCert"
              class="py-6 max-w-[100%]"
            >
              <vue-pdf-embed
                class="max-w-[100%]"
                source="/img/bascdiploma.pdf"
              />
            </div>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/australia.svg"
              >
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Work and Travel Experience in Australia
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12/2016 - 08/2017</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Cheers mate! Other cultures and impressions help with personality development. Besides, it's important
              to enjoy life, isn't it?
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/bank_advisor.svg"
              >
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Bank Advisor @ Sparkasse Passau
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">03/2013 - 12/2016</time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Advisor for all financial questions. In addition to great memories with colleagues and customers, some
              of whom I am still in contact with today, I take one thing with me from this time into my future life:
              Money does not buy happiness.
            </p>
            <Button @click="changeTestimonialState">
              <a>Testimonial</a>
            </Button>
            <div
              v-if="openTestimonial"
              class="py-6 max-w-[100%]"
            >
              <vue-pdf-embed
                class="max-w-[100%]"
                source="/img/spkzeugnis.pdf"
              />
            </div>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/bachelor_professional.svg"
              >
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Bachelor Professional of Banking @ IHK & FSFM
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">04/2014 - 05/2016</time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Part-time studies at the Frankfurt School of Finance & Management. Tuesday evenings and Saturday all day.
              2 years long. Drive 130 kilometers to Regensburg, study, and back again. Will and pride can carry a long
              way. The focus of the degree is corporate customer consulting.
            </p>
            <Button @click="changeBankPDFState">
              <a>IHK & FSFM Certificate</a>
            </Button>
            <div
              v-if="openBankCert"
              class="py-6 max-w-[100%]"
            >
              <vue-pdf-embed
                class="mb-6 max-w-[100%]"
                source="/img/bankfachwirt.pdf"
                :page="1"
              />
              <vue-pdf-embed
                class="max-w-[100%]"
                source="/img/bankfachwirt.pdf"
                :page="2"
              />
            </div>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/apprenticeship.svg"
              >
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Apprenticeship as a Bank Clerk @ Sparkasse Passau
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">08/2010 - 02/2013</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Culture shock. At the age of 16, from a casual-looking schoolboy to a businessman in a suit. The
              learning curve was high, and the working environment was unfamiliar, but it was fun every day. I am
              grateful that my parents encouraged me to apply to the Sparkasse.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-custom-purple dark:bg-custom-green
            rounded-full ring-8 ring-white dark:ring-gray-900"
            >
              <img
                class="w-5 h-5 text-white"
                src="/img/school.svg"
              >
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Secondary School Certificate @ Staatliche Realschule Tittling
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">09/2004 - 06/2010</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              The easiest time of my life. Get up, school, play football or games, and sleep. Who doesn't miss it?
            </p>
          </li>
        </ol>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="1000ms"
      data-aos-duration="1000ms"
      class="pb-8 bg-white dark:bg-custom-black"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:ml-6">
        <div class="grid">
          <div class="justify-self-center p-4 mt-8 mb-auto w-[100%] max-w-[500px] md:justify-self-end">
            <h1
              class="my-6 mx-auto text-[1.7rem] font-bold text-center text-menu-dark dark:text-gray-100 vs:text-3xl
              sm:text-4xl"
            >
              Skills
            </h1>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Ambition & Patience</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 100%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              High goals and I am willing to work hard to achieve them. I like to learn new things.
            </p>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Java</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 50%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              Various software projects as part of my bachelor's degree. Especially familiar with spring boot.
              Dependency management, modularity, encapsulation, and REST aren't foreign words.
            </p>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Vue3</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 60%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              Well, this page was made with Vue3. I enjoy creating websites. I've already done a few small projects.
              My main finding so far is that prototyping is important to avoid having to do hundreds of re-iterations.
            </p>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Git</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 80%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              Version control systems are not only important but necessary. I'm fairly familiar with using Git.
            </p>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Docker & Kubernetes</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 50%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              I have already used these technologies in several projects. Hence, I know how helpful and powerful they
              are, but also how high the configuration effort can be.
            </p>
            <div class="flex justify-between">
              <span class="mb-1 text-base font-medium text-custom-purple dark:text-custom-green">Critical thinking & academic approach</span>
            </div>
            <div class="mb-2 w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                class="h-2.5 bg-custom-purple dark:bg-custom-green rounded-full"
                style="width: 90%"
              />
            </div>
            <p class="mb-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base">
              The simplest solution can be the best. In most cases, however, different approaches have to be weighed
              against each other. I know how to judge algorithms in terms of their efficiency. Although I haven't
              done that in a while.
            </p>
            <div class="flex justify-center mt-12">
              <router-link
                to="/projects"
                class="text-lg text-blue-700"
              >
                Projects >
              </router-link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1000ms"
          data-aos-duration="1000ms"
          class="justify-self-center p-4 mt-8 mb-auto w-[100%] max-w-[500px] md:justify-self-start"
        >
          <h1
            class="my-6 mx-auto text-[1.7rem] font-bold text-center text-menu-dark dark:text-gray-100 vs:text-3xl
            sm:text-4xl"
          >
            Motivation
          </h1>
          <p class="my-6 text-sm text-menu-dark dark:text-gray-400 vs:text-base md:mt-12">
            In this section, I would like to briefly explain which factors helped me to successfully face the challenge
            of studying IT despite all the hurdles. <br><br><br>
            I was particularly motivated by the successes within my circle of friends. Everyone continues their
            education, learns new things, and tries to be successful in their own way. This positive environment
            helped me to keep my focus. <br><br><br>
            I also have a strong inner drive. I don't care about being better than others. Work on yourself a little
            every day. That´s my creed. In addition, my grandmother showed me that working a lot can also be healthy.
            Who rests rusts. This isn't just a saying. <br><br><br>
            Furthermore, I was able to absorb many positive values through my hobby, football. Cohesion, willingness
            to compromise, and team spirit. These are some of the virtues that have become important to me over the
            years. One quote from former FC Barcelona captain Carles Puyol accompanies me in particular:
            “When I went to the trial to play for FC Barcelona, my father told me:
            ’If you come back and they haven’t selected you because they had 20 better players than you, no problem.
            If they don’t select you because they had 20 guys more determined than you, don’t come home’.”<br><br><br>
            But why am I so excited about web development in particular? Creativity, solving complex problems, and a
            varied job. This is the perfect mix for me. I hope my passion reaches you through this website.
          </p>
          <div class="flex justify-center pt-2 mt-12">
            <router-link
              to="/about"
              class="w-fit text-lg text-blue-700"
            >
              About Me >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed';
import Button from '@/components/Button.vue';

export default {
  name: 'Index',
  components: {
    VuePdfEmbed, Button,
  },
  beforeRouteLeave() {
    const grid1 = document.getElementById('top-grid1');
    grid1.classList.remove('cst-ease-in');
    grid1.classList.add('not-visible');
    const grid2 = document.getElementById('top-grid2');
    grid2.classList.remove('cst-ease-in');
    grid2.classList.add('not-visible');
  },
  data() {
    return {
      openUniCert: false,
      openTestimonial: false,
      openBankCert: false,
    };
  },
  computed: {
    theme() {
      return this.getStoredTheme();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        const mPage = document.getElementById('top-grid1');
        mPage.classList.add('cst-ease-in');
      }, 300);
      setTimeout(() => {
        const mPage = document.getElementById('top-grid2');
        mPage.classList.add('cst-ease-in');
      }, 1000);
    },
    changeUniPDFState() {
      this.openUniCert = !this.openUniCert;
    },
    changeTestimonialState() {
      this.openTestimonial = !this.openTestimonial;
    },
    changeBankPDFState() {
      this.openBankCert = !this.openBankCert;
    },
    getStoredTheme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>

<style scoped>
body {
  @apply dark:bg-custom-black dark:text-white;
}

.not-visible {
  visibility: hidden;
  opacity: 0;
}

.cst-ease-in {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s ease-in;
}

</style>
