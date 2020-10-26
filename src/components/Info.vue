<template>
<div>
        
           <div>
           <Select></Select>
           </div>
    <br/>
           <div>
              
                   
           </div>
    
           <div>
           <Table></Table>
           </div>
  <br/>  
           <div>
           <Search></Search>
           </div>
          
           <div>
            <CheckBox></CheckBox>
            </div>
    <br/>
           <div>
           <Note></Note>
           </div>
</div>
</template>
<script>

import Select from './form/Select.vue'
import Table from './form/Table.vue'
import Search from './form/Search.vue'
import CheckBox from './form/CheckBox.vue'
import Note from './form/Note.vue'

export default
   {
     name:'Info',
   components:{
Select,
Table,
Search,
CheckBox,
Note
   }
    }
   
</script>
<style>

</style>