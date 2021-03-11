<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>审核管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="用户名" prop="address" align="center"></el-table-column>
        <el-table-column label="提现状态" prop="tiquzt" align="center"></el-table-column>
        <el-table-column label="理财产品" prop="mid_id" align="center"></el-table-column>
        <el-table-column label="购买金额" prop="buyMoney" align="center"></el-table-column>
        <el-table-column label="购买时间" prop="buyTime" align="center"></el-table-column>
        <el-table-column label="分红时间" prop="fenhongTime" align="center"></el-table-column>
        <el-table-column label="年利率" prop="cmcYear" align="center"></el-table-column>
        <el-table-column label="分红周期" prop="cmcMonth" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.tiquzt === 1">审核中</span>
            <span v-if="scope.row.tiquzt === 2">完成</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template v-slot="scope">
            <div class="btn" @click="showEdit(scope.row)">
              <i class="el-icon-edit"></i> 编辑
            </div>
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
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="121px">
          <el-form-item label="提现状态" prop="tiquzt">
            <el-select v-model="editForm.tiquzt">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <div class="footer">
          <el-button @click="editDialogVisible = false" style="right:100px;">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
import api from "../model/index";

export default {
  data() {
    return {
              options: [
                {
          value: 1,
          label: "审核中"
        },
        {
          value: 2,
          label: "完成"
        }
      ],
      list: [],
      editForm: {},
      editDialogVisible: false,
      editFormRules: {
        tiquzt: [
          { required: true, message: "请输入理财周期", trigger: "blur" }
        ],
        startmoney: [
          { required: true, message: "请输入最小购买金额", trigger: "blur" }
        ],
        awardlilv: [
          { required: true, message: "请输入转出最小金额", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.initCheck();
  },
  methods: {
    async edit9() {
      const params = {
        tiquzt: this.editForm.tiquzt,
        userid: this.editForm.userid,
      };
      const { data: res } = await api.edit9(params);
      console.log(res);
      if (res.state == 0) {
        this.$message.success("修改成功");
        this.editDialogVisible = false;
      } else {
        this.$message.error("修改失败");
      }
    },
    editConfirm() {
      this.edit9();
    },
    editDialogClosed() {
      this.initCheck(); 
    },
    async initCheck() {
      const { data: res } = await api.getInitCheck();
      this.list = res.data;
      console.log("getInitCheck1222222",res);
    },
    showEdit(row) {
      this.editForm = row;
      console.log(row);
      this.editDialogVisible = true;
    }
  }
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
