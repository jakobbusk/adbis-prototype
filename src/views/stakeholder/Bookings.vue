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
        <th class="py-3.5">
          <div class="mt-2">
            Booking ID
            <input type="text" name="booking" id="booking" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>

        </th>
        <th>
          <div class="mt-2">
            Booking/Shipping Responsible
            <input type="text" name="shipping_responsible" id="shipping_responsible" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Shipment details
            <input type="text" name="shipment_details" id="shipment_details" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Pickup
            <input type="text" name="pickup" id="pickup" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Dropoff
            <input type="text" name="dropoff" id="dropoff" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th class="text-right">More details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="booking in bookings" :key="booking.id" class="border-b theme-soft-border">
        <td class="relative py-1.5 pr-6">
          <div class="flex gap-x-6">
            <component :is="booking.icon" class="hidden h-6 w-5 flex-none text-gray-400 sm:block" aria-hidden="true" />
            <div class="flex-auto">
              <div class="flex items-start gap-x-3">
                <div class="text-sm/6 font-medium text-gray-900">ID#{{ booking.bookingID }}</div>
                <div v-if="booking.status.code === 'new'" class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">{{ booking.status.name }}</div>
                <div v-if="booking.status.code === 'shipped'" class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">{{ booking.status.name }}</div>
              </div>
                <div class="mt-0.5 text-xs/5 text-gray-500">
                    Project: <span class="text-gray-900">{{ booking.project }}</span>
                </div>
            </div>
          </div>
        </td>
        <td class="hidden py-1.5 pr-6 sm:table-cell">
          <div class="text-sm/6 text-gray-900">{{ booking.shippingResponsible }} / {{ booking.bookingResponsible }}</div>
        </td>
        <td class="hidden py-1.5 pr-6 sm:table-cell">
          <div class="text-sm/6 text-gray-900">{{ booking.shipmentDetails }}</div>
        </td>
        <td class="hidden py-1.5 pr-6 sm:table-cell">
          <div class="text-sm/6 text-gray-900">{{ booking.pickup.adress + ', ' + booking.pickup.contry }} </div>
          <div class="mt-0.5 text-xs/5 text-gray-500">ETA: {{ booking.pickup.expectedDate }}</div>
        </td>
        <td class="py-1.5">
          <div class="text-sm/6 text-gray-900">{{ booking.dropoff.adress + ', ' + booking.dropoff.contry }} </div>
          <div class="mt-0.5 text-xs/5 text-gray-500">ETA: {{ booking.dropoff.expectedDate }}</div>
        </td>
          <td class="py-1.5 text-right">
            <a href="#" class="text-sm/6 font-semibold theme-text hover:opacity-90">View<span class="sr-only">, {{ booking.bookingID }}</span></a>
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

// Shipping team layout
// const tabs = ref([
//   { name: 'My Bookings', count: '12', current: true },
//   { name: 'All Bookings', count: '52', current: false },
//   { name: 'Unassigned', count: '8', current: false },
//   { name: 'Completed', count: '6', current: false },
// ])

// Stakeholder layout
const tabs = ref([
  { name: 'My Bookings', count: '52', current: true },
  { name: 'Team bookings', count: '52', current: false },
  { name: 'Completed', count: '6', current: false },
])

// Function to switch tabs and update the current state
function switchTab(selectedTab) {
  tabs.value.forEach(tab => {
    tab.current = (tab.name === selectedTab.name);
  });
}



import { ArrowDownCircleIcon, ArrowPathIcon, PaperAirplaneIcon } from '@heroicons/vue/20/solid'

// Avalible status': New booking, Booking updated, Booking cancelled, Booking completed "Booking is sent, awaiting final documents"


const bookings = [
      {
        id: 1,
        bookingID: '0012',
        project: 'NN9423',
        status: {
            name: 'Shipped',
            code: 'shipped'
        },
        description: 'Electronics - 20 pallets',
        shippingResponsible: 'John Doe',
        bookingResponsible: 'Alice Smith',
        pickup: {
            adress: 'Hamburg',
            contry: 'Germany',
            expectedDate: '2024-06-15'
        },
        shipmentDetails: '20 API, weight: 2000mg, \n volume: 1m³, temp: -100°C',
        dropoff: {
            adress: 'Shanghai',
            contry: 'China',
            expectedDate: '2024-06-25'
        },

        icon: PaperAirplaneIcon,
      },
      {
        id: 2,
        bookingID: '0013',
        project: 'NN9424',
        status: {
            name: 'New',
            code: 'new'
        },
        description: 'Chemicals - 10 pallets',
        shippingResponsible: 'Jane Doe',
        bookingResponsible: 'Bob Johnson',
        pickup: {
            adress: 'Rotterdam',
            contry: 'Netherlands',
            expectedDate: '2024-06-20'
        },
        shipmentDetails: '10 API, weight: 1000mg, \n volume: 0.5m³, temp: -80°C',
        dropoff: {
            adress: 'Singapore',
            contry: 'Singapore',
            expectedDate: '2024-06-30'
        },

        icon: ArrowDownCircleIcon,
      },


    ]
</script>
