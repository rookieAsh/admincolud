<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>会员信息</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <h4 style="margin-bottom:10px;">平台总USDT数: {{ total }}</h4>
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="币种" prop="bizhong" align="center"></el-table-column>
        <el-table-column label="USDT转出比例" prop="service_charge" align="center"></el-table-column>
        <el-table-column label="USDT-FUCT兑换率" prop="USDT-FUTC" align="center"></el-table-column>
        <el-table-column label="USDT转出最小值" align="center">
          <template slot-scope="scope"> {{ scope.row.minMoney }} USDT </template>
        </el-table-column>
        <el-table-column label="FUTC-USDT兑换率" prop="FUTC-USDT" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template v-slot="scope">
            <div class="btn" @click="showEdit(scope.row)"><i class="el-icon-edit"></i> 编辑</div>
            <!-- <el-button
              type="warning"
              icon="el-icon-edit"
              size="mini"
              @click="showEdit(scope.row)"
            >编辑</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <!-- 修改矿机的对话框 -->
      <el-dialog title="修改" :visible.sync="editDialogVisible" width="30%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="150px" label-position="left">
          <el-form-item label="USDT转出比例" prop="service_charge">
            <el-input v-model="editForm.service_charge"></el-input>
          </el-form-item>
          <el-form-item label="USDT-FUCT兑换率" prop="USDT_FUTC">
            <el-input v-model="editForm.USDT_FUTC"></el-input>
          </el-form-item>
          <el-form-item label="USDT转出最小值" prop="minMoney">
            <el-input v-model="editForm.minMoney"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <div class="footer">
          <el-button @click="editDialogVisible = false" style="right:100px;">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </div>
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>-->
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
import api from '../model/index';
import qs from 'qs';
export default {
  data() {
    return {
      total: 0,
      list: [],
      editForm: {},
      editDialogVisible: false,
      editFormRules: {
        service_charge: [{ required: true, message: '请输入转出比例', trigger: 'blur' }],
        USDT_FUTC: [{ required: true, message: '请输入兑换比例', trigger: 'blur' }],
        minMoney: [{ required: true, message: '请输入转出最小金额', trigger: 'blur' }],
      },
    };
  },
  created() {
    this.init();
    this.count();
  },
  methods: {
    async count() {
      const { data: res } = await api.count();
      this.total = res.state;
      console.log(res, 'c');
    },
    editConfirm() {
      this.edit1();
      this.edit2();
      this.edit3();
    },
    async edit1() {
      const params = { minMoney: this.editForm.minMoney, id: this.editForm.id };
      const { data: res } = await api.edit1(params);
      console.log(res);
      if (res.state == 0) {
      } else {
        this.$message.error('修改失败');
      }
    },
    async edit2() {
      const params = { usdt_futc: this.editForm.USDT_FUTC, id: this.editForm.id };
      const { data: res } = await api.edit2(params);
      console.log(res);
      if (res.state == 0) {
      } else {
        this.$message.error('修改失败');
      }
    },
    async edit3() {
      const params = { service_charge: this.editForm.service_charge, id: this.editForm.id };
      const { data: res } = await api.edit3(params);
      console.log(res);
      if (res.state == 0) {
        this.$message.success('修改成功');
        this.editDialogVisible = false;
        this.init();
      } else {
        this.$message.error('修改失败');
      }
    },
    editDialogClosed() {
      this.init();
    },
    async init() {
      const { data: res } = await api.getInit();
      this.list = res.data;
      console.log(res);
    },
    showEdit(row) {
      this.editForm = row;
      console.log(row);
      this.editDialogVisible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  margin: 0 auto;
  width: 73px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  background: #e6a23c;
  color: #fff;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: rgb(182, 136, 68);
  }
}
.footer {
  height: 53px;
  position: relative;
}
</style>
