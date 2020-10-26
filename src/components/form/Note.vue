<template>
<div>
    <div class="grid-form">
                
                <el-row>
              <el-col :span="10" :offset="2"><p style=text-align:left>出发时间</p></el-col>
               <el-col :span="10"><p style=text-align:right>{{information[this.$store.state.index].timest}}</p></el-col>
                </el-row>
                <el-row>
                    <el-col :span="10" :offset="2"><p style=text-align:left>行车时间</p></el-col>
                     <el-col :span="10"><p style=text-align:right>{{information[this.$store.state.index].timerun}}</p></el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="10" :offset="2"><p style=text-align:left>行驶公里数</p></el-col>
                         <el-col :span="10"><p style=text-align:right>{{information[this.$store.state.index].distance}}</p></el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="10" :offset="2"><p style=text-align:left>当前时速</p></el-col>
                             <el-col :span="10"><p style=text-align:right>{{information[this.$store.state.index].speed}}</p></el-col>
                              </el-row>
                              <el-row>
                                <el-col :span="10" :offset="2"><p style=text-align:left>当日轨迹</p></el-col>
                                 <el-col :span="10"><p style=text-align:right>{{route}}</p></el-col>
                                  </el-row>
                                  <el-row>
                                    <el-col :span="10" :offset="2"><p style=text-align:left>结束时间</p></el-col>
                                     <el-col :span="10"><p style=text-align:right>{{information[this.$store.state.index].timend}}</p></el-col>
                                      </el-row>
                
            </div>
            </div>
</template>
<script>
 import axios from 'axios'
export default {
    name:'Note',
    data(){
        return{
            information:[],
            route:'查看'
        }
    },
    mounted(){
        axios.get("db.json").then(response=>(this.information=response.data))
    }

}
</script>
<style scoped>
.grid-form{
    border-radius:1px;
    min-height: 100%;
    border-style:solid;
    border-width:thin;
    font-size:14px;
}
</style>