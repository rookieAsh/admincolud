<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/activityManage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>

      <el-button style="margin: 10px 0 10px ;" type="primary" size="mini" @click="handleUpdate()">新增管理员</el-button>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="ID" prop="address" align="center"></el-table-column>
        <el-table-column label="姓名" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="身份证号码" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="手机号" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="邮箱" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="总资产" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="钱包账户资产" prop="person" align="center"></el-table-column>
        <el-table-column label="挖矿账户资产" prop="person" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="success">禁用</el-button>
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
export default {
  data() {
    return {
      list: [],
      editForm: {},
      editDialogVisible: false,
    };
  },
  created() {},
  mounted: {
    editConfirm() {},
    editDialogClosed() {},
    handleUpdate() {},
  },
};
</script>

<style></style>
