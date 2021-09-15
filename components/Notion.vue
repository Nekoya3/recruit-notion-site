<template>
  <div class="notion-header">
    <vue-notion-render :unofficial="true" :data="item" class="mt-5" />
  </div>
</template>

<script>
import axios from "axios";
import VueNotionRender from "vue-notion-render";

export default {
  name: "Notion",
  components: {
    VueNotionRender,
  },
  data() {
    return {
      item: {},
    };
  },
  async created() {
    await this.asyncData();
  },
  methods: {
    async asyncData() {
      const id = this.$config.notionID;
      const token = this.$config.notionPageID;
      const data = await axios.get(`${this.$config.BASE_URL}/v1/page/` + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      this.item = await data.data;
    },
  },
};
</script>

<style scoped lang="scss">
.notion-header {
  margin-bottom: 3rem;
}
</style>
