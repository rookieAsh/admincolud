<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/usermanage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 查询部分 -->
      <div class="search">
        <div class="item">姓名</div>
        <div><el-input v-model="searchPreams.name" placeholder="请输入姓名"></el-input></div>
        <div class="item">手机号</div>
        <div><el-input v-model="input" placeholder="请输入手机号"></el-input></div>
        <div class="item">邮箱</div>
        <div><el-input v-model="input" placeholder="请输入邮箱"></el-input></div>
        <div class="item"><el-button type="primary" size="small" @click="handleSeach">查询</el-button></div>
      </div>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column type="index" label="序号" width="50px" align="center"></el-table-column>
        <el-table-column label="ID" prop="id" align="center"></el-table-column>
        <el-table-column label="姓名" prop="name" align="center"></el-table-column>
        <el-table-column label="身份证号码" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="手机号" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="邮箱" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="总资产" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="钱包账户资产" prop="person" align="center"></el-table-column>
        <el-table-column label="挖矿账户资产" prop="person" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="warning">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹窗 -->
      <el-dialog title="编辑修改" :visible.sync="editDialogVisible" width="40%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="award" label-width="121px">
          <el-form-item label="姓名" prop="award" width="200px">
            <el-input v-model="editForm.award"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="award" width="200px">
            <el-input v-model="editForm.award"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="award" width="200px">
            <el-input v-model="editForm.award"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import api from '../model/index';
export default {
  data() {
    return {
      searchPreams: {
        name: '',
      },
      list: [],
      input: '',
      editForm: {},
      editDialogVisible: false,
      editFormRules: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // await api.apiUserManagePage().then((res) => console.log(res));
      const { data: res } = await api.apiUserManagePage();
      console.log(res);
      this.list = res.data;
    },
    async handleSeach() {
      const preams = { name: this.searchPreams.name };
      const { data: res } = await api.apiUserManageById(preams);
      console.log('resres...' + res);
    },
    editConfirm() {},
    editDialogClosed() {},
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
