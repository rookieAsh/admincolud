<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/activityManage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>

      <el-button style="margin: 10px 0 10px ;" type="primary" size="mini" @click="showUpdate()">添加一级用户</el-button>

      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column label="序号" type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="用户姓名" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="用户手机号" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="返佣比例" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="返佣总金额" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="返佣人数" prop="person" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="success">修改</el-button>
            <el-button size="small" type="success">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹窗 -->
      <el-dialog title="修改" :visible.sync="editDialogVisible" width="40%" @close="editDialogClosed">
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
      input: '',
    };
  },
  created() {},
  methods: {
    editConfirm() {},
    editDialogClosed() {},
    showUpdate() {},
  },
};
</script>

<style></style>
