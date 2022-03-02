<template>
  <div class="content">
    <ui-bottom-navigation content-selector=".container" stacked>
      <ui-tabs
        v-model="active"
        type="iconOnly"
        :items="this.items"
        @change="onChange"
        stacked
      >
      </ui-tabs>
    </ui-bottom-navigation>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({

})
export default class Dashboard extends Vue {
    private items = [
        {
            icon: "home",
            url: ""
        },
        {
            icon: "fibre_new",
            url: ""
        },
        {
            icon: "music_note",
            url: ""
        },
        {
            icon: "place",
            url: ""
        },
    ];
    private active = 1;

    private onChange(active: number) {
        console.log(active);
        
    }
}
</script>

<style lang="scss">
html {
  background: rgba(53, 45, 45, 0.938) !important;
}
</style>

<style lang="sass" scoped></style>
