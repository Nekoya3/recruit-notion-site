<template>
  <div class="notion-header">
    <vue-notion-render :unofficial="true" :data="item" class="mt-5" />
  </div>
</template>

<script>
import VueNotionRender from "vue-notion-render";

export default {
  name: "Notion",
  components: {
    VueNotionRender,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.notion-header {
  margin-bottom: 3rem;
}
</style>
