<template lang="html">
  <div class="get-started">
    <ui-card outlined class="form-card">
      <div class="sign-up-in">
        <ui-tabs v-model="active">
          <ui-tab>
            Sign in
          </ui-tab>
          <ui-tab>
            Sign up
          </ui-tab>
        </ui-tabs>
        <ui-panels v-model="active" @click="this.panelTwo()">
         <ui-panel>
          One
         </ui-panel>
         <ui-panel>
          Two
         </ui-panel>
        </ui-panels>
      </div>
    </ui-card>
  </div>

</template>

<script lang="ts">
  import { Vue } from "vue-class-component";
  export default class GetStarted extends Vue {
    public panelTwo(): void {
      
    }
  }
</script>

<style lang="scss">
body {
  background-image: url("../assets/sm-05.jpg") !important;
}

.sign-in-form {
  margin: 15px;

}

.form-card {
  width: 450px;
  margin: 45px;
}


</style>
