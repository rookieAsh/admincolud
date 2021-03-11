<template>
    <div class="">
    <el-card style="margin-top:50px;">
              <!-- 面包屑导航区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/home1' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>转入列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 列表 -->
      <el-table :data="list" border stripe>
        <el-table-column align="center" type="index" width="50px"></el-table-column>
        <el-table-column label="交易序号" prop="number" align="center"></el-table-column>
        <el-table-column label="交易金额" prop="value" align="center"></el-table-column>
        <el-table-column label="转出地址" prop="fromAddress" align="center"></el-table-column>
        <el-table-column label="转出状态" prop="zt" align="center">
            <template v-slot="scope">
                <span v-if="scope.row.zt===0">成功</span>
                <span v-if="scope.row.zt===1">失败</span>
            </template>
        </el-table-column>
        <el-table-column label="接收地址" prop="toAddress" align="center"></el-table-column>
        <el-table-column label="交易时间" prop="format" align="center">
            <template v-slot="scope">
            {{scope.row.format.time | dateFormat}}
            </template>
        </el-table-column>
      </el-table>
    </el-card>
    </div>
</template>
<script>
import api from "../model/index";
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        async in() {
            const { data: res } = await api.in();
            this.list = res.data
      console.log(res,'c');
        }
    },
    created() {
        this.in()
    }
}
</script>
<style lang="scss" scoped>

</style>


