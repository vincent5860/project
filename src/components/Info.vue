<template>
    <div>
        
    <div>
        <el-select v-model="key" placeholder="请选择车辆编号" @change="storedata" class="full">
        <el-option
        v-for="item in myJson"
        :key="item.id"
        :label="item.label"
        :value="item.value"
        :num="item.num"
          >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{item.value}}</span>
        </el-option>
      </el-select>
      
    </div>
    
      <br/>
     
      <div>
          <el-row>
              <el-col :span="12"><label>团号：</label>
                <el-input
                placeholder="null"
                v-model="input1"
                class="half"
                >
              </el-input></el-col>
              <el-col :span="12"><label>出团单号：</label>
                <el-input
                placeholder="null"
                v-model="input2"
                class="half"
                >
              </el-input></el-col>
             
                           
                
          </el-row>

      
       


      </div>
      <br/>
      <div>
      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="pick"
      label="接站点"
      width="145">
    </el-table-column>
    <el-table-column
      prop="lastime"
      label="剩余抵达时间"
      width="145">
    </el-table-column>
  </el-table>
</div>
<br/>
<div>
    <div class="grid-content bg-purple-dark">
        <el-row>
            <el-col :span="2"><div>..</div></el-col>
            <el-col :span="20">
                <p class="b-border">{{input3}}</p>
                
                <p class="b-border">{{input4}}</p>
            </el-col>
            <el-col :span="2"><div>..</div></el-col>
        </el-row>
    </div>
</div>

<div>
<div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="景点/上下车点" border></el-checkbox>
    </el-checkbox-group>
			</div>
			<div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="接送点" border></el-checkbox>
    </el-checkbox-group>
            </div>
            </div>
            <br/>
            <div class="grid-form">
                
                <el-row>
              <el-col :span="10" :offset="2"><p style=text-align:left>出发时间</p></el-col>
               <el-col :span="10"><p style=text-align:right>{{time1}}</p></el-col>
                </el-row>
                <el-row>
                    <el-col :span="10" :offset="2"><p style=text-align:left>行车时间</p></el-col>
                     <el-col :span="10"><p style=text-align:right>{{time2}}</p></el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="10" :offset="2"><p style=text-align:left>行驶公里数</p></el-col>
                         <el-col :span="10"><p style=text-align:right>{{distance}}</p></el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="10" :offset="2"><p style=text-align:left>当前时速</p></el-col>
                             <el-col :span="10"><p style=text-align:right>{{speed}}</p></el-col>
                              </el-row>
                              <el-row>
                                <el-col :span="10" :offset="2"><p style=text-align:left>当日轨迹</p></el-col>
                                 <el-col :span="10"><p style=text-align:right>{{route}}</p></el-col>
                                  </el-row>
                                  <el-row>
                                    <el-col :span="10" :offset="2"><p style=text-align:left>结束时间</p></el-col>
                                     <el-col :span="10"><p style=text-align:right>{{timend}}</p></el-col>
                                      </el-row>
                
            </div>
      </div>
</template>
<script>
    import json from '../json/item.json'
export default
   {
    data() {
        
      return {
        myJson: json  ,
        value: '' ,
        input1: '',
        input2: '',
        key:'',
        input3:'当前位置',
        input4:'目的地位置',
        checkboxGroup1: [],
        tableData: [{
          pick: 'BPL',
          lastime: '-'

        }, {
          pick: 'CAT',
          lastime: '00:55:00'
        }, {
          pick: 'BSH',
          lastime: '00:00:00'
        }]

       
        
         }
      
      
    },
    methods:{
        storedata: function(){
            
            if(this.key=="Benz Sprinter"){
               
             this.input1="BL01"
               this.input2="BL017452"
               this.input3="30.67445446"
               this.input4="0.07634656565"
               this.time1="08:00:00"
               this.time2="5h 30min"
               this.distance="280km"
               this.speed="90km/h"
               this.route="查看"
               this.timend="-"
               
                
            }
            else if(this.key=="Ford transport250"){
                this.input1="YH01"
               this.input2="YH013452"
               this.input3="-30.6743435"
               this.input4="-0.07634556"
               this.time1="07:30:00"
               this.time2="2h 15min"
               this.distance="175km"
               this.speed="120km/h"
               this.route="查看"
               this.timend="-"
            }
            else if(this.key=="Ford transport350"){
                this.input1="ICE01"
               this.input2="ICE01352"
               this.input3="28.6743435"
               this.input4="-0.55634556"
               this.time1="10:30:00"
               this.time2="4h 15min"
               this.distance="15km"
               this.speed="110km/h"
               this.route="查看"
               this.timend="-"
            }
        }

    }
   
}

</script>
<style>
.full{
  width:300px;
}
.half{
    width:145px;
}
.grid-content{
    border-radius: 2px;
    min-height: 100px;
    
}
.grid-form{
    border-radius:1px;
    min-height: 400px;
    border-style:solid;
    border-width:thin;
}
.bg-purple-dark {
    background: rgb(92, 92, 214);
  }
  .b-border{
      border-bottom:1px solid cornsilk;
      color:cornsilk;
  }
  .noborder{
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:solid cornsilk;
  background-color:rgb(92, 92, 214);
  width:250px;


  }
  
</style>