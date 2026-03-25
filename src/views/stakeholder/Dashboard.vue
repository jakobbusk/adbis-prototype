<template>
    <StakeholderLayout>
        <template v-slot:plain>
            <div class="mx-auto max-w-375 py-6 px-8 ">

            <div class="flex gap-8">
                <div class="w-1/3 px-6 py-4 theme-surface rounded-xl">
                    <h2 class="text-xl font-semibold mb-2">Notifications</h2>

                </div>

                <div class="w-1/3 px-6 py-4 theme-surface rounded-xl">
                    <h2 class="text-xl font-semibold mb-2">Recent Activity</h2>
                </div>

                <div class="w-1/3 px-6 py-4 theme-surface rounded-xl">
                    <h2 class="text-xl font-semibold mb-2">Upcoming Shipments</h2>
                </div>

            </div>
            </div>
        </template>

    </StakeholderLayout>
</template>

<script setup>
import StakeholderLayout from '@/layouts/StakeholderLayout.vue';


</script>