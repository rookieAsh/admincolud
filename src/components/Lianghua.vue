<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>量化管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-button style="margin: 10px 0 10px ;" type="primary" icon="el-icon-plus" size="mini" @click="showUpdate()"
        >新增</el-button
      >
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="理财产品名称" prop="cmcName" align="center"></el-table-column>
        <el-table-column label="理财产品描述" prop="subtitle" align="center"></el-table-column>
        <el-table-column label="理财周期（月）" prop="cmcMonth" align="center"></el-table-column>
        <el-table-column label="最小购买金额" prop="startmoney" align="center"></el-table-column>
        <el-table-column label="年利率" prop="cmcYear" align="center"></el-table-column>
        <el-table-column label="理财状态" prop="zt" align="center"></el-table-column>
        <el-table-column label="理财总量" prop="cmcNum" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="200px">
          <template slot-scope="scope">
            <el-button type="warning" icon="el-icon-edit" size="mini" @click="showEdit(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-edit" size="mini" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 修改矿机的对话框 -->
      <el-dialog title="修改" :visible.sync="editDialogVisible" width="30%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="121px">
          <el-form-item label="理财周期" prop="cmcMonth">
            <el-input v-model="editForm.cmcMonth"></el-input>
          </el-form-item>
          <el-form-item label="最小购买金额" prop="startmoney" width="200px">
            <el-input v-model="editForm.startmoney"></el-input>
          </el-form-item>
          <el-form-item label="年利率" prop="cmcYear" width="200px">
            <el-input v-model="editForm.cmcYear"></el-input>
          </el-form-item>
          <el-form-item label="理财状态" prop="zt" width="200px">
            <el-input v-model="editForm.zt"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false" style="right:100px;">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 添加 -->
      <el-dialog title="添加" :visible.sync="editDialogVisible1" width="30%" @close="editDialogClosed1">
        <!-- 内容主体区域 -->
        <el-form :model="editFormAdd" :rules="editFormRules" ref="editFormRef1" label-width="121px">
          <el-form-item label="理财周期" prop="cmcMonth">
            <el-input v-model="editFormAdd.cmcMonth"></el-input>
          </el-form-item>
          <el-form-item label="最小购买金额" prop="startmoney" width="200px">
            <el-input v-model="editFormAdd.startmoney"></el-input>
          </el-form-item>
          <el-form-item label="年利率" prop="cmcYear" width="200px">
            <el-input v-model="editFormAdd.cmcYear"></el-input>
          </el-form-item>
          <el-form-item label="理财状态" prop="zt" width="200px">
            <el-input v-model="editFormAdd.zt"></el-input>
          </el-form-item>
          <el-form-item label="理财描述" prop="subtitle" width="200px">
            <el-input v-model="editFormAdd.subtitle"></el-input>
          </el-form-item>
          <el-form-item label="理财名称" prop="cmcName" width="200px">
            <el-input v-model="editFormAdd.cmcName"></el-input>
          </el-form-item>
          <el-form-item label="理财总量" prop="num" width="200px">
            <el-input v-model="editFormAdd.num"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible1 = false" style="right:100px;">取 消</el-button>
          <el-button type="primary" @click="editConfirm1">确 定</el-button>
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
      list: [],
      editForm: {},
      editFormAdd: {
        cmcMonth: '',
        cmcYear: '',
        startmoney: '',
        cmcName: '',
        subtitle: '',
        zt: '',
        num: '',
      },
      editDialogVisible: false,
      editDialogVisible1: false,
      // editFormRules: {
      //   cmcMonth: [{ required: true, message: '请输入理财周期', trigger: 'blur' }],
      //   startmoney: [{ required: true, message: '请输入最小购买金额', trigger: 'blur' }],
      //   cmcYear: [{ required: true, message: '请输入年利率', trigger: 'blur' }],
      //   zt: [{ required: true, message: '请输入发行状态(0是发行中；1是售罄)', trigger: 'blur' }],
      // },

      editFormRules: {
        cmcMonth: [{ required: true, message: '请输入理财周期', trigger: 'blur' }],
        startmoney: [{ required: true, message: '请输入最小购买金额', trigger: 'blur' }],
        cmcYear: [{ required: true, message: '请输入年利率(百分比%)', trigger: 'blur' }],
        cmcName: [{ required: true, message: '请输入理财名称', trigger: 'blur' }],
        subtitle: [{ required: true, message: '请输入理财描述', trigger: 'blur' }],
        zt: [{ required: true, message: '请输入发行状态(0是发行中；1是售罄)', trigger: 'blur' }],
        num: [{ required: true, message: '请输入理财总量', trigger: 'blur' }],
      },
    };
  },
  created() {
    this.initLianghua();
  },
  methods: {
    async edit7() {
      const params = {
        cmcMonth: this.editForm.cmcMonth,
        id: this.editForm.id,
      };
      const { data: res } = await api.edit7(params);
      console.log(res);
      if (res.state == 0) {
        this.$message.success('修改成功');
        this.editDialogVisible = false;
      } else {
        this.$message.error('修改失败');
      }
    },
    async edit8() {
      const params = {
        startmoney: this.editForm.startmoney,
        id: this.editForm.id,
      };
      const { data: res } = await api.edit8(params);
      console.log(res);
    },
    async edit10() {
      const params = {
        cmcYear: this.editForm.cmcYear,
        id: this.editForm.id,
      };
      const { data: res } = await api.edit10(params);
      console.log(res);
    },
    async edit11() {
      const params = {
        zt: this.editForm.zt,
        id: this.editForm.id,
      };
      const { data: res } = await api.edit11(params);
      console.log(res);
    },
    editConfirm() {
      this.edit7();
      this.edit8();
      this.edit10();
      this.edit11();
    },
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
      this.initLianghua();
    },
    editDialogClosed1() {
      this.$refs.editFormRef1.resetFields();
      this.initLianghua();
    },
    async initLianghua() {
      const { data: res } = await api.getInitLianghua();
      this.list = res.data;
      console.log('list', res);
    },
    async insertWealthUpdate() {
      const params = {
        cmcMonth: this.editFormAdd.cmcMonth,
        cmcYear: this.editFormAdd.cmcYear,
        startmoney: this.editFormAdd.startmoney,
        cmcName: this.editFormAdd.cmcName,
        subtitle: this.editFormAdd.subtitle,
        zt: this.editFormAdd.zt,
        num: this.editFormAdd.num,
      };
      const { data: res } = await api.insertWealthUpdate(params);
      if (res.state == 0) {
        this.$message.success('新增成功');
        this.editDialogVisible1 = false;
        this.initLianghua();
      } else {
        this.$message.error('新增失败');
      }
    },
    showEdit(row) {
      this.editForm = row;
      this.editDialogVisible = true;
    },
    showUpdate(row) {
      this.editDialogVisible1 = true;
    },
    // 新增理财产品确定
    editConfirm1() {
      this.$refs.editFormRef1.validate((valid) => {
        if (valid) {
          this.insertWealthUpdate();
          this.editDialogVisible1 = false;
        }
      });
    },
    async handleDelete(mid) {
      const params = {
        id: mid,
      };
      console.log(params);
      const confirmInfo = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch((err) => err);
      console.log(confirmInfo);
      if (confirmInfo !== 'confirm') {
        return this.$message.info('已取消删除');
      }
      const { data: res } = await api.apiDeleteWealth(params);
      console.log(res);
      if (res.state == 0) {
        this.$message.success('删除成功');
        this.initLianghua();
      } else {
        this.$message.error('删除失败');
      }
      // .then((res) => {
      //   this.$message.success('删除成功');
      //   this.initLianghua();
      // })
      // .catch((err) => {
      //   return this.$message.error('删除失败');
      // });
    },
  },
};
</script>
<style lang="scss" scoped></style>
