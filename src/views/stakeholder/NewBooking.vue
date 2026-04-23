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
          <a v-if="step.status === 'complete'" class="group flex flex-col border-l-4 theme-border py-2 pl-4 hover:opacity-85 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0">
          <span class="text-gray-500 text-sm font-medium">{{ step.id }}</span>
          <span class="text-gray-500 text-sm font-medium">{{ step.name }}</span>
                </a>
          <a v-else-if="step.status === 'current'" class="flex flex-col border-l-4 theme-border py-2 pl-4 md:border-b-4 md:border-l-0 md:pb-4  md:pl-0" aria-current="step">
          <span class="theme-text text-sm font-medium">{{ step.id }}</span>
          <span class="theme-text text-sm font-medium">{{ step.name }}</span>
                </a>
                <a v-else class="group flex flex-col border-l-4 theme-soft-border py-2 pl-4 hover:opacity-85 md:border-b-4 md:border-l-0 md:pb-4  md:pl-0">
                <span class="theme-text text-sm font-medium">{{ step.id }}</span>
          <span class="theme-soft-text text-sm font-medium">{{ step.name }}</span>
                </a>
            </li>
            </ol>
        </nav>

        <!-- Content for each step would go here -->
         <div class="mt-5">
            <div v-if="steps[0].status === 'current'">
              <div class="w-full flex justify-between gap-5">
                  <div class="w-full">
                    <label for="business_area" class="block text-sm font-medium theme-text">Business Area</label>
                    <div class="mt-1">
                      <input type="text" name="Business Area" id="business_area" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="project_number" class="block text-sm font-medium theme-text">Project Number</label>
                    <div class="mt-1">
                      <input type="text" name="Project Number" id="project_number" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="expected_shipment_date" class="block text-sm font-medium theme-text">Expected Shipment Date</label>
                    <div class="mt-1">
                      <input type="date" name="expected_shipment_date" id="expected_shipment_date" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
              </div>
              <div class="w-full flex justify-between gap-5 mt-5">
                <div class="w-full">
                  <label for="project_manager" class="block text-sm font-medium theme-text">NN Project manager</label>
                  <div class="mt-1">
                    <input type="text" name="project_manager" id="project_manager" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
                <div class="w-full">
                  <label for="outsourcing_manager" class="block text-sm font-medium theme-text">Outsourcing manager</label>
                  <div class="mt-1">
                    <input type="text" name="outsourcing_manager" id="outsourcing_manager" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
                <div class="w-full">
                  <label for="cost_center" class="block text-sm font-medium theme-text">NN Cost center</label>
                  <div class="mt-1">
                    <input type="text" name="cost_center" id="cost_center" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="w-full gap-5 mt-5">
                <label for="comment" class="block text-sm font-medium theme-text">General comment</label>
                <div class="mt-1">
                  <textarea name="comment" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder=""></textarea>
                </div>
              </div>
            </div>
            <div v-else-if="steps[1].status === 'current'">
              <div class="w-full flex justify-between gap-5">
                  <div class="w-full">
                    <label for="is_gmp" class="block text-sm font-medium theme-text ">Is GMP?</label>
                    <div class="mt-1">
                      <input type="checkbox" name="Is GMP?" id="is_gmp" class="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="Categorization" class="block text-sm font-medium theme-text">Categorization of material/chargo</label>
                    <div class="mt-1">
                      <select type="text" name="Categorization" id="categ" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="">
                        <option value="">Select categorization</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="shipping_temperature" class="block text-sm font-medium theme-text">Shipping temperature</label>
                    <div class="mt-1">
                      <select type="text" name="shipping_temperature" id="shipping_temperature" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="">
                        <option value="">Select shipping temperature</option>
                        <option value="ambient">Ambient</option>
                        <option value="refrigerated">Refrigerated</option>
                        <option value="frozen">Frozen</option>
                      </select>

                    </div>
                  </div>
              </div>
              <div class="flex justify-between gap-5 mt-5">
                  <div class="w-full">
                    <label for="gross_weight" class="block text-sm font-medium theme-text">Gross weight</label>
                    <div class="mt-1 flex">
                      <input type="number" name="gross_weight" id="gross_weight" class="block w-full rounded-l-md border-r-0 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                      <select name="gross_weight_unit" id="gross_weight_unit" class="block rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="mg">mg</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="total_colli" class="block text-sm font-medium theme-text">total number of colli</label>

                    <input type="number" name="total_colli" id="total_colli" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                  <div class="min-w-1/3"></div>
              </div>
              <div class="mt-6">
                <div class="flex items-center justify-between">
                  <h4 class="theme-text text-sm font-semibold">Cargo details</h4>
                  <button type="button" @click="addCargoItem" class="theme-nav inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001B66]">
                    Add
                  </button>
                </div>
                <div class="mt-3 overflow-x-auto rounded-md border theme-soft-border">
                  <table class="w-full border-collapse bg-white">
                    <thead>
                      <tr class="theme-soft-text text-left text-sm">
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Item no</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Material name</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Batch number</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">CMO batch number</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Quantity</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Item type</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Net weight</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Country origin</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">HS/HTS code</th>
                        <th class="border-b theme-soft-border px-2 py-2 font-medium">Total price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in cargoItems" :key="item.rowId" class="align-top">
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.itemNo" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.materialName" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.batchNumber" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.cmoBatchNumber" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.quantity" type="number" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <select v-model="item.itemType" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                            <option value="">Select type</option>
                            <option value="raw-material">Raw material</option>
                            <option value="finished-good">Finished good</option>
                            <option value="sample">Sample</option>
                          </select>
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <div class="flex">
                          <input v-model="item.netWeight" type="number" class="block w-full rounded-l-md border-r-0 bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                          <select v-model="item.weightUnit" class="block rounded-r-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                            <option value="mg">mg</option>
                          </select>
                          </div>  
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.countryOrigin" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.hsHtsCode" type="text" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                        <td class="border-b theme-soft-border p-2">
                          <input v-model="item.totalPrice" type="number" step="0.01" class="block w-full rounded-md bg-white px-2 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>
            <div v-else-if="steps[2].status === 'current'">

            </div>
            <div v-else-if="steps[3].status === 'current'">
              Done
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

<script setup>
import { computed, ref } from 'vue';
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';

const cargoRowCounter = ref(2)

function createCargoItem(rowId) {
  return {
    rowId,
    itemNo: '',
    materialName: '',
    batchNumber: '',
    cmoBatchNumber: '',
    quantity: '',
    itemType: '',
    netWeight: '',
    weightUnit: 'kg',
    countryOrigin: '',
    hsHtsCode: '',
    totalPrice: '',
  }
}

const cargoItems = ref([createCargoItem(1)])

function addCargoItem() {
  cargoItems.value.unshift(createCargoItem(cargoRowCounter.value))
  cargoRowCounter.value += 1
}


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
