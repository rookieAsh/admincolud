<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/wealthAll' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>理财产品展示</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <!-- <el-button style="margin: 10px 0 10px ;" type="primary" size="mini" @click="showUpdate()"
        >添加</el-button> -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="用户账号" prop="address" align="center"></el-table-column>
        <el-table-column label="购买金额" prop="buymoney" align="center"></el-table-column>
        <el-table-column label="分红时间" prop="fenhongtime" align="center"></el-table-column>
        <el-table-column label="理财产品名称" prop="name" align="center"></el-table-column>
        <el-table-column label="年利率" prop="year" align="center"></el-table-column>
        <el-table-column label="分红周期" prop="month" align="center"></el-table-column>
        <!-- <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="warning" icon="el-icon-edit" size="mini" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column> -->
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
      const { data: res } = await api.fetchAllWealth();
      this.list = res.data;
      console.log(res);
    },
    // async handleDelete(row) {
    //   const params = {
    //     id: this.row.id,
    //   };
    //   const { data: res } = await api.fetchAllWealth(params);
    //   console.log(res);
    // },

    // async edit7() {
    //   const params = {
    //     cmcMonth: this.editForm.cmcMonth,
    //     id: this.editForm.id,
    //   };
    //   const { data: res } = await api.edit7(params);
    //   console.log(res);
    //   if (res.state == 0) {
    //     this.$message.success('修改成功');
    //     this.editDialogVisible = false;
    //   } else {
    //     this.$message.error('修改失败');
    //   }
    // },
    // async edit8() {
    //   const params = {
    //     startmoney: this.editForm.startmoney,
    //     id: this.editForm.id,
    //   };
    //   const { data: res } = await api.edit8(params);
    //   console.log(res);
    // },
    // async edit10() {
    //   const params = {
    //     cmcYear: this.editForm.cmcYear,
    //     id: this.editForm.id,
    //   };
    //   const { data: res } = await api.edit10(params);
    //   console.log(res);
    // },
    // async edit11() {
    //   const params = {
    //     zt: this.editForm.zt,
    //     id: this.editForm.id,
    //   };
    //   const { data: res } = await api.edit11(params);
    //   console.log(res);
    // },
    // editConfirm() {
    //   this.edit7();
    //   this.edit8();
    //   this.edit10();
    //   this.edit11();
    // },
    // editDialogClosed() {
    //   this.$refs.editFormRef.resetFields();
    //   this.initLianghua();
    // },
    // editDialogClosed1() {
    //   this.$refs.editFormRef.resetFields();
    //   this.initLianghua();
    // },

    // async insertWealthUpdate() {
    //   const params = {
    //     cmcMonth: this.editFormAdd.cmcMonth,
    //     cmcYear: this.editFormAdd.cmcYear,
    //     startmoney: this.editFormAdd.startmoney,
    //     cmcName: this.editFormAdd.cmcName,
    //     subtitle: this.editFormAdd.subtitle,
    //     zt: this.editFormAdd.zt,
    //     num: this.editFormAdd.num,
    //   };
    //   const { data: res } = await api.insertWealthUpdate(params);
    //   console.log(21313123213213, res);
    //   if (res.state == 0) {
    //     this.$message.success('新增成功');
    //     this.editDialogVisible1 = false;
    //     this.initLianghua();
    //   } else {

    //     this.$message.error('新增失败');
    //   }
    // },
    // handleDelete(row) {
    //   this.editForm = row;
    //   console.log(this.editForm);
    // },
    // showUpdate(row) {
    //   // this.editForm = row;
    //   this.editDialogVisible1 = true;
    // },
    // // 新增理财产品确定
    // editConfirm1() {
    //   this.insertWealthUpdate();
    //   this.editDialogVisible1 = false;
    // },
  },
};
</script>
<style lang="scss" scoped></style>
