<template>
  <v-row justify="center" align="center">
    <v-col cols="11" sm="8" md="8">
      <notion :item="item"></notion>
    </v-col>
  </v-row>
</template>
<script>
import Notion from "../components/Notion";
export default {
  components: { Notion },
  asyncData: async ({ $config, $axios }) => {
    const id = $config.notionID;
    const token = $config.notionPageID;
    const data = await $axios.get(`${$config.BASE_URL}/v1/page/` + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { item: await data.data };
  },
};
</script>
