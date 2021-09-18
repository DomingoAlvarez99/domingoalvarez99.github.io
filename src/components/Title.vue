<template>
  <div></div>
</template>
<script>
export default {
  name: 'Title',
  props: ['value'],
  watch: {
    value: {
      immediate: true,
      handler() {
        document.title = this.value;
      },
    },
  },
};
</script>
