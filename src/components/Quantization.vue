<template>
  <div class>
    <el-card style="margin-top:50px;">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公告栏管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="福豆描述" prop="subtitle" align="center"></el-table-column>
        <el-table-column label="合伙人描述" prop="joinUs" align="center"></el-table-column>
        <el-table-column label="关于我们" prop="aboutUs" align="center"></el-table-column>
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
      <el-dialog title="修改" :visible.sync="editDialogVisible" width="80%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="121px">
          <el-form-item label="福豆描述" prop="subtitle">
            <el-input v-model="editForm.subtitle"></el-input>
          </el-form-item>
          <el-form-item label="合伙人描述" prop="joinUs" width="200px">
            <el-input v-model="editForm.joinUs"></el-input>
          </el-form-item>
          <el-form-item label="关于我们" prop="aboutUs" width="200px">
            <el-input v-model="editForm.aboutUs"></el-input>
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
      list: [],
      editForm: {},
      editDialogVisible: false,
      editFormRules: {
        subtitle: [
          { required: true, message: "请输入福豆描述", trigger: "blur" }
        ],
        joinUs: [
          { required: true, message: "请输入合伙人描述", trigger: "blur" }
        ],
        aboutUs: [
          { required: true, message: "请输入关于我们描述", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.initLh();
  },
  methods: {
    async edit6() {
      const params = {
        subtitle: this.editForm.subtitle,
        joinUs: this.editForm.joinUs,
        aboutUs: this.editForm.aboutUs
      };
      const { data: res } = await api.edit6(params);
      console.log(res);
            if (res.state == 0) {
        this.$message.success("修改成功");
        this.editDialogVisible = false;
      } else {
        this.$message.error("修改失败");
      }
    },
    editConfirm() {
      this.edit6();
    },
    editDialogClosed() {
      this.initLh(); 
    },
    async initLh() {
      const { data: res } = await api.getSelectSubtitleData();
      this.list = res.data;
      console.log("11111122222",res);
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
