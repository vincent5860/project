<template>
    <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">资源中心</a></el-breadcrumb-item>
      <el-breadcrumb-item>车队资源管理</el-breadcrumb-item>
      <el-breadcrumb-item>车队实时跟踪</el-breadcrumb-item>
      <el-breadcrumb-item>定位地图</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style scoped>

</style>