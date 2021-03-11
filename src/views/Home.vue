<template>
  <el-container class="home-container">
    <el-aside width="200px">
      <el-menu
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        unique-opened
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <!-- 一级菜单 -->
        <el-menu-item :index="item.id + ''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单的模板区域 -->
          <template slot="title">
            <!-- 图标 -->
            <i :class="item.icon"></i>
            <!-- 文本 -->
            <span>{{ item.authName }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 50px">
        <el-button size="mini" type="danger" @click="logout" style="position: absolute; right: 40px; top: 10px"
          >退出</el-button
        >
      </el-header>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        address: 'test1',
      },
      isCollapse: false,
      menulist: [
        // { authName: '首页', id: 'userinfo', icon: 'el-icon-s-home' },
        // { authName: '会员信息', id: 'home1', icon: 'el-icon-s-custom' },
        // { authName: '合伙人管理', id: 'user1', icon: 'el-icon-user-solid' },
        // { authName: '理财产品展示', id: 'wealthAll', icon: 'el-icon-menu' },
        // { authName: '闪兑记录展示', id: 'exchangeTail', icon: 'el-icon-menu' },
        // { authName: '公告栏管理', id: 'quantization', icon: 'el-icon-s-claim' },
        // { authName: '量化管理', id: 'lianghua', icon: 'el-icon-s-finance' },
        // { authName: '审核管理', id: 'check', icon: 'el-icon-s-order' },
        // { authName: '转入列表', id: 'in', icon: 'el-icon-s-fold' },
        // { authName: '转出列表', id: 'out', icon: 'el-icon-s-unfold' },

        // 新模块
        { authName: '用户管理', id: 'userManage', icon: 'el-icon-menu' },
        { authName: '资产流水', id: 'assetWater', icon: 'el-icon-menu' },
        { authName: '商品管理', id: 'goodsManage', icon: 'el-icon-menu' },
        { authName: '订单管理', id: 'orderManage', icon: 'el-icon-menu' },
        { authName: '资产管理', id: 'assetManage', icon: 'el-icon-menu' },
        { authName: '活动管理', id: 'activityManage', icon: 'el-icon-menu' },
        { authName: '权限管理', id: 'permissionManage', icon: 'el-icon-menu' },
      ],
      address: '',
    };
  },
  created() {},
  methods: {
    logout() {
      this.$router.push('/login');
      window.sessionStorage.removeItem('token');
    },
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #304156;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  position: fixed;
  height: 100vh;
  background-color: #304156;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
  margin-left: 200px;
  height: 100vh;
}

.iconfont {
  margin-right: 10px;
}

.outBut {
  position: absolute;
  right: 40px;
}
.el-menu-item {
  border-bottom: 1px solid rgba(238, 238, 238, 0.1);
}
.el-header {
  border-bottom: 1px solid #e5e5e5;
  line-height: 50px;
  position: fixed;
  left: 200px;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  -webkit-transition: left 0.25s;
  transition: left 0.25s;
}
li {
  list-style: none;
}
</style>
