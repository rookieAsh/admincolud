<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/assetManage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>资产管理</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 查询部分 -->
      <div class="search">
        <div class="item">姓名</div>
        <div><el-input v-model="input" placeholder="请输入姓名"></el-input></div>
        <div class="item">手机号</div>
        <div><el-input v-model="input" placeholder="请输入手机号"></el-input></div>
        <div class="item">邮箱</div>
        <div><el-input v-model="input" placeholder="请输入邮箱"></el-input></div>
        <div class="item"><el-button type="primary" size="small">查询</el-button></div>
      </div>

      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="ID" prop="address" align="center"></el-table-column>
        <el-table-column label="用户姓名" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="用户手机号" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="用户邮箱" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="总资产" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="钱包账户资产" prop="person" align="center"></el-table-column>
        <el-table-column label="挖矿账户资产" prop="person" align="center"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      editForm: {},
      editDialogVisible: false,
    };
  },
  created() {},
  methods: {
    editConfirm() {},
  },
};
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item {
  margin: 20px 20px;
}
</style>
