<template>
  <div class="content">
    Back
    <ui-bottom-navigation content-selector=".container" stacked>
      <ui-panels v-model="this.active">
        <ui-panel>Panel 1</ui-panel>
        <ui-panel>Panel 2</ui-panel>
        <ui-panel>Panel 3</ui-panel>
        <ui-panel>Panel 4</ui-panel>
      </ui-panels>
      <ui-tabs
        v-model="this.active"
        type="iconOnly"
        :items="this.items"
        stacked
      >
      </ui-tabs>
    </ui-bottom-navigation>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class Dashboard extends Vue {
  private items = [
    {
      icon: "home",
      url: "",
    },
    {
      icon: "fibre_new",
      url: "",
    },
    {
      icon: "music_note",
      url: "",
    },
    {
      icon: "place",
      url: "",
    },
  ];
  private active = 1;

  mounted(){
      console.log(this.active);
      
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   private onChange(_e: Event) {
//     // this.active = active;
//     console.log(this.active);
//   }
}
</script>

<style lang="scss">
html {
  background: rgba(53, 45, 45, 0.938) !important;
}
</style>

<style lang="sass" scoped></style>
