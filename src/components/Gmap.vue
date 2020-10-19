<template>
    <div>
        
            <GmapMap
          :center="{lat:51.06, lng:-113.98}"
          :zoom="15"
          map-type-id="terrain"
          style="width: 1000px; height: 1000px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
        
    </div>
</template>
<script>

</script>
<style>

</style>