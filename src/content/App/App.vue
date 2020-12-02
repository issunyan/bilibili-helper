<template>
  <div class="main" v-show="show" style="">
    <el-button class="open" @click="visible = true">
      点我打开
    </el-button>
    <el-dialog title="下载视频" :visible.sync="visible">
      <el-button @click="download">
        下载
      </el-button>
    </el-dialog>
  </div>
</template>

<script>
import Ajax from '@/utils/ajax';

export default {
  name: 'App',
  components: {},

  data() {
    return {
      customData: {},
      visible: false,
      show: false,
    };
  },

  computed: {},
  mounted() {
    window.addEventListener(
      'message',
      e => {
        if (e.origin === 'https://www.bilibili.com') {
          this.customData = e.data;
          this.$nextTick(() => {
            this.show = true;
            console.log(2323233);
          });
        }
      },
      false,
    );
  },
  methods: {
    async download() {
      const { aid, cid } = this.customData;
      const quality = 80;
      const url = `https://api.bilibili.com/x/player/playurl?avid=${aid}&cid=${cid}&qn=${quality}&otype=json`;
      const text = await Ajax.getTextWithCredentials(url);
      const json = JSON.parse(text.replace(/http:/g, 'https:'));
      const data = json.data || json.result || json;
      const urls = data.durl;
      // const fragments = urls.map((it) => {
      //   return {
      //     length: it.length,
      //     size: it.size,
      //     url: it.url,
      //     backupUrls: it.backup_url,
      //   };
      // });
      const downloadURL = urls[0].url;
      window.location.href = downloadURL;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 50vh;
  left: 0;
  z-index: 100000;
}
</style>
