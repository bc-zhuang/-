<template>
    <div>
        <el-menu background-color="#545c64" text-color="#ffffff"
                 active-text-color="#ffd04b" default-active="2"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="handSelect">
            <el-submenu index="登记中心管理">
                <template slot="title"><i class="el-icon-location"></i><span>登记中心管理</span></template>
                <el-submenu index="登记中心管理-花都区">
                    <template slot="title"><i class="el-icon-location"></i><span>花都区</span></template>
                    <el-menu-item index="登记中心管理-花都区-业务管理">业务管理</el-menu-item>
                    <el-menu-item index="登记中心管理-花都区-预约管理">预约管理</el-menu-item>
                </el-submenu>
                <el-submenu index="登记中心管理-白云区">
                    <template slot="title"><i class="el-icon-location"></i><span>白云区</span></template>
                    <el-menu-item index="登记中心管理-白云区-业务管理">业务管理</el-menu-item>
                    <el-menu-item index="登记中心管理-白云区-预约管理">预约管理</el-menu-item>
                </el-submenu>
                <el-submenu index="登记中心管理-天河区">
                    <template slot="title"><i class="el-icon-location"></i><span>天河区</span></template>
                    <el-menu-item index="登记中心管理-天河区-业务管理">业务管理</el-menu-item>
                    <el-menu-item index="登记中心管理-天河区-预约管理">预约管理</el-menu-item>
                </el-submenu>
                <el-submenu index="登记中心管理-越秀区">
                    <template slot="title"><i class="el-icon-location"></i><span>越秀区</span></template>
                    <el-menu-item index="登记中心管理-越秀区-业务管理">业务管理</el-menu-item>
                    <el-menu-item index="登记中心管理-越秀区-预约管理">预约管理</el-menu-item>
                </el-submenu>
                <el-submenu index="登记中心管理-海珠区">
                    <template slot="title"><i class="el-icon-location"></i><span>海珠区</span></template>
                    <el-menu-item index="登记中心管理-海珠区-业务管理">业务管理</el-menu-item>
                    <el-menu-item index="登记中心管理-海珠区-预约管理">预约管理</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="用户信息管理">
                <template slot="title"><i class="el-icon-s-custom"></i><span>用户信息管理</span></template>
                    <el-menu-item index="用户信息管理-查询用户信息">查询用户</el-menu-item>
                    <el-menu-item index="用户信息管理-删除用户">删除用户</el-menu-item>
                    <el-menu-item index="用户信息管理-修改用户信息">修改用户信息</el-menu-item>
            </el-submenu>

            <el-submenu index="网站信息管理">
                <template slot="title"><i class="el-icon-tickets"></i><span>网站信息管理</span></template>
                <el-menu-item index="网站信息管理-修改网站公告">修改网站公告</el-menu-item>
                <el-menu-item index="网站信息管理-查看网站日志">查看网站日志</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Aside",
    methods: {
        handleOpen(key, keyPath) {
            console.log("打开：",key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log("关闭：",key, keyPath);
        },
        handSelect(key, keyPath) {
            console.log("选择：",key, keyPath);
        }
    }
}
</script>

<style scoped>
</style>
