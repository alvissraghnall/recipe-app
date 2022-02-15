<template>
  <div class="tabs">
      <ul>
          <li v-for="(item, index) in this.items" :key="index" @click="$emit('tabClick', $event)">
              <div :class="{ active: item === activeItem }">
                  {{ item }}
              </div>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
  import { Vue, Options } from "vue-class-component";

  @Options({
      props: {
        items: Array,
        activeItem: String
      }
  })
  export default class Tabs extends Vue {
    
     
  }
</script>

<style scoped>
.tabs {
    margin-bottom: 40px;
}

ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
}

li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
}

.active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
}
</style>