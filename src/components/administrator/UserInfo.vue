<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/Index/Background' }">当前位置：首页</el-breadcrumb-item>
                <el-breadcrumb-item>查询用户实名信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="text-align: center">
            <h3>用户实名信息</h3>
        </div>
        <div style="margin-top: 20px">
            <el-card class="showCard" shadow="never">
                <el-table :data="datalist" stripe style="width: 100%">
                    <el-table-column prop="userId" label="用户ID"></el-table-column><!--用户ID-->
                    <el-table-column prop="name" label="姓名"></el-table-column><!--姓名-->
                    <el-table-column prop="idNo" label="身份证号"></el-table-column><!--身份证号-->
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    data(){
        return{
            datalist:[]
        }
    },

    methods:{
        getUser(){
            this.$axios.get('http://localhost:8050/user-service/userinformation/selectAll').then(res=>{
                console.log(res.data)
                if(res.data.code==1){
                    this.datalist=res.data.data.list;
                }else {
                    return false;
                }
            })
        }
    },

    mounted:function () {
        this.getUser();
    },
}
</script>

<style scoped>

</style>
