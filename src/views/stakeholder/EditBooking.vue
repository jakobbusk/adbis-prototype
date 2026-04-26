<template>
    <StakeholderLayout>
        <div class="pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 class="theme-text text-base font-semibold">Editing a shipment booking</h3>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">
          <router-link to="/stakeholder/bookings/1" type="button" class="theme-nav ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001B66]">Update</router-link>
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
                    <FormLabelTooltip for-id="business_area" label="Business Area" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <input v-model="bookingForm.businessArea" type="text" name="Business Area" id="business_area" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="project_number" label="Project Number" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <input v-model="bookingForm.projectNumber" type="text" name="Project Number" id="project_number" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="expected_shipment_date" label="Expected Shipment Date" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <input v-model="bookingForm.expectedShipmentDate" type="date" name="expected_shipment_date" id="expected_shipment_date" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
              </div>
              <div class="w-full flex justify-between gap-5 mt-5">
                <div class="w-full">
                  <FormLabelTooltip for-id="project_manager" label="NN Project manager" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input v-model="bookingForm.projectManager" type="text" name="project_manager" id="project_manager" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
                <div class="w-full">
                  <FormLabelTooltip for-id="outsourcing_manager" label="Outsourcing manager" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input v-model="bookingForm.outsourcingManager" type="text" name="outsourcing_manager" id="outsourcing_manager" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
                <div class="w-full">
                  <FormLabelTooltip for-id="cost_center" label="NN Cost center" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input v-model="bookingForm.costCenter" type="text" name="cost_center" id="cost_center" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="w-full gap-5 mt-5">
                <FormLabelTooltip for-id="comment" label="General comment" :tooltip="tooltipMessage" label-class="theme-text" />
                <div class="mt-1">
                  <textarea v-model="bookingForm.generalComment" name="comment" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder=""></textarea>
                </div>
              </div>
            </div>
            <div v-else-if="steps[1].status === 'current'">
              <div class="w-full flex justify-between gap-5">
                  <div class="w-full">
                    <FormLabelTooltip for-id="is_gmp" label="Is GMP?" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <input v-model="bookingForm.isGmp" type="checkbox" name="Is GMP?" id="is_gmp" class="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400" placeholder="" />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="Categorization" label="Categorization of material/chargo" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <select v-model="bookingForm.categorization" type="text" name="Categorization" id="categ" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="">
                        <option value="">Select categorization</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="shipping_temperature" label="Shipping temperature" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                      <select v-model="bookingForm.shippingTemperature" type="text" name="shipping_temperature" id="shipping_temperature" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="">
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
                    <FormLabelTooltip for-id="gross_weight" label="Gross weight" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1 flex">
                      <input v-model="bookingForm.grossWeight" type="number" name="gross_weight" id="gross_weight" class="block w-full rounded-l-md border-r-0 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
                      <select v-model="bookingForm.grossWeightUnit" name="gross_weight_unit" id="gross_weight_unit" class="block rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="mg">mg</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="total_colli" label="total number of colli" :tooltip="tooltipMessage" label-class="theme-text" />

                    <input v-model="bookingForm.totalColli" type="number" name="total_colli" id="total_colli" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder="" />
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
              <div class="space-y-6">

              <div class="rounded-md border theme-soft-border bg-white p-4">
                <h2 class="theme-text text-lg font-semibold">
                  Sender/Consignor information
                </h2>

                <div class="mt-3">
                  <FormLabelTooltip for-id="sender_pickup_address" label="Sender - Pick-up address" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                  <select
                    v-model="bookingForm.senderPickupAddress"
                    id="sender_pickup_address"
                    name="sender_pickup_address"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border"
                  >
                    <option value="">Select pick-up address</option>
                    <option value="copenhagen">Copenhagen, Denmark</option>
                    <option value="aarhus">Aarhus, Denmark</option>
                    <option value="malmo">Malmö, Sweden</option>
                  </select>
                  </div>
                </div>

                <div class="flex gap-5 mt-3">
                    <div class="w-full">
                    <FormLabelTooltip for-id="sender_contact_name" label="Contact full name" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                    <input
                      v-model="bookingForm.senderContactName"
                      type="text"
                      id="sender_contact_name"
                      name="sender_contact_name"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                      placeholder="Enter full name"
                    />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="sender_contact_email" label="Contact e-mail" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                    <input
                      v-model="bookingForm.senderContactEmail"
                      type="email"
                      id="sender_contact_email"
                      name="sender_contact_email"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                      placeholder="name@example.com"
                    />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="sender_contact_phone" label="Contact phone number" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                    <input
                      v-model="bookingForm.senderContactPhone"
                      type="tel"
                      id="sender_contact_phone"
                      name="sender_contact_phone"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                      placeholder="+45 12 34 56 78"
                    />
                    </div>
                  </div>
                </div>
                <div class="flex gap-5 mt-3">
                  <div class="w-full">
                    <FormLabelTooltip for-id="sender_vat_number" label="VAT number" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                    <input
                      v-model="bookingForm.senderVatNumber"
                      type="text"
                      id="sender_vat_number"
                      name="sender_vat_number"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                      placeholder="VAT number"
                    />
                    </div>
                  </div>
                  <div class="w-full">
                    <FormLabelTooltip for-id="sender_pickup_reference" label="Pick-up reference number" :tooltip="tooltipMessage" label-class="theme-text" />
                    <div class="mt-1">
                    <input
                      v-model="bookingForm.senderPickupReference"
                      type="text"
                      id="sender_pickup_reference"
                      name="sender_pickup_reference"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                      placeholder="Reference number"
                    />
                    </div>
                  </div>
                </div>

              </div>

                <div class="rounded-md border theme-soft-border bg-white p-4">
                <h2 class="theme-text text-lg font-semibold">
                  Receiver/Consignee information
                </h2>

                <div class="mt-3">
                  <FormLabelTooltip for-id="receiver_delivery_address" label="Receiver - Delivery address" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                  <select
                    v-model="bookingForm.receiverDeliveryAddress"
                    id="receiver_delivery_address"
                    name="receiver_delivery_address"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border"
                  >
                    <option value="">Select delivery address</option>
                    <option value="copenhagen">Copenhagen, Denmark</option>
                    <option value="aarhus">Aarhus, Denmark</option>
                    <option value="malmo">Malmö, Sweden</option>
                  </select>
                  </div>
                </div>

                <div class="flex gap-5 mt-3">
                  <div class="w-full">
                  <FormLabelTooltip for-id="receiver_contact_name" label="Contact full name" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input
                    v-model="bookingForm.receiverContactName"
                    type="text"
                    id="receiver_contact_name"
                    name="receiver_contact_name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                    placeholder="Enter full name"
                    />
                  </div>
                  </div>
                  <div class="w-full">
                  <FormLabelTooltip for-id="receiver_contact_email" label="Contact e-mail" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input
                    v-model="bookingForm.receiverContactEmail"
                    type="email"
                    id="receiver_contact_email"
                    name="receiver_contact_email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                    placeholder="name@example.com"
                    />
                  </div>
                  </div>
                  <div class="w-full">
                  <FormLabelTooltip for-id="receiver_contact_phone" label="Contact phone number" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input
                    v-model="bookingForm.receiverContactPhone"
                    type="tel"
                    id="receiver_contact_phone"
                    name="receiver_contact_phone"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                    placeholder="+45 12 34 56 78"
                    />
                  </div>
                  </div>
                </div>

                <div class="flex gap-5 mt-3">
                  <div class="w-full">
                  <FormLabelTooltip for-id="receiver_vat_number" label="VAT number" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input
                    v-model="bookingForm.receiverVatNumber"
                    type="text"
                    id="receiver_vat_number"
                    name="receiver_vat_number"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                    placeholder="VAT number"
                    />
                  </div>
                  </div>
                  <div class="w-full">
                  <FormLabelTooltip for-id="receiver_delivery_reference" label="Delivery reference number" :tooltip="tooltipMessage" label-class="theme-text" />
                  <div class="mt-1">
                    <input
                    v-model="bookingForm.receiverDeliveryReference"
                    type="text"
                    id="receiver_delivery_reference"
                    name="receiver_delivery_reference"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400"
                    placeholder="Reference number"
                    />
                  </div>
                  </div>
                </div>
                </div>
                <div>
                  General shipping comment

                    <textarea v-model="bookingForm.shippingComment" name="comment" id="comment" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400" placeholder=""></textarea>
                </div>
            </div>

            </div>
            <div v-else-if="steps[3].status === 'current'">
              <div class="space-y-6">
                <div class="">
                  <h2 class="theme-text text-lg font-semibold">Opsummering</h2>
                  <p class="mt-1 text-sm theme-soft-text">Gennemgå venligst oplysningerne fra de forrige trin, inden du opretter bookingen.</p>
                </div>

                <div class="rounded-md border theme-soft-border bg-white p-4">
                  <h3 class="theme-text text-base font-semibold">General information</h3>
                  <div class="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <FormLabelTooltip for-id="summary_business_area" label="Business Area" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.businessArea" id="summary_business_area" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_project_number" label="Project Number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.projectNumber" id="summary_project_number" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_expected_shipment_date" label="Expected Shipment Date" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.expectedShipmentDate" id="summary_expected_shipment_date" type="date" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_project_manager" label="NN Project manager" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.projectManager" id="summary_project_manager" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_outsourcing_manager" label="Outsourcing manager" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.outsourcingManager" id="summary_outsourcing_manager" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_cost_center" label="NN Cost center" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.costCenter" id="summary_cost_center" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                    <div class="md:col-span-3">
                      <FormLabelTooltip for-id="summary_general_comment" label="General comment" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <textarea v-model="bookingForm.generalComment" id="summary_general_comment" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border"></textarea>
                    </div>
                  </div>
                </div>

                <div class="rounded-md border theme-soft-border bg-white p-4">
                  <h3 class="theme-text text-base font-semibold">Cargo details</h3>
                  <div class="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <FormLabelTooltip for-id="summary_is_gmp" label="Is GMP?" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.isGmp" id="summary_is_gmp" type="checkbox" class="mt-2 h-4 w-4 rounded theme-soft-border" />
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_categorization" label="Categorization of material/cargo" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <select v-model="bookingForm.categorization" id="summary_categorization" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                        <option value="">Select categorization</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_shipping_temperature" label="Shipping temperature" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <select v-model="bookingForm.shippingTemperature" id="summary_shipping_temperature" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                        <option value="">Select shipping temperature</option>
                        <option value="ambient">Ambient</option>
                        <option value="refrigerated">Refrigerated</option>
                        <option value="frozen">Frozen</option>
                      </select>
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_gross_weight" label="Gross weight" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <div class="mt-1 flex">
                        <input v-model="bookingForm.grossWeight" id="summary_gross_weight" type="number" class="block w-full rounded-l-md border-r-0 bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                        <select v-model="bookingForm.grossWeightUnit" class="block rounded-r-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="mg">mg</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <FormLabelTooltip for-id="summary_total_colli" label="Total number of colli" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                      <input v-model="bookingForm.totalColli" id="summary_total_colli" type="number" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                    </div>
                  </div>

                  <div class="mt-4 overflow-x-auto rounded-md border theme-soft-border">
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
                        <tr v-for="item in cargoItems" :key="`summary-${item.rowId}`" class="align-top text-sm">
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

                <div class="rounded-md border theme-soft-border bg-white p-4">
                  <h3 class="theme-text text-base font-semibold">Shipping consignee/consignor</h3>

                  <div class="mt-3">
                    <h4 class="theme-text text-sm font-semibold">Sender/Consignor information</h4>
                    <div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div>
                        <FormLabelTooltip for-id="summary_sender_pickup_address" label="Sender - Pick-up address" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <select v-model="bookingForm.senderPickupAddress" id="summary_sender_pickup_address" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                          <option value="">Select pick-up address</option>
                          <option value="copenhagen">Copenhagen, Denmark</option>
                          <option value="aarhus">Aarhus, Denmark</option>
                          <option value="malmo">Malmö, Sweden</option>
                        </select>
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_sender_contact_name" label="Contact full name" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.senderContactName" id="summary_sender_contact_name" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_sender_contact_email" label="Contact e-mail" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.senderContactEmail" id="summary_sender_contact_email" type="email" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_sender_contact_phone" label="Contact phone number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.senderContactPhone" id="summary_sender_contact_phone" type="tel" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_sender_vat_number" label="VAT number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.senderVatNumber" id="summary_sender_vat_number" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_sender_pickup_reference" label="Pick-up reference number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.senderPickupReference" id="summary_sender_pickup_reference" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h4 class="theme-text text-sm font-semibold">Receiver/Consignee information</h4>
                    <div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_delivery_address" label="Receiver - Delivery address" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <select v-model="bookingForm.receiverDeliveryAddress" id="summary_receiver_delivery_address" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border">
                          <option value="">Select delivery address</option>
                          <option value="copenhagen">Copenhagen, Denmark</option>
                          <option value="aarhus">Aarhus, Denmark</option>
                          <option value="malmo">Malmö, Sweden</option>
                        </select>
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_contact_name" label="Contact full name" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.receiverContactName" id="summary_receiver_contact_name" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_contact_email" label="Contact e-mail" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.receiverContactEmail" id="summary_receiver_contact_email" type="email" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_contact_phone" label="Contact phone number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.receiverContactPhone" id="summary_receiver_contact_phone" type="tel" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_vat_number" label="VAT number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.receiverVatNumber" id="summary_receiver_vat_number" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div>
                        <FormLabelTooltip for-id="summary_receiver_delivery_reference" label="Delivery reference number" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <input v-model="bookingForm.receiverDeliveryReference" id="summary_receiver_delivery_reference" type="text" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border" />
                      </div>
                      <div class="md:col-span-3">
                        <FormLabelTooltip for-id="summary_shipping_comment" label="General shipping comment" :tooltip="tooltipMessage" label-class="theme-soft-text" />
                        <textarea v-model="bookingForm.shippingComment" id="summary_shipping_comment" class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline-1 -outline-offset-1 theme-soft-border"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import FormLabelTooltip from '@/components/FormLabelTooltip.vue';

