<template>
  <div>
    <el-card style="margin-top: 50px">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/assetWater' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>资产流水</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="search">
        <div class="item">流水类型</div>
        <div>
          <el-select v-model="value" placeholder="全部类型">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="item">币种</div>
        <div>
          <el-select v-model="value" placeholder="全部币种">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="item"><el-button type="primary" size="small">查询</el-button></div>
      </div>

      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="50px" align="center"></el-table-column>
        <el-table-column label="用户姓名" prop="invitationcode" align="center"></el-table-column>
        <el-table-column label="用户手机号" prop="addresskey" align="center"></el-table-column>
        <el-table-column label="流水类型" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="币种" prop="fundmoney" align="center"></el-table-column>
        <el-table-column label="时间" prop="usdtmoney" align="center"></el-table-column>
        <el-table-column label="数量" prop="fulianbean" align="center"></el-table-column>
        <el-table-column label="备注" prop="person" align="center"></el-table-column>
      </el-table>
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
      options: [
        {
          value: '选项1',
          label: '类型1',
        },
        {
          value: '选项2',
          label: '类型2',
        },
        {
          value: '选项3',
          label: '类型3',
        },
      ],
    };
  },
  created() {},
  mounted: {
    editConfirm() {},
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
