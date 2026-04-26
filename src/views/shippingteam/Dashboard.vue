<template>
    <ShippingLayout>
        <template v-slot:plain>
            <div class="mx-auto max-w-375 py-6 px-8 ">

            <div class="flex gap-8">
                <div class="w-1/2 px-6 py-4 theme-surface rounded-xl">
                    <h2 class="text-xl font-semibold mb-2">Timeline</h2>


                </div>

                <div class="w-1/2 px-6 py-4 theme-surface rounded-xl">
                    <h2 class="text-xl font-semibold mb-2">Upcoming Shipments</h2>
                    <div class="space-y-4">
                        <div class=" theme-surface rounded-md">
                            <div class="text-sm/6 text-gray-900">Shipment #12345</div>
                            <div class="mt-0.5 text-xs/5 text-gray-500">ETA: 2026-06-15</div>
                        </div>
                        <div class=" theme-surface rounded-md">
                            <div class="text-sm/6 text-gray-900">Shipment #67890</div>
                            <div class="mt-0.5 text-xs/5 text-gray-500">ETA: 2026-06-20</div>
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


</script>