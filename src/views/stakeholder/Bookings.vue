<template>
  <StakeholderLayout>
      <div>
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a v-for="tab in tabs" @click="switchTab(tab)" :key="tab.name" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700', 'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap']">
                {{ tab.name }}
                <span v-if="tab.count" :class="[tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900', 'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div class="mt-4">
          <div v-show="tabs[0].current" >
            All Bookings table
          </div>
          <div v-show="tabs[1].current" >
            Unassigned Bookings table
          </div>
      </div>
  </StakeholderLayout>
</template>

<script setup>
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';
import { ref } from 'vue'

const tabs = ref([
  { name: 'Bookings', count: '52', current: true },
  { name: 'Completed', count: '6', current: false },
])

// Function to switch tabs and update the current state
function switchTab(selectedTab) {
  tabs.value.forEach(tab => {
    tab.current = (tab.name === selectedTab.name);
  });
}
</script>