<template>
      <div>
        <div>
        <el-select v-model="value" placeholder="请选择车辆编号" class="full">
        <el-option
        v-for="info in information"
        :key="info.id"
        :label="info.num"
        :value="info.id"
          >
          <span style="float: left">{{ info.num }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{info.car}}</span>
        </el-option>
      </el-select>
        </div>
        <br/>
      <div>
        <el-row>
              <el-col :span="12"><label class="title">团号：</label>
                <el-input
                placeholder="null"
                v-model="input1"
                size="small"
                >
              </el-input>
              
              </el-col>
              <el-col :span="12"><label class="title">出团单号</label>
                <el-input
                placeholder="null"
                v-model="input2"
                size="small"
                
                >
              </el-input>
              </el-col>
              </el-row>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data(){
        return{
            value:'',
            information:[],
            input1:'',
            input2:''
        }
    },
     mounted(){
      axios.get("db.json").then(response=>(this.information=response.data))
    },
     watch:{
      value:function(val){
        this.$store.state.index=val;
        this.input1=this.information[val].schedule;
        this.input2=this.information[val].schenum;
      }
    }
}
</script>
<style scoped>
.full{
  width:300px;
  font-size:14px;
}
.title{
font-size:14px;
font-weight:bold;
}
</style>