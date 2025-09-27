<template>
  <button
    :type="type"
    class="px-4 py-2 rounded-xl font-semibold transition border bg-primary text-white hover:opacity-90 disabled:opacity-50"
    :class="{ 'bg-white text-primary border': variant === 'secondary' }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button'|'submit'|'reset',
  variant?: 'primary'|'secondary',
  disabled?: boolean
}>()
</script>
