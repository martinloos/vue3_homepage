<template>
  <div class="bg-white dark:bg-custom-black">
    <div class="flex py-8 w-[100%] min-h-[95vh]">
      <div class="grid grid-cols-1 m-auto md:grid-cols-2 md:gap-12">
        <div class="grid">
          <div
            id="project1"
            class="justify-self-center p-4 my-auto w-[100%] max-w-[700px] md:justify-self-end not-visible"
          >
            <a
              href="https://github.com/martinloos/ml_repository_reproducibility_analysis_tool"
              class="flex flex-col items-center bg-white dark:bg-menu-dark dark:hover:bg-menu-dark rounded-lg border border-gray-200 hover:border-custom-purple dark:border-white dark:hover:border-custom-green shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover w-full p-4 h-96 rounded-t-lg md:w-48 md:h-auto md:rounded-none md:rounded-l-lg"
                src="/img/bathesis.png"
                alt=""
              >
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Classification of Machine Learning Reproducibility Factors</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This tool helps authors and developers of
                  machine learning experiments as well as reviewers of third-party work. The aim is to increase the
                  probability of reproducibility of machine learning experiments. As a result, high quality with
                  regard to reproducibility can be ensured during development or before publication without great
                  additional effort.</p>
              </div>
            </a>
          </div>
        </div>
        <div class="grid">
          <div
            id="project2"
            class="justify-self-center p-4 my-auto w-[100%] max-w-[700px] md:justify-self-start not-visible"
          >
            <a
              href="https://github.com/martinloos/libmicrovmi-paper"
              class="flex flex-col items-center min-h-[350px] bg-white dark:bg-menu-dark dark:hover:bg-menu-dark rounded-lg border border-gray-200 hover:border-custom-purple dark:border-white dark:hover:border-custom-green shadow-md md:flex-row md:max-w-xl"
            >
              <img
                class="object-cover p-4 w-full h-96 rounded-t-lg md:w-48 md:h-auto md:rounded-none md:rounded-l-lg"
                src="/img/libmicrovmi.png"
                alt=""
              >
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">libmicrovmi - The approach to unite the VMI ecosystems</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In this paper, we present the core
                  functionality of libmicrovmi. In addition, we also draw a comparison with the de facto standard VMI
                  library libVMI. Finally, we also analyze the performance of these two libraries in comparison for 3
                  different use cases (memory dump, register dump, CR3 event).
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  beforeRouteLeave() {
    const project1 = document.getElementById('project1');
    project1.classList.remove('cst-ease-in');
    project1.classList.add('not-visible');
    const project2 = document.getElementById('project2');
    project2.classList.remove('cst-ease-in');
    project2.classList.add('not-visible');
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        const mPage = document.getElementById('project1');
        mPage.classList.add('cst-ease-in');
      }, 300);
      setTimeout(() => {
        const mPage = document.getElementById('project2');
        mPage.classList.add('cst-ease-in');
      }, 1000);
    },
  },
};
</script>

<style scoped>
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
