<template>
  <div class="p-4 bg-gray-50 dark:bg-menu-dark sm:p-6">
    <hr class="mb-6 lg:mb-8 border-gray-300 dark:border-white sm:mx-auto">
    <div class="flex justify-evenly">
      <div class="grid grid-cols-2 gap-12 md:gap-32 md:ml-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
            Experience
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <router-link
                to="/projects"
                class="hover:text-custom-purple dark:hover:text-custom-green hover:underline"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="hover:text-custom-purple dark:hover:text-custom-green hover:underline"
              >
                About Me
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">
            Follow me
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a
                href="https://github.com/martinloos"
                class="hover:text-custom-purple dark:hover:text-custom-green hover:underline"
              >Github</a>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-custom-purple dark:hover:text-custom-green hover:underline"
              >
                Discord
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <span class="text-sm text-center text-gray-500 dark:text-gray-400">© 2022 <a
        href="https://flowbite.com"
        class="hover:text-custom-purple dark:hover:text-custom-green hover:underline"
      >Martin Loos</a>. All Rights Reserved.
      </span>
    </div>
  </div>
</template>
