<template>
  <div>


  </div>
</template>

<script lang="ts" setup>

// Mock data in this format the moment, to be replaced by API calls later on
const booking = {
  businessArea: '',
  projectNumber: '',
  expectedShipmentDate: '',
  projectManager: '',
  outsourcingManager: '',
  costCenter: '',
  generalComment: '',
  isGmp: false,
  categorization: '',
  shippingTemperature: '',
  grossWeight: '',
  grossWeightUnit: 'kg',
  totalColli: '',
  senderPickupAddress: '',
  senderContactName: '',
  senderContactEmail: '',
  senderContactPhone: '',
  senderVatNumber: '',
  senderPickupReference: '',
  receiverDeliveryAddress: '',
  receiverContactName: '',
  receiverContactEmail: '',
  receiverContactPhone: '',
  receiverVatNumber: '',
  receiverDeliveryReference: '',
  shippingComment: '',
  cargoItems: [
    {
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
  ]
}


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

const bookingForm = ref({
  businessArea: '',
  projectNumber: '',
  expectedShipmentDate: '',
  projectManager: '',
  outsourcingManager: '',
  costCenter: '',
  generalComment: '',
  isGmp: false,
  categorization: '',
  shippingTemperature: '',
  grossWeight: '',
  grossWeightUnit: 'kg',
  totalColli: '',
  senderPickupAddress: '',
  senderContactName: '',
  senderContactEmail: '',
  senderContactPhone: '',
  senderVatNumber: '',
  senderPickupReference: '',
  receiverDeliveryAddress: '',
  receiverContactName: '',
  receiverContactEmail: '',
  receiverContactPhone: '',
  receiverVatNumber: '',
  receiverDeliveryReference: '',
  shippingComment: '',
})


</script>