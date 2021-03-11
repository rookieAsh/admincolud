<template>
  <div class>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/userinfo' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="用户账号" prop="address" align="center"></el-table-column>
        <el-table-column label="邀请码" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="用户钱包地址" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="FUTC" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="USDT" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="福豆" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="邀请人数" prop="person" align="center"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import api from '../model/index';
import qs from 'qs';
export default {
  data() {
    return {
      options: [
        {
          value: 0,
          label: '无',
        },
        {
          value: 1,
          label: '创世合伙人',
        },
        {
          value: 2,
          label: '城市合伙人',
        },
      ],
      title: '修改合伙人状态',
      title1: '修改合伙人提成比例',
      title2: '修改邀请奖励',
      list: [],
      editForm: {},
      editDialogVisible: false,
      editDialogVisible1: false,
      editDialogVisible2: false,
      editFormRules: {
        zt: [
          {
            required: true,
            message: '请输入合伙人状态',
            trigger: 'blur',
          },
        ],
        awardlilv: [
          {
            required: true,
            message: '请输入提成比例',
            trigger: 'blur',
          },
        ],
        award: [
          {
            required: true,
            message: '请输入邀请金额',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  created() {
    this.initUserAll();
  },
  methods: {
    async initUserAll() {
      const { data: res } = await api.getInitUserAll();
      this.list = res.data;
      console.log('1111111', res);
    },
  },
};
</script>
<style lang="scss" scoped>
// .btn {
//   display: inline-block;
//   height: 28px;
//   margin-right: 10px;
//   padding-right: 5px;
//   padding-left: 5px;
//   text-align: center;
//   line-height: 28px;
//   background: #e6a23c;
//   color: #fff;
//   border-radius: 4px;
//   &:hover {
//     cursor: pointer;
//     background: rgb(182, 136, 68);
//   }
// }
// .footer {
//   height: 53px;
//   position: relative;
// }
// .el-input {
//   max-width: 220px;
// }
</style>
