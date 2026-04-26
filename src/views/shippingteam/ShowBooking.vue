<template>
    <ShippingLayout>

    <template v-slot:plain>
    <div class="mx-auto max-w-375 px-4 py-6 sm:px-6 lg:px-8 space-y-4">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
          <h2 class="font-bold text-gray-900 text-3xl flex items-center gap-4">
            ID#{{ bookingId }}
            <span class="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-600/20">{{ booking.status }}</span>
          </h2>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 size-5 shrink-0 text-gray-400">
                <path d="M10.5 1.5H9.5A2.5 2.5 0 0 0 7 4v1H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V4a2.5 2.5 0 0 0-2.5-2.5zm3.5 3V4a1.5 1.5 0 0 0-3 0v.5h3z" />
              </svg>
              Project {{ booking.projectNumber }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 size-5 shrink-0 text-gray-400">
                <path d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              {{ booking.businessArea }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 size-5 shrink-0 text-gray-400">
                <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                <path d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              {{ booking.totalColli }} pallets • {{ booking.grossWeight }}{{ booking.grossWeightUnit }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 size-5 shrink-0 text-gray-400">
                <path d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              Shipment {{ booking.expectedShipmentDate }}
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
          <span class="hidden sm:block">
            <router-link :to="`/shipping/bookings/${bookingId}/edit`" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 -ml-0.5 size-5 text-gray-400">
                <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
              </svg>
              Edit booking
            </router-link>
          </span>

          <span class="ml-3 hidden sm:block">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">
              Send QA documents
            </button>
          </span>

          <span class="sm:ml-3">
            <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="mr-1.5 -ml-0.5 size-5">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              Complete
            </button>
          </span>
        </div>
      </div>

      <div class="w-full grid  grid-rows-1 items-start gap-x-8 gap-y-8 grid-cols-3">
      <div>
        <!-- Activity feed -->
        <h2 class="text-sm/6 font-semibold text-gray-900">Timeline</h2>
        <ul role="list" class="mt-6 space-y-6">
          <li v-for="(item, index) in timeline" :key="item.id" class="relative flex gap-x-4">
            <div v-if="index !== timeline.length - 1" class="absolute top-0 -bottom-6 left-0 flex w-6 justify-center">
              <div class="w-px bg-gray-200"></div>
            </div>
            <div v-if="item.type === 'comment'" class="contents">
              <div class="relative flex size-6 flex-none items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-4">
                  <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v6A2.5 2.5 0 0 1 15.5 14H9.414l-3.707 3.707A1 1 0 0 1 4 17v-3H4.5A2.5 2.5 0 0 1 2 11.5v-6Z" />
                </svg>
              </div>
              <div class="flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset">
                <div class="flex justify-between gap-x-4">
                  <div class="py-0.5 text-xs/5 text-gray-500"><span class="font-medium text-gray-900">{{ item.sender }}</span> commented</div>
                  <time :datetime="item.createdAt" class="flex-none py-0.5 text-xs/5 text-gray-500">{{ item.createdAt }}</time>
                </div>
                <p class="text-sm/6 text-gray-500">{{ item.message }}</p>
              </div>
            </div>

            <div v-else class="contents">
              <div class="relative flex size-6 flex-none items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300">
                <div class="size-1.5 rounded-full bg-gray-500"></div>
              </div>
              <p class="flex-auto py-0.5 text-xs/5 text-gray-500"><span class="font-medium text-gray-900">{{ item.sender }}</span> {{ item.message }}</p>
              <time :datetime="item.createdAt" class="flex-none py-0.5 text-xs/5 text-gray-500">{{ item.createdAt }}</time>
            </div>
          </li>
        </ul>

        <div class="mt-6 flex gap-x-3">
          <form @submit.prevent="postTimelineComment" class="relative flex-auto">
            <div class="overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <label for="comment" class="sr-only">Add your comment</label>
              <textarea v-model="newComment" id="comment" name="comment" rows="2" placeholder="Add your comment..." class="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"></textarea>
            </div>

            <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
              <div class="flex items-center space-x-5">
                <div class="flex items-center">
                  <button type="button" class="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                      <path d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                  </button>
                </div>

              </div>
              <button type="submit" :disabled="isPosting || !newComment.trim()" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">{{ isPosting ? 'Posting...' : 'Comment' }}</button>
            </div>
          </form>
        </div>
      </div>

        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2 px-8 py-6 shadow-xs rounded-lg ring-1 ring-gray-900/5 ">
          <div class="-mx-8 -mt-6 mb-4 border-b border-gray-200">
            <div class="">
              <nav class="px-8 flex space-x-8" aria-label="Tabs">
                <a v-for="tab in tabs" @click="switchTab(tab)" :key="tab.name" :class="[tab.current ? 'theme-border theme-text' : 'border-transparent theme-soft-text hover:opacity-90', 'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap']">
                  {{ tab.name }}
                  <span v-if="tab.count" :class="[tab.current ? 'theme-nav text-white' : 'theme-surface theme-text', 'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div v-show="tabs[0].current" class="space-y-8">

            <!-- Project Details Section -->
            <div class="grid grid-cols-3 gap-6">
              <div>
                <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Project Number</div>
                <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.projectNumber }}</div>
              </div>
              <div>
                <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Business Area</div>
                <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.businessArea }}</div>
              </div>
              <div>
                <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Cost Center</div>
                <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.costCenter }}</div>
              </div>
            </div>

            <!-- Shipment Details Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Shipment Details</h3>
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Expected Shipment</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.expectedShipmentDate }}</div>
                </div>
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Temperature</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.shippingTemperature }}</div>
                </div>
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Weight</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.grossWeight }}{{ booking.grossWeightUnit }}</div>
                </div>
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Colli</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.totalColli }} pallets</div>
                </div>
              </div>
            </div>

            <!-- Categorization Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Categorization</h3>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Category</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.categorization }}</div>
                </div>
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Is GMP?</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">
                    <span v-if="booking.isGmp" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Yes</span>
                    <span v-else class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">No</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contacts Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Project Contacts</h3>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Project Manager</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.projectManager }}</div>
                </div>
                <div>
                  <div class="text-xs font-semibold uppercase tracking-wide text-gray-500">Outsourcing Manager</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ booking.outsourcingManager }}</div>
                </div>
              </div>
            </div>

            <!-- Pickup & Delivery Locations Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="font-semibold text-gray-900 mb-4">Locations</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="rounded-lg bg-gray-50 p-4">
                  <div class="font-semibold text-gray-900 mb-3">Pickup Location</div>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div><span class="font-medium text-gray-900">{{ booking.senderContactName }}</span></div>
                    <div>{{ booking.senderPickupAddress }}</div>
                    <div class="pt-2 border-t border-gray-200">
                      <div class="text-xs text-gray-500">Email</div>
                      <div class="font-medium text-gray-700">{{ booking.senderContactEmail }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Phone</div>
                      <div class="font-medium text-gray-700">{{ booking.senderContactPhone }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">VAT Number</div>
                      <div class="font-medium text-gray-700">{{ booking.senderVatNumber }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Reference</div>
                      <div class="font-medium text-gray-700">{{ booking.senderPickupReference }}</div>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-gray-50 p-4">
                  <div class="font-semibold text-gray-900 mb-3">Delivery Location</div>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div><span class="font-medium text-gray-900">{{ booking.receiverContactName }}</span></div>
                    <div>{{ booking.receiverDeliveryAddress }}</div>
                    <div class="pt-2 border-t border-gray-200">
                      <div class="text-xs text-gray-500">Email</div>
                      <div class="font-medium text-gray-700">{{ booking.receiverContactEmail }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Phone</div>
                      <div class="font-medium text-gray-700">{{ booking.receiverContactPhone }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">VAT Number</div>
                      <div class="font-medium text-gray-700">{{ booking.receiverVatNumber }}</div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Reference</div>
                      <div class="font-medium text-gray-700">{{ booking.receiverDeliveryReference }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Comments Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="font-semibold text-gray-900 mb-4">General Comment</h3>
              <div class="rounded-lg bg-blue-50 p-4 text-sm text-gray-700 border border-blue-100">
                {{ booking.generalComment }}
              </div>
              <h3 class="font-semibold text-gray-900 mt-6 mb-4">Shipping Comment</h3>
              <div class="rounded-lg bg-amber-50 p-4 text-sm text-gray-700 border border-amber-100">
                {{ booking.shippingComment }}
              </div>
            </div>

          </div>
          <div v-show="tabs[1].current" class="text-gray-500">
            Tracking information will be displayed here.
          </div>
          <div v-show="tabs[2].current" class="text-gray-500">
            <div class="mt-4 overflow-x-auto">
              <table class="w-full text-left text-xs leading-5 relative min-w-full whitespace-nowrap">
                <thead class="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th  class="px-0 py-2 font-semibold">Material / Item type</th>
                    <th scope="col" class="py-2 pr-0 pl-2 font-semibold">Batch / CMO batch</th>
                    <th scope="col" class="py-2 pr-0 pl-2 text-right font-semibold">Quantity</th>
                    <th scope="col" class="py-2 pr-0 pl-2 text-right font-semibold">Net weight</th>
                    <th scope="col" class="py-2 pr-0 pl-2 font-semibold">Country origin</th>
                    <th scope="col" class="py-2 pr-0 pl-2 font-semibold">HS/HTS code</th>
                    <th scope="col" class="py-2 pr-0 pl-2 text-right font-semibold">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in booking.cargoItems" :key="item.itemNo" class="border-b border-gray-100">
                    <td class="py-2.5 pr-0 pl-0 w-auto">
                      <div class="font-medium text-gray-900">{{ item.itemNo }}. {{ item.materialName }}</div>
                      <div class="text-gray-500">{{ item.itemType }}</div>
                    </td>
                    <td class="py-2.5 pr-0 pl-2 align-top tabular-nums">
                      <div class="text-gray-700">{{ item.batchNumber }}</div>
                      <div class="text-gray-500">{{ item.cmoBatchNumber }}</div>
                    </td>
                    <td class="py-2.5 pr-0 pl-2 text-right align-top text-gray-700 tabular-nums">{{ item.quantity }}</td>
                    <td class="py-2.5 pr-0 pl-2 text-right align-top text-gray-700 tabular-nums">{{ item.netWeight }}{{ item.weightUnit }}</td>
                    <td class="py-2.5 pr-0 pl-2 align-top text-gray-700">{{ item.countryOrigin }}</td>
                    <td class="py-2.5 pr-0 pl-2 align-top text-gray-700 tabular-nums">{{ item.hsHtsCode }}</td>
                    <td class="py-2.5 pr-0 pl-2 text-right align-top text-gray-700 tabular-nums">${{ item.totalPrice }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>

    </ShippingLayout>
</template>

<script setup>
import ShippingLayout from '@/layouts/ShippingLayout.vue';
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
// Hent router params for booking ID and fetch booking data from API
const route = useRoute();
const bookingId = route.params.id;
const timeline = ref([]);
const newComment = ref('');
const isPosting = ref(false);
const currentSender = ref('John Doe');
// Fetch timeline
async function fetchTimeline() {
  try {
    const response = await fetch(`http://localhost:3000/api/timeline/${bookingId}`);
    const timelineData = await response.json();
    timeline.value = timelineData;
  } catch (error) {
    console.error('Error fetching timeline:', error);
    alert('Failed to load timeline data. Please try again later.');
  }
}
fetchTimeline();

async function postTimelineComment() {
  const message = newComment.value.trim();
  if (!message || isPosting.value) return;

  isPosting.value = true;
  try {
    const response = await fetch(`http://localhost:3000/api/timeline/${bookingId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        type: 'comment',
        sender: currentSender.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to post comment');
    }

    newComment.value = '';
    await fetchTimeline();
  } catch (error) {
    console.error('Error posting timeline comment:', error);
    alert('Failed to post comment. Please try again later.');
  } finally {
    isPosting.value = false;
  }
}


// tabs
const tabs = ref([
  { name: 'Booking information', current: true },
  { name: 'Tracking', current: false },
  { name: 'Items', current: false },
  { name: 'Documents', current: false,},
])

// Function to switch tabs and update the current state
function switchTab(selectedTab) {
  tabs.value.forEach(tab => {
    tab.current = (tab.name === selectedTab.name);
  });
}


// Mock data in this format the moment, to be replaced by API calls later on
const booking = {
  id: '0021',
  status: 'New',
  businessArea: 'Pharmaceutical Manufacturing',
  projectNumber: 'NN9432',
  expectedShipmentDate: '2026-05-24',
  projectManager: 'Thomas Berg',
  outsourcingManager: 'Nadia Olsen',
  costCenter: 'CC-2026-001',
  generalComment: 'Standard pharmaceutical shipment. Temperature controlled required. All items require GMP certification.',
  isGmp: true,
  categorization: 'Pharmaceutical - Finished Goods',
  shippingTemperature: '6°C',
  grossWeight: '2200',
  grossWeightUnit: 'kg',
  totalColli: '22',
  senderPickupAddress: 'Oslo Pharmaceutical Plant, Industriveien 45, 0668 Oslo, Norway',
  senderContactName: 'Erik Andersen',
  senderContactEmail: 'erik.andersen@pharmaoslo.com',
  senderContactPhone: '+47 23 45 67 89',
  senderVatNumber: 'NO 123456789',
  senderPickupReference: 'REF-OSL-001',
  receiverDeliveryAddress: 'Seoul Distribution Center, 123 Logistics Road, Seoul 06000, South Korea',
  receiverContactName: 'Park Ji-won',
  receiverContactEmail: 'park.jiwon@pharmaseoul.kr',
  receiverContactPhone: '+82 2 1234 5678',
  receiverVatNumber: 'KR 12-1234567-89-0',
  receiverDeliveryReference: 'REF-SOU-KOR-001',
  shippingComment: 'Deliver to warehouse entrance. Requires signature on receipt. Check temperature logs upon arrival.',
  cargoItems: [
    {
      itemNo: '1',
      materialName: 'Finished Drug Tablets - Variant A',
      batchNumber: 'FDT-2026-4521',
      cmoBatchNumber: 'CMO-2026-8821',
      quantity: '5000',
      itemType: 'Pharmaceutical Product',
      netWeight: '500',
      weightUnit: 'kg',
      countryOrigin: 'Norway',
      hsHtsCode: '3004.90.10',
      totalPrice: '45000.00',
    },
    {
      itemNo: '2',
      materialName: 'Finished Drug Tablets - Variant B',
      batchNumber: 'FDT-2026-4522',
      cmoBatchNumber: 'CMO-2026-8822',
      quantity: '8000',
      itemType: 'Pharmaceutical Product',
      netWeight: '800',
      weightUnit: 'kg',
      countryOrigin: 'Norway',
      hsHtsCode: '3004.90.10',
      totalPrice: '72000.00',
    },
    {
      itemNo: '3',
      materialName: 'Finished Drug Capsules',
      batchNumber: 'FDC-2026-4523',
      cmoBatchNumber: 'CMO-2026-8823',
      quantity: '3000',
      itemType: 'Pharmaceutical Product',
      netWeight: '300',
      weightUnit: 'kg',
      countryOrigin: 'Norway',
      hsHtsCode: '3004.90.10',
      totalPrice: '36000.00',
    },
    {
      itemNo: '4',
      materialName: 'Product Documentation & Certificates',
      batchNumber: 'DOC-2026-4524',
      cmoBatchNumber: 'CMO-2026-8824',
      quantity: '1',
      itemType: 'Documentation',
      netWeight: '5',
      weightUnit: 'kg',
      countryOrigin: 'Norway',
      hsHtsCode: '4901.99.00',
      totalPrice: '0.00',
    },
    {
      itemNo: '5',
      materialName: 'Shipping Containers & Insulation',
      batchNumber: 'PKG-2026-4525',
      cmoBatchNumber: 'CMO-2026-8825',
      quantity: '22',
      itemType: 'Packaging Material',
      netWeight: '595',
      weightUnit: 'kg',
      countryOrigin: 'Germany',
      hsHtsCode: '3923.30.00',
      totalPrice: '5500.00',
    }
  ]
}



</script>