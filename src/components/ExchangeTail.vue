<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/wealthAll' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>闪兑记录</el-breadcrumb-item>
      </el-breadcrumb>

      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="用户账号" prop="address" align="center"></el-table-column>
        <el-table-column label="闪兑兑换币种" prop="changeName" align="center"></el-table-column>
        <el-table-column label="闪兑金额" prop="exangeMoney" align="center"></el-table-column>
        <el-table-column label="USDT余额" prop="usdtBalance" align="center"></el-table-column>
        <el-table-column label="FUTC余额" prop="fundBalance" align="center"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import api from '../model/index';

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.feachDate();
  },
  methods: {
    async feachDate() {
      const { data: res } = await api.apiFetchExchangeTail();
      this.list = res.data;
      console.log('1111', res);
    },
  },
};
</script>
<style lang="scss" scoped></style>
