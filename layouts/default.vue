<template>
  <v-app>
    <v-app-bar fixed app color="white">
      <v-app-bar-title class="header">
        <a href="https://www.code4japan.org" rel="noreferrer">
          <v-img class="logo" contain width="13rem" :src="logo_image"></v-img>
        </a>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main app>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer padless class="link-footer">
      <v-container>
        <v-row>
          <v-col v-for="(footer_item, key) in footer_main_items" :key="key" cols="6" md="4" lg="3">
            <p>
              <a :href="footer_item.link">{{ footer_item.text }}</a>
            </p>
            <div v-for="(item, index) in footer_item.items" :key="index" class="item">
              <a :href="item.link">{{ item.text }}</a>
            </div>
          </v-col>
          <v-col cols="6" md="4" lg="3">
            <div v-for="(footer_item, key) in footer_sub_items" :key="key">
              <p>
                <a :href="footer_item.link">{{ footer_item.text }}</a>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <v-footer color="black">
      <v-container class="pa-0">
        <v-row align="center" class="ma-auto">
          <v-col cols="12" md="6" :class="`${$vuetify.breakpoint.xs ? 'text-center' : 'text-left'}`">
            <small class="grey--text">©︎ Code for Japan</small>
          </v-col>
          <v-col cols="12" md="6">
            <v-row :justify="`${$vuetify.breakpoint.xs ? 'center' : 'end'}`">
              <div v-for="(item, key) in footer_icons" :key="key" class="pa-1">
                <a :href="item.link" target="_blank" rel="noreferrer" class="pl-3">
                  <font-awesome-icon :icon="['fab', item.icon]" color="grey" size="lg"></font-awesome-icon>
                </a>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      logo_image: require("@/assets/images/codeforjapan_logo.svg"),
      footer_main_items: [
        {
          text: "個人向け活動",
          link: "https://www.code4japan.org/forpeople",
          items: [
            { text: "OPEN EATS JAPAN", link: "https://www.code4japan.org/activity/open_eats_japan" },
            { text: "Code for japan Summit", link: "https://www.code4japan.org/activity/summit" },
            { text: "ソーシャルハックデー", link: "https://www.code4japan.org/activity/socialhackday" },
            { text: "シビックテックライブ", link: "https://www.code4japan.org/activity/civictechlive" },
            { text: "Slack コミュニティ", link: "https://www.code4japan.org/activity/community" },
            { text: "ソーシャルテクノロジーオフィサー", link: "https://www.code4japan.org/activity/sto" },
            { text: "フェローシップ", link: "https://www.code4japan.org/activity/fellowship" },
          ],
        },
        {
          text: "行政向け活動",
          link: "https://www.code4japan.org/forgovernments",
          items: [
            {
              text: "新型コロナウイルス感染症対策のためのデータ公開支援",
              link: "https://www.code4japan.org/activity/stopcovid19",
            },
            { text: "行政職員向け ICT体験型セミナー", link: "https://www.code4japan.org/activity/sunabar" },
            { text: "データアカデミー", link: "https://www.code4japan.org/activity/stopcovid19" },
            { text: "地域フィールドラボ", link: "https://www.code4japan.org/activity/fieldlab" },
            { text: "GovTechサポートプログラム", link: "https://www.code4japan.org/activity/govtech" },
          ],
        },
        {
          text: "企業向け活動",
          link: "https://www.code4japan.org/forcompanies",
          items: [
            { text: "地域フィールドラボ", link: "https://www.code4japan.org/activity/fieldlab2" },
            { text: "協賛のお願い", link: "https://www.code4japan.org/activity/partner" },
          ],
        },
      ],
      footer_sub_items: [
        {
          text: "ブリゲード",
          link: "https://www.code4japan.org/brigade",
        },
        {
          text: "団体概要",
          link: "https://www.code4japan.org/aboutus2",
        },
        {
          text: "ニュース",
          link: "https://www.code4japan.org/news",
        },
        {
          text: "プライバシーポリシー",
          link: "https://www.code4japan.org/privacy-policy",
        },
        {
          text: "Code of Conduct",
          link: "https://www.code4japan.org/codeofconduct",
        },
      ],
      footer_icons: [
        { icon: "facebook-f", link: "https://www.facebook.com/code4japan" },
        { icon: "twitter", link: "https://twitter.com/codeforjapan" },
        { icon: "flickr", link: "http://www.flickr.com/photos/codeforjapan/" },
        { icon: "youtube", link: "https://www.youtube.com/user/codeforJP" },
        { icon: "github", link: "https://github.com/codeforjapan" },
        { icon: "slack-hash", link: "https://cfjslackin.herokuapp.com/" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.v-application {
  font-family: "Montserrat", "游ゴシック", YuGothic, "Noto Sans JP", sans-serif !important;
}

.header {
  padding: 15px 3%;
}
.link-footer {
  background-color: #202020 !important;
  color: #9b9b9b !important;
  font-size: 0.8rem;

  .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .item {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  a {
    color: #9b9b9b;
    text-decoration: none;
  }

  p {
    font-weight: bold;
    a {
      color: white !important;
      text-decoration: none;
    }

    margin-bottom: 0.5rem;
  }
}
</style>
