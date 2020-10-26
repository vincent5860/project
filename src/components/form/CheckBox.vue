<template>
<div>
    
        <div style="margin-top: 20px">
    
      <el-checkbox label="景点/上下车点" v-model="checked1" @change="swtch1"></el-checkbox>
    
			</div>
			<div style="margin-top: 10px">
   
      <el-checkbox label="接送点" v-model="checked2" @change="swtch2"></el-checkbox>
    
            </div>
        
        </div>
</template>
<script>
export default {
    name:'CheckBox',
    data(){
        return{
       checked1: false,
       checked2: false

    }
    },
    methods:{

      swtch1(){
return this.$store.commit('SET_SWITCH1')
      },
       swtch2(){
return this.$store.commit('SET_SWITCH2')
      }

    }
   
    }

</script>
<style scoped>

</style>