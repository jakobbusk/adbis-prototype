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
            <input v-model="searchBooking" type="text" name="booking" id="booking" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>

        </th>
        <th>
          <div class="mt-2">
            Booking/Shipping Responsible
            <input v-model="searchResponsible" type="text" name="shipping_responsible" id="shipping_responsible" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Shipment details
            <input v-model="searchShipmentDetails" type="text" name="shipment_details" id="shipment_details" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Pickup
            <input v-model="searchPickup" type="text" name="pickup" id="pickup" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th>
          <div class="mt-2">
            Dropoff
            <input v-model="searchDropoff" type="text" name="dropoff" id="dropoff" class="block w-3/4 rounded-md theme-surface px-2 py-0.5 text-base theme-text outline outline-1 -outline-offset-1 theme-soft-border placeholder:theme-soft-text focus:outline-2 focus:-outline-offset-2 focus:theme-border sm:text-sm/6" placeholder="Search bookings" />
          </div>
        </th>
        <th class="text-right">More details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="booking in filteredBookings" :key="booking.id" class="border-b theme-soft-border">
        <td class="relative py-1.5 pr-6">
          <div class="flex gap-x-6">
            <!-- <component :is="booking.icon" class="hidden h-6 w-5 flex-none text-gray-400 sm:block" aria-hidden="true" /> -->
            <div class="flex-auto">
              <div class="flex items-start gap-x-3">
                <div class="text-sm/6 font-medium text-gray-900">ID#{{ booking.bookingID }}</div>
                  <div v-if="booking.status.code === 'draft'" class="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 inset-ring inset-ring-gray-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'new'" class="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'awaiting-qa'" class="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 inset-ring inset-ring-amber-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'approved-qa'" class="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 inset-ring inset-ring-emerald-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'rejected-qa'" class="rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 inset-ring inset-ring-rose-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'shipment-ready'" class="rounded-md bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 inset-ring inset-ring-cyan-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'shipment-ready-awaiting-qa'" class="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 inset-ring inset-ring-amber-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'shipment-booked'" class="rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 inset-ring inset-ring-indigo-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'shipment-booked-awaiting-qa'" class="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 inset-ring inset-ring-amber-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'in-transit'" class="rounded-md bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 inset-ring inset-ring-violet-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'final-qa'" class="rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 inset-ring inset-ring-orange-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'completed'" class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">{{ booking.status.name }}</div>
                  <div v-if="booking.status.code === 'cancelled'" class="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/20">{{ booking.status.name }}</div>
              </div>
                <div class="mt-0.5 text-xs/5 text-gray-500">
                    Project: <span class="text-gray-900">{{ booking.project }}</span>
                </div>
            </div>
          </div>
        </td>
        <td class="hidden py-1.5 pr-6 sm:table-cell">
          <div class="text-sm/6 text-gray-900">{{ booking.bookingResponsible }} / {{ booking.shippingResponsible }}</div>
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
            <a :href="'/stakeholder/bookings/' + booking.bookingID" class="text-sm/6 font-semibold theme-text hover:opacity-90">View<span class="sr-only">, {{ booking.bookingID }}</span></a>
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
import { ref, computed } from 'vue'

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

// Search filter refs
const searchBooking = ref('');
const searchResponsible = ref('');
const searchShipmentDetails = ref('');
const searchPickup = ref('');
const searchDropoff = ref('');

// Helper function to check if a value contains search term (case-insensitive)
const matchesSearch = (value, searchTerm) => {
  if (!searchTerm) return true;
  return String(value).toLowerCase().includes(searchTerm.toLowerCase());
};

