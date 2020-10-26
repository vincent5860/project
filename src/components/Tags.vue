<template>
    <div>
        <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>
<script>
export default {
    name:'Tags',
    data() {
      return {
        tags: [
           { name: '操作单列表', type: 'info' },
          { name: '定位地图', type: 'info' },
          
        ]
      };
    }
}
</script>
<style scoped>

</style>