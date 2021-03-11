<template>
  <div class="">
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>转出列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="交易序号" prop="number" align="center"></el-table-column>
        <el-table-column label="交易金额" prop="jymoney" align="center"></el-table-column>
        <el-table-column label="用户账号" prop="address" align="center"></el-table-column>
        <el-table-column label="用户钱包地址" prop="addressKey" align="center"></el-table-column>
        <el-table-column label="转出状态" prop="zt" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.zt === 0">成功</span>
            <span v-if="scope.row.zt === 1">失败</span>
          </template>
        </el-table-column>
        <el-table-column label="交易时间" prop="jysj" align="center"> </el-table-column>
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
  methods: {
    async out() {
      const { data: res } = await api.out();
      this.list = res.data;
      console.log(res, 'c');
    },
  },
  created() {
    this.out();
  },
};
</script>
<style lang="scss" scoped></style>
