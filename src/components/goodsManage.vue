<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/goodsManage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button style="margin: 10px 10px ;" type="primary" size="small" @click="handleUpdate()">新增</el-button>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column label="序号" type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="ID" prop="gsId" align="center"></el-table-column>
        <el-table-column label="商品名称" prop="gsName" align="center"></el-table-column>
        <el-table-column label="单价" prop="unitPrice" align="center"></el-table-column>
        <el-table-column label="活动价" prop="activityPrice" align="center"></el-table-column>
        <el-table-column label="矿机费用" prop="millCost" align="center"></el-table-column>
        <el-table-column label="电费" prop="electricCharge" align="center"></el-table-column>
        <el-table-column label="预计日产出" prop="expeDailyProd" align="center"></el-table-column>
        <el-table-column label="算力" prop="hashrate" align="center"></el-table-column>
        <el-table-column label="功耗" prop="powerDiss" align="center"></el-table-column>
        <el-table-column label="运维费" prop="operaCost" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="250px">
          <template slot-scope="scope">
            <el-button size="small" type="warning" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="warning">上架</el-button>
            <el-button size="small" type="warning">下架</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹窗 -->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="40%" @close="dialogClosed()">
        <!-- 内容主体区域 -->
        <el-form :model="creatForm" :rules="formRules" ref="formRuleRef" label-width="121px">
          <el-form-item label="商品名称：" prop="gsName" width="200px">
            <el-input v-model="creatForm.gsName"></el-input>
          </el-form-item>
          <el-form-item label="单价：" prop="unitPrice" width="200px">
            <el-input v-model="creatForm.unitPrice"></el-input>
          </el-form-item>
          <el-form-item label="活动价：" prop="activityPrice" width="200px">
            <el-input v-model="creatForm.activityPrice"></el-input>
          </el-form-item>
          <el-form-item label="矿机费用：" prop="millCost" width="200px">
            <el-input v-model="creatForm.millCost"></el-input>
          </el-form-item>
          <el-form-item label="电费：" prop="electricCharge" width="200px">
            <el-input v-model="creatForm.electricCharge"></el-input>
          </el-form-item>
          <el-form-item label="预计日产出：" prop="expeDailyProd" width="200px">
            <el-input v-model="creatForm.expeDailyProd"></el-input>
          </el-form-item>
          <el-form-item label="算力：" prop="hashrate" width="200px">
            <el-input v-model="creatForm.hashrate"></el-input>
          </el-form-item>
          <el-form-item label="功耗：" prop="powerDiss" width="200px">
            <el-input v-model="creatForm.powerDiss"></el-input>
          </el-form-item>
          <el-form-item label="运维费：" prop="operaCost" width="200px">
            <el-input v-model="creatForm.operaCost"></el-input>
          </el-form-item>
          <el-form-item label="状态：" prop="state" width="200px">
            <el-input v-model="creatForm.state"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handelConfirm()">确 定</el-button>
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
      creatForm: {},
      formRules: {},
      formRules: {
        gsName: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        unitPrice: [{ required: true, message: '请输入单价', trigger: 'blur' }],
        activityPrice: [{ required: true, message: '请输入活动价', trigger: 'blur' }],
        millCost: [{ required: true, message: '请输入矿机费用', trigger: 'blur' }],
        electricCharge: [{ required: true, message: '请输入电费', trigger: 'blur' }],
        expeDailyProd: [{ required: true, message: '请输入预计日产出', trigger: 'blur' }],
        hashrate: [{ required: true, message: '请输入算力', trigger: 'blur' }],
        powerDiss: [{ required: true, message: '请输入功耗', trigger: 'blur' }],
        operaCost: [{ required: true, message: '请输入运维费', trigger: 'blur' }],
        state: [{ required: true, message: '请输入状态', trigger: 'blur' }],
      },
      dialogVisible: false,
      title: '新增',
    };
  },
  created() {
    this.fetchDate();
  },
  methods: {
    async fetchDate() {
      const { data: res } = await api.apiGoodsManagePage();
      console.log(res);
      this.list = res.data;
    },
    // 新增
    handleUpdate() {
      this.title = '新增';
      this.dialogVisible = true;
    },
    // 编辑
    handleEdit(row) {
      this.title = '编辑';
      this.dialogVisible = true;
      console.log(row);
    },
    // 确定
    handelConfirm() {
      this.$refs.formRuleRef.validate(async (valid) => {
        if (valid) {
          if (this.title == '新增') {
            const parsms = {
              gsName: this.creatForm.gsName,
              unitPrice: +this.creatForm.unitPrice,
              activityPrice: +this.creatForm.activityPrice,
              millCost: +this.creatForm.millCost,
              electricCharge: this.creatForm.electricCharge,
              expeDailyProd: this.creatForm.expeDailyProd,
              hashrate: this.creatForm.hashrate,
              powerDiss: this.creatForm.powerDiss,
              operaCost: +this.creatForm.operaCost,
              state: parseInt(this.creatForm.state),
            };
            console.log(parsms);
            const { data: res } = await api.apiAddGoods(parsms);
            console.log('新增111', res);
          } else {
            console.log(222);
          }
        }
      });
    },
    dialogClosed() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