// Computed property for filtered bookings
const filteredBookings = computed(() => {
  return bookings.filter(booking => {
    // Booking ID and Project search
    const bookingMatch = !searchBooking.value ||
      matchesSearch(booking.bookingID, searchBooking.value) ||
      matchesSearch(booking.project, searchBooking.value);

    // Shipping/Booking Responsible search
    const responsibleMatch = !searchResponsible.value ||
      matchesSearch(booking.shippingResponsible, searchResponsible.value) ||
      matchesSearch(booking.bookingResponsible, searchResponsible.value);

    // Shipment Details and Description search
    const shipmentMatch = !searchShipmentDetails.value ||
      matchesSearch(booking.shipmentDetails, searchShipmentDetails.value) ||
      matchesSearch(booking.description, searchShipmentDetails.value);

    // Pickup address and country search
    const pickupMatch = !searchPickup.value ||
      matchesSearch(booking.pickup.adress, searchPickup.value) ||
      matchesSearch(booking.pickup.contry, searchPickup.value);

    // Dropoff address and country search
    const dropoffMatch = !searchDropoff.value ||
      matchesSearch(booking.dropoff.adress, searchDropoff.value) ||
      matchesSearch(booking.dropoff.contry, searchDropoff.value);

    // Return true only if all active searches match
    return bookingMatch && responsibleMatch && shipmentMatch && pickupMatch && dropoffMatch;
  });
});



