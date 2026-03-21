<template>

<div class="min-h-full theme-bg">
  <nav class="theme-nav">
    <div class="mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="shrink-0 text-white font-bold text-lg">
            Bookings 4 Shippings
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                :class="navLinkClass(item.to)"
                :aria-current="isActiveRoute(item.to) ? 'page' : undefined"
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center gap-x-4 ">
            <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold theme-text shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Create Booking</button>

            <button @click="openNotification = !openNotification" type="button" class="relative rounded-full p-1 text-white/80 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-white">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <el-dropdown class="relative ">
              <button class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span class="absolute -inset-1.5"></span>
                <span class="inline-block size-8 overflow-hidden rounded-full bg-white outline -outline-offset-1 outline-white/20">
                  <svg class="size-full theme-soft-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              </button>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>

  </nav>

  <main>
    <div class="mx-auto max-w-375 px-4 py-6 sm:px-6 lg:px-8">
      <div class="theme-surface rounded-xl p-4 sm:p-6">
        <slot />
      </div>
    </div>
  </main>

  <div>
    <TransitionRoot as="template" :show="openNotification">
      <Dialog class="relative z-10" @close="openNotification = false">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="" leave="ease-in-out duration-500" leave-from="" leave-to="opacity-0">
          <div class="fixed inset-0 bg-[#001B66]/40 transition-opacity"></div>
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                  <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="" leave="ease-in-out duration-500" leave-from="" leave-to="opacity-0">
                    <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button type="button" class="relative rounded-md text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" @click="openNotification = false">
                        <span class="absolute -inset-2.5"></span>
                        <span class="sr-only">Close panel</span>
                        <XMarkIcon class="size-6" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div class="theme-overlay relative flex h-full flex-col overflow-y-auto py-6 shadow-xl">
                    <div class="px-4 sm:px-6">
                      <DialogTitle class="theme-text text-base font-semibold">Panel title</DialogTitle>
                    </div>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <!-- Your content -->
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>

</div>

</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const openNotification = ref(false)
const route = useRoute()

const navItems = [
  {
    label: 'Dashboard',
    to: '/shipping/dashboard'
  },
  {
    label: 'Bookings',
    to: '/shipping/bookings'
  }
]

const isActiveRoute = (targetPath) => route.path === targetPath

const navLinkClass = (targetPath) => {
  if (isActiveRoute(targetPath)) {
    return 'rounded-md bg-white/20 px-3 py-2 text-sm font-medium text-white'
  }

  return 'rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white'
}


</script>