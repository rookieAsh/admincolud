<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/orderManage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="search">
        <div class="item">订单号</div>
        <div><el-input v-model="input" placeholder="请输入姓名"></el-input></div>
        <div class="item">姓名</div>
        <div><el-input v-model="input" placeholder="请输入手机号"></el-input></div>
        <div class="item">手机号</div>
        <div><el-input v-model="input" placeholder="请输入手机号"></el-input></div>
        <div class="item">身份证号</div>
        <div><el-input v-model="input" placeholder="请输入身份证号"></el-input></div>
        <div class="item"><el-button type="primary" size="small">查询</el-button></div>
      </div>

      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="ID" prop="address" align="center"></el-table-column>
        <el-table-column label="订单号" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="产品名称" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="买家姓名" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="买家手机号" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="买家身份证" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="购买时间" prop="person" align="center"></el-table-column>
        <el-table-column label="购买数量" prop="person" align="center"></el-table-column>
        <el-table-column label="订单总价" prop="person" align="center"></el-table-column>
        <el-table-column label="手续费" prop="person" align="center"></el-table-column>
        <el-table-column label="订单状态" prop="person" align="center"></el-table-column>
        <el-table-column label="备注" prop="person" align="center"></el-table-column>
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
