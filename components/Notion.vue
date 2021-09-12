<template>
  <div>
    <vue-notion-render :unofficial="true" :data="item" />
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
      const data = await axios.get("https://notion-api.splitbee.io/v1/page/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      this.item = await data.data;
      return {
        ITEM: data,
      };
    },
  },
};
</script>

<style scoped></style>
