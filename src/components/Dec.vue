<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/dec' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公告栏管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="福豆描述" name="first">
        <h3>福豆描述</h3>

          <Editor :flag="flag1"></Editor>
        </el-tab-pane>
        <el-tab-pane label="合伙人描述" name="second">
        <h3>合伙人描述</h3>

          <Editor :flag="flag2"></Editor>
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="third">
        <h3>关于我们</h3>
          <Editor :flag="flag3"></Editor>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import Editor from "./Editor.vue";
export default {
  components: {
    Editor
  },
  data() {
    return {
      activeName: "first",
      flag1: 1,
      flag2: 0,
      flag3: 0
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
      if (tab.name === "first") {
        (this.flag1 = 1), (this.flag2 = 0), (this.flag3 = 0);
      }
      if (tab.name === "second") {
        (this.flag1 = 0), (this.flag2 = 2), (this.flag3 = 0);
      }
      if (tab.name === "third") {
        (this.flag1 = 1), (this.flag2 = 0), (this.flag3 = 0);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
