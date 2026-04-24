<template>
  <label :for="forId" class="relative block text-sm font-medium" :class="labelClass">
    {{ label }}
    <span
      class="ml-1 inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-md font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
      tabindex="0"
      role="button"
      aria-label="Show help"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      @focus="showTooltip = true"
      @blur="showTooltip = false"
    >
      ?
    </span>
    <div
      v-if="showTooltip && tooltip"
      class="absolute z-10 mt-1 w-64 rounded-md bg-gray-700 p-2 text-sm text-white"
    >
      {{ tooltip }}
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  forId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'theme-text',
  },
})

const showTooltip = ref(false)
</script>
