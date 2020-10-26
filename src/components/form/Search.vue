<template>

     <div class="grid-content" v-if="this.$store.state.check1===false && this.$store.state.check2===false">
        <el-row>
            <el-col :span="2"><div>..</div></el-col>
            <el-col :span="20">
                <p class="b-border">{{information[this.$store.state.index].accord1}}</p>
                
                <p class="b-border">{{information[this.$store.state.index].accord2}}</p>
            </el-col>
            <el-col :span="2"><div>..</div></el-col>
        </el-row>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    name:'Search',
     data(){
        return{
            information:[]
        }
    },
    mounted(){
        axios.get("db.json").then(response=>(this.information=response.data))
    }
}
</script>
<style scoped>
.grid-content{
    border-radius: 2px;
    min-height: 100px;
    background: rgb(89, 99, 148);
}
.b-border{
      border-bottom:1px solid cornsilk;
      color:cornsilk;
  }
</style>