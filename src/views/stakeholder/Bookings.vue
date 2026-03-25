<template>
  <StakeholderLayout>
      <div>
        <div class="hidden sm:block">
          <div class="border-b theme-soft-border">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a v-for="tab in tabs" @click="switchTab(tab)" :key="tab.name" :class="[tab.current ? 'theme-border theme-text' : 'border-transparent theme-soft-text hover:opacity-90', 'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap']">
                {{ tab.name }}
                <span v-if="tab.count" :class="[tab.current ? 'theme-nav text-white' : 'theme-surface theme-text', 'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div >
          <div v-show="tabs[0].current" >
  <table class="w-full text-left">
    <thead class="border-b theme-soft-border bg-gray-50 ">
      <tr>
        <th class="py-3.5">Amount</th>
        <th>Client</th>
        <th class="text-right">More details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td class="relative py-5 pr-6">
          <div class="flex gap-x-6">
            <component :is="transaction.icon" class="hidden h-6 w-5 flex-none text-gray-400 sm:block" aria-hidden="true" />
            <div class="flex-auto">
              <div class="flex items-start gap-x-3">
                <div class="text-sm/6 font-medium text-gray-900">{{ transaction.amount }}</div>
                <div v-if="transaction.status === 'Paid'" class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">{{ transaction.status }}</div>
                <div v-if="transaction.status === 'Withdraw'" class="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">{{ transaction.status }}</div>
                <div v-if="transaction.status === 'Overdue'" class="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">{{ transaction.status }}</div>
              </div>
              <div v-if="transaction.tax" class="mt-1 text-xs/5 text-gray-500">{{ transaction.tax }} tax</div>
            </div>
          </div>
          <div class="absolute right-full bottom-0 h-px w-screen bg-gray-100"></div>
          <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
        </td>
        <td class="hidden py-5 pr-6 sm:table-cell">
          <div class="text-sm/6 text-gray-900">{{ transaction.client }}</div>
          <div class="mt-1 text-xs/5 text-gray-500">{{ transaction.description }}</div>
        </td>
        <td class="py-5 text-right">
          <div class="flex justify-end">
            <a :href="transaction.href" class="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
              >View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ transaction.bookingID }}, {{ transaction.client }}</span></a
            >
          </div>
          <div class="mt-1 text-xs/5 text-gray-500">
            Invoice <span class="text-gray-900">#{{ transaction.bookingID }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

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



import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/vue/20/solid'

const transactions = [
      {
        id: 1,
        bookingID: '00012',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: '',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        bookingID: '00011',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        bookingID: '00009',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ]
</script>
