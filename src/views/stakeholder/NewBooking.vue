<script setup>
import { ref } from 'vue';
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';


const steps = ref([
  { id: 'Step 1', name: 'General information', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'pas', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Shipping consignee/consignor', href: '#', status: 'upcoming' },
])
// function to change steps
function changeStep(step) {
  steps.value.forEach(s => {
    // Update the status of each step based on the clicked step
    if (s.id === step.id) {
      s.status = 'current';
    } else if (s.status === 'current') {
      s.status = 'complete';
    } else {
      s.status = 'upcoming';
    }
  });
  // Loop the steps so all steps before the clicked step are marked as complete and all steps after are marked as upcoming
   let foundCurrent = false;
   steps.value.forEach(s => {
     if (s.id === step.id) {
       foundCurrent = true;
     } else if (!foundCurrent) {
       s.status = 'complete';
     } else {
       s.status = 'upcoming';
     }
   });
}
</script>

<template>
    <StakeholderLayout>
        <div class="pb-5 sm:flex sm:items-center sm:justify-between">
            <h3 class="text-base font-semibold text-gray-900">Creating a shipment booking</h3>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">Share</button>
            <button type="button" class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
            </div>
        </div>
        <nav aria-label="Progress">
            <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
            <li v-for="step in steps" @click="changeStep(step)" :key="step.name" class="md:flex-1">
                <a v-if="step.status === 'complete'" :href="step.href" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0">
                <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">{{ step.id }}</span>
                <span class="text-sm font-medium text-gray-900">{{ step.name }}</span>
                </a>
                <a v-else-if="step.status === 'current'" :href="step.href" class="flex flex-col border-l-4 border-indigo-300 py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0" aria-current="step">
                <span class="text-sm font-medium text-indigo-400">{{ step.id }}</span>
                <span class="text-sm font-medium text-gray-900">{{ step.name }}</span>
                </a>
                <a v-else :href="step.href" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0">
                <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">{{ step.id }}</span>
                <span class="text-sm font-medium text-gray-900">{{ step.name }}</span>
                </a>
            </li>
            </ol>
        </nav>
    </StakeholderLayout>
</template>