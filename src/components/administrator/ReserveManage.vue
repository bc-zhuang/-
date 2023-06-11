<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/Index/Background' }">当前位置：首页</el-breadcrumb-item>
                <el-breadcrumb-item>查询预约信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="margin-top: 20px;text-align: center">
            <h3>查询预约信息</h3>
        </div>
        <div style="margin-top: 20px;text-align: left">
            <span>一级业务:  </span>
            <el-select v-model="getList.first_id">
                <el-option value="1" label="新建房屋业务"></el-option>
                <el-option value="2" label="存量房业务"></el-option>
            </el-select>
            <el-button type="primary" @click="getReserve" style="margin-left: 20px">查询</el-button>
        </div>
        <div style="margin-top: 20px">
            <el-card class="showCard" shadow="never">
                <el-table :data="datalist" stripe style="width: 100%">
                    <el-table-column prop="id" label="预约号"></el-table-column><!--预约号-->
                    <el-table-column prop="userId" label="预约人ID"></el-table-column><!--姓名-->
                    <el-table-column prop="timeNow" label="创建预约的时间"></el-table-column><!--二级业务-->
                    <el-table-column prop="time" label="预约时间"></el-table-column><!--预约时间-->
                    <el-table-column prop="timeRe" label="预约时段"></el-table-column><!--预约时间-->
                    <el-table-column prop="firstId" label="所属一级业务ID"></el-table-column><!--预约时间-->
                    <el-table-column prop="window" label="预约窗口号"></el-table-column><!--预约时间-->
                    <el-table-column prop="aState" label="预约状态"></el-table-column><!--预约时间-->
                    <el-table-column prop="pState" label="办理状态"></el-table-column><!--预约时间-->
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReserveManage",

    data(){
        return{
            getList:{
                first_id:''
            },
            datalist:[]
        }
    },

    methods:{
        getReserve() {
            if(this.firstBusiness!==''){
                this.$axios.post('http://localhost:8050/reservation-service/reservationService/reservationinformation/selectByFirst',this.getList).then(res=>{
                    console.log(res.data);
                    if(res.data.code==1){
                        this.$message({
                            message: '查询成功!',
                            type: 'success'
                        });
                        this.datalist=res.data.data.list;
                    }else {
                        this.$message.error('查询失败!');
                        return false;
                    }
                })
            }
        },

      getCenter(){
        this.$axios.get('http://localhost:8050/reservation-service/reservationService/reservationinformation/selectALL').then(res=>{
          console.log(res.data);
          if(res.data.code==1){
            this.datalist=res.data.data.list;
          }else {
            return false;
          }
        })
      },

    },

  mounted:function (){
      this.getCenter();
  }
}
</script>

<style scoped>

</style>