const cargoRowCounter = ref(3)

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

const cargoItems = ref([
  {
    rowId: 1,
    itemNo: '1',
    materialName: 'Finished Drug Tablets - Variant A',
    batchNumber: 'FDT-2026-4521',
    cmoBatchNumber: 'CMO-2026-8821',
    quantity: '5000',
    itemType: 'finished-good',
    netWeight: '500',
    weightUnit: 'kg',
    countryOrigin: 'Norway',
    hsHtsCode: '3004.90.10',
    totalPrice: '45000.00',
  },
  {
    rowId: 2,
    itemNo: '2',
    materialName: 'Finished Drug Capsules',
    batchNumber: 'FDC-2026-4523',
    cmoBatchNumber: 'CMO-2026-8823',
    quantity: '3000',
    itemType: 'finished-good',
    netWeight: '300',
    weightUnit: 'kg',
    countryOrigin: 'Norway',
    hsHtsCode: '3004.90.10',
    totalPrice: '36000.00',
  }
])

const bookingForm = ref({
  businessArea: 'Pharmaceutical Manufacturing',
  projectNumber: 'NN9432',
  expectedShipmentDate: '2026-05-24',
  projectManager: 'Thomas Berg',
  outsourcingManager: 'Nadia Olsen',
  costCenter: 'CC-2026-001',
  generalComment: 'Standard pharmaceutical shipment. Temperature controlled required. All items require GMP certification.',
  isGmp: true,
  categorization: '2',
  shippingTemperature: 'refrigerated',
  grossWeight: '2200',
  grossWeightUnit: 'kg',
  totalColli: '22',
  senderPickupAddress: 'copenhagen',
  senderContactName: 'Erik Andersen',
  senderContactEmail: 'erik.andersen@pharmaoslo.com',
  senderContactPhone: '+47 23 45 67 89',
  senderVatNumber: 'NO 123456789',
  senderPickupReference: 'REF-OSL-001',
  receiverDeliveryAddress: 'aarhus',
  receiverContactName: 'Park Ji-won',
  receiverContactEmail: 'park.jiwon@pharmaseoul.kr',
  receiverContactPhone: '+82 2 1234 5678',
  receiverVatNumber: 'KR 12-1234567-89-0',
  receiverDeliveryReference: 'REF-SOU-KOR-001',
  shippingComment: 'Deliver to warehouse entrance. Requires signature on receipt. Check temperature logs upon arrival.',
})


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


const tooltipMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia.'


</script>
