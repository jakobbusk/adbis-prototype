<script setup>
import { computed, ref } from 'vue';
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';


const steps = ref([
  { id: 'Step 1', name: 'General information', status: 'current' },
  { id: 'Step 2', name: 'Cargo Details', status: 'upcoming' },
  { id: 'Step 3', name: 'Shipping consignee/consignor',  status: 'upcoming' },
  { id: 'Step 4', name: 'Review and Confirm',  status: 'upcoming' },
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


// Logic for forward/backward buttons
function nextStep() {
    const currentIndex = steps.value.findIndex(s => s.status === 'current');
    if (currentIndex < steps.value.length - 1) {
    changeStep(steps.value[currentIndex + 1]);
    }
}
function previousStep() {
  const currentIndex = steps.value.findIndex(s => s.status === 'current');
  if (currentIndex > 0) {
    changeStep(steps.value[currentIndex - 1]);
  }
}

const currentStepIndex = computed(() => {
  const index = steps.value.findIndex(s => s.status === 'current')
  return index === -1 ? 0 : index
})

const firstStep = computed(() => currentStepIndex.value === 0)
const lastStep = computed(() => currentStepIndex.value === steps.value.length - 1)

</script>

<template>
    <StakeholderLayout>
        <div class="pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 class="theme-text text-base font-semibold">Creating a shipment booking</h3>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">

            <button type="button" class="theme-nav ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001B66]">Create</button>
            </div>
        </div>
        <nav aria-label="Progress">
            <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
            <li v-for="step in steps" @click="changeStep(step)" :key="step.name" class="md:flex-1">
          <a v-if="step.status === 'complete'" class="group flex flex-col border-l-4 theme-border py-2 pl-4 hover:opacity-85 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0">
          <span class="text-gray-500 text-sm font-medium">{{ step.id }}</span>
          <span class="text-gray-500 text-sm font-medium">{{ step.name }}</span>
                </a>
          <a v-else-if="step.status === 'current'" class="flex flex-col border-l-4 theme-border py-2 pl-4 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0" aria-current="step">
          <span class="theme-text text-sm font-medium">{{ step.id }}</span>
          <span class="theme-text text-sm font-medium">{{ step.name }}</span>
                </a>
                <a v-else class="group flex flex-col border-l-4 theme-soft-border py-2 pl-4 hover:opacity-85 md:border-t-4 md:border-l-0 md:pt-4 md:pb-0 md:pl-0">
                <span class="theme-text text-sm font-medium">{{ step.id }}</span>
          <span class="theme-soft-text text-sm font-medium">{{ step.name }}</span>
                </a>
            </li>
            </ol>
        </nav>

        <!-- Content for each step would go here -->
         <div class="mt-5">
            <div v-if="steps[0].status === 'current'">

            </div>
            <div v-else-if="steps[1].status === 'current'">

            </div>
            <div v-else-if="steps[2].status === 'current'">

            </div>
        </div>

        <!-- Backward/Forward button  -->
        <div class="mt-5 flex justify-between">
          <button type="button" @click="previousStep" :disabled="firstStep" :class="firstStep ? 'opacity-50 cursor-not-allowed hover:opacity-50' : 'hover:opacity-90'" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold theme-text shadow-xs inset-ring theme-soft-border">
                Previous
            </button>
          <button type="button" @click="nextStep" :disabled="lastStep" :class="lastStep ? 'opacity-50 cursor-not-allowed hover:opacity-50' : 'hover:opacity-90'" class="theme-nav inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001B66]">
                Next
            </button>
        </div>
    </StakeholderLayout>
</template>