const bookings = [
  {
    id: 1,
    bookingID: '0012',
    project: 'NN9423',
    status: { name: 'Draft', code: 'draft' },
    description: 'Electronics - 20 pallets',
    shippingResponsible: 'John Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Hamburg', contry: 'Germany', expectedDate: '2026-05-15' },
    shipmentDetails: '20 API, weight: 2000mg, volume: 1m3, temp: -20C',
    dropoff: { adress: 'Shanghai', contry: 'China', expectedDate: '2026-05-25' },
  },
  {
    id: 2,
    bookingID: '0013',
    project: 'NN9423',
    status: { name: 'New', code: 'new' },
    description: 'Chemicals - 10 pallets',
    shippingResponsible: 'Jane Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Rotterdam', contry: 'Netherlands', expectedDate: '2026-05-16' },
    shipmentDetails: '10 API, weight: 1000mg, volume: 0.5m3, temp: -18C',
    dropoff: { adress: 'Singapore', contry: 'Singapore', expectedDate: '2026-05-26' },
  },
  {
    id: 3,
    bookingID: '0014',
    project: 'NN9425',
    status: { name: 'Awaiting QA', code: 'awaiting-qa' },
    description: 'Biologics - 8 pallets',
    shippingResponsible: 'Martin Lund',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Copenhagen', contry: 'Denmark', expectedDate: '2026-05-17' },
    shipmentDetails: '8 API, weight: 800mg, volume: 0.6m3, temp: 2C',
    dropoff: { adress: 'Tokyo', contry: 'Japan', expectedDate: '2026-05-27' },
  },
  {
    id: 4,
    bookingID: '0015',
    project: 'NN9426',
    status: { name: 'Approved QA', code: 'approved-qa' },
    description: 'Reagents - 12 pallets',
    shippingResponsible: 'Sarah Chen',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Oslo', contry: 'Norway', expectedDate: '2026-05-18' },
    shipmentDetails: '12 API, weight: 1200mg, volume: 0.9m3, temp: 5C',
    dropoff: { adress: 'Seoul', contry: 'South Korea', expectedDate: '2026-05-28' },
  },
  {
    id: 5,
    bookingID: '0016',
    project: 'NN9427',
    status: { name: 'Rejected QA', code: 'rejected-qa' },
    description: 'Medical kits - 6 pallets',
    shippingResponsible: 'Nadia Olsen',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Milan', contry: 'Italy', expectedDate: '2026-05-19' },
    shipmentDetails: '6 API, weight: 600mg, volume: 0.4m3, temp: 8C',
    dropoff: { adress: 'Mumbai', contry: 'India', expectedDate: '2026-05-29' },
  },
  {
    id: 6,
    bookingID: '0017',
    project: 'NN9428',
    status: { name: 'Shipment ready', code: 'shipment-ready' },
    description: 'Sterile bags - 16 pallets',
    shippingResponsible: 'John Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Antwerp', contry: 'Belgium', expectedDate: '2026-05-20' },
    shipmentDetails: '16 API, weight: 1600mg, volume: 1.2m3, temp: 4C',
    dropoff: { adress: 'Sao Paulo', contry: 'Brazil', expectedDate: '2026-05-30' },
  },
    {
    id: 6,
    bookingID: '0017',
    project: 'NN9428',
    status: { name: 'Shipment ready, Awaiting QA', code: 'shipment-ready-awaiting-qa' },
    description: 'Sterile bags - 16 pallets',
    shippingResponsible: 'John Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Antwerp', contry: 'Belgium', expectedDate: '2026-05-20' },
    shipmentDetails: '16 API, weight: 1600mg, volume: 1.2m3, temp: 4C',
    dropoff: { adress: 'Sao Paulo', contry: 'Brazil', expectedDate: '2026-05-30' },
  },
  {
    id: 7,
    bookingID: '0018',
    project: 'NN9429',
    status: { name: 'Shipment booked', code: 'shipment-booked' },
    description: 'Vials - 14 pallets',
    shippingResponsible: 'Jane Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Hamburg', contry: 'Germany', expectedDate: '2026-05-21' },
    shipmentDetails: '14 API, weight: 1400mg, volume: 1.1m3, temp: -5C',
    dropoff: { adress: 'Shanghai', contry: 'China', expectedDate: '2026-05-31' },
  },

  {
    id: 7,
    bookingID: '0018',
    project: 'NN9429',
    status: { name: 'Shipment booked, Awaiting QA', code: 'shipment-booked-awaiting-qa' },
    description: 'Vials - 14 pallets',
    shippingResponsible: 'Jane Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Hamburg', contry: 'Germany', expectedDate: '2026-05-21' },
    shipmentDetails: '14 API, weight: 1400mg, volume: 1.1m3, temp: -5C',
    dropoff: { adress: 'Shanghai', contry: 'China', expectedDate: '2026-05-31' },
  },
  {
    id: 8,
    bookingID: '0019',
    project: 'NN9430',
    status: { name: 'In transit', code: 'in-transit' },
    description: 'Raw material - 18 pallets',
    shippingResponsible: 'Martin Lund',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Rotterdam', contry: 'Netherlands', expectedDate: '2026-05-22' },
    shipmentDetails: '18 API, weight: 1800mg, volume: 1.3m3, temp: -10C',
    dropoff: { adress: 'Singapore', contry: 'Singapore', expectedDate: '2026-06-01' },
  },
  {
    id: 9,
    bookingID: '0020',
    project: 'NN9431',
    status: { name: 'Final QA', code: 'final-qa' },
    description: 'Clinical samples - 5 pallets',
    shippingResponsible: 'Sarah Chen',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Copenhagen', contry: 'Denmark', expectedDate: '2026-05-23' },
    shipmentDetails: '5 API, weight: 500mg, volume: 0.3m3, temp: 2C',
    dropoff: { adress: 'Tokyo', contry: 'Japan', expectedDate: '2026-06-02' },
  },
  {
    id: 10,
    bookingID: '0021',
    project: 'NN9432',
    status: { name: 'Completed', code: 'completed' },
    description: 'Finished goods - 22 pallets',
    shippingResponsible: 'Nadia Olsen',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Oslo', contry: 'Norway', expectedDate: '2026-05-24' },
    shipmentDetails: '22 API, weight: 2200mg, volume: 1.6m3, temp: 6C',
    dropoff: { adress: 'Seoul', contry: 'South Korea', expectedDate: '2026-06-03' },
  },
  {
    id: 11,
    bookingID: '0022',
    project: 'NN9433',
    status: { name: 'Cancelled', code: 'cancelled' },
    description: 'Lab equipment - 9 pallets',
    shippingResponsible: 'John Doe',
    bookingResponsible: 'Stefanie Jensen',
    pickup: { adress: 'Milan', contry: 'Italy', expectedDate: '2026-05-25' },
    shipmentDetails: '9 API, weight: 900mg, volume: 0.7m3, temp: 10C',
    dropoff: { adress: 'Mumbai', contry: 'India', expectedDate: '2026-06-04' },
  },
]


</script>
