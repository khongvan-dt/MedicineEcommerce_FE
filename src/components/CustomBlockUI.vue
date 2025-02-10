<template>
  <BlockUI :blocked="blocked" class="h-full" :style="{ backgroundColor: bgColor }">
    <ProgressSpinner v-if="blocked"
      style="width: 60px; height: 60px; position: absolute; top: calc(50% - 30px); right: calc(50% - 30px); z-index: 10000" />
    <slot />
  </BlockUI>
</template>

<script>
export default {
  props: {
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bgColor: 'rgba(0,0,0, 0.01) !important'
    }
  }
};
</script>
