<template>
  <div class>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item
          :to="{
            path: '/home1',
          }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>合伙人管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="合伙人状态" prop="zt" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.zt === 1">创世合伙人</span>
            <span v-if="scope.row.zt === 2">城市合伙人</span>
            <span v-if="scope.row.zt === 0">无</span>
          </template>
        </el-table-column>
        <el-table-column label="合伙人地址" prop="address" align="center"></el-table-column>
        <el-table-column label="邀请奖励" prop="award" align="center"></el-table-column>
        <el-table-column label="合伙人提成比例" prop="awardlilv" align="center"></el-table-column>
        <el-table-column label="邀请人总数" prop="person" align="center"></el-table-column>
        <el-table-column label="操作" width="500px" align="center">
          <template slot-scope="scope">
            <!-- <div class="btn" @click="showEdit(scope.row)"><i class="el-icon-edit"></i>编辑合伙人状态</div>
            <div class="btn" @click="showEdit1(scope.row)"><i class="el-icon-edit"></i>编辑提成比例</div>
            <div class="btn" @click="showEdit2(scope.row)"><i class="el-icon-edit"></i>编辑邀请奖励</div> -->

            <!-- <el-button size="small" type="primary" @click="showEdit(scope.row)">编辑合伙人状态</el-button> -->
            <el-button size="small" type="warning" @click="showEdit(scope.row)">编辑合伙人状态</el-button>
            <el-button size="small" type="warning" @click="showEdit1(scope.row)">编辑提成比例</el-button>
            <el-button size="small" type="warning" @click="showEdit2(scope.row)">编辑邀请奖励</el-button>
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
      <el-dialog :title="title" :visible.sync="editDialogVisible" width="40%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="zt" label-width="121px">
          <el-form-item label="合伙人状态">
            <el-select v-model="editForm.zt">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="合伙人提成比例" prop="awardlilv" width="200px">
            <el-input v-model="editForm.awardlilv"></el-input>
          </el-form-item> -->
        </el-form>
        <!-- 底部区域 -->
        <!-- <div>
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </div> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog :title="title1" :visible.sync="editDialogVisible1" width="40%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="awardlilv" label-width="121px">
          <el-form-item label="合伙人提成比例" prop="awardlilv" width="200px">
            <el-input v-model="editForm.awardlilv"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <!-- <div>
          <el-button @click="editDialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </div> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 修改邀请金额 -->
      <el-dialog :title="title2" :visible.sync="editDialogVisible2" width="40%" @close="editDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="editForm" :rules="editFormRules" ref="award" label-width="121px">
          <el-form-item label="邀请奖励修改" prop="award" width="200px">
            <el-input v-model="editForm.award"></el-input>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <!-- <div>
          <el-button @click="editDialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </div> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="editConfirm">确 定</el-button>
        </span>
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
    this.initUser();
  },
  methods: {
    editConfirm() {
      this.edit5();
      this.edit12();
      this.edit4();
    },
    // 提成比例
    async edit4() {
      const params = {
        awardlilv: this.editForm.awardlilv,
        partnerId: this.editForm.partnerId,
      };
      const { data: res } = await api.edit4(params);
      if (res.state == 0) {
        this.$message.success('修改成功');
        this.editDialogVisible = false;
        this.editDialogVisible1 = false;
        this.editDialogVisible2 = false;
        this.initUser();
      } else {
        this.$message.error('修改失败');
      }
    },
    // 合伙人状态
    async edit5() {
      const params = {
        zt: this.editForm.zt,
        userid: this.editForm.userid,
      };
      const { data: res } = await api.edit5(params);
      // if (res.state == 0) {
      //   this.$message.success("修改成功");
      //   this.editDialogVisible = false;
      //   this.initUser();
      // } else {
      //   this.$message.error("修改失败");
      // }
    },
    // 邀请奖励金额
    async edit12() {
      const params = {
        award: this.editForm.award,
        id: this.editForm.partnerId,
      };
      const { data: res } = await api.edit12(params);
      // if (res.state == 0) {
      //   this.$message.success("修改成功");
      //   this.editDialogVisible = false;
      //   this.initUser();
      // } else {
      //   this.$message.error("修改失败");
      // }
    },
    editDialogClosed() {
      this.initUser();
    },
    async initUser() {
      const { data: res } = await api.getInitUser();
      this.list = res.data;
      console.log(res);
    },
    showEdit(row) {
      this.editForm = row;
      this.editDialogVisible = true;
    },
    showEdit1(row) {
      this.editForm = row;
      this.editDialogVisible1 = true;
    },
    showEdit2(row) {
      this.editForm = row;
      console.log('editForm33333', row);
      this.editDialogVisible2 = true;
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
