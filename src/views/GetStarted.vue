<template lang="html">
  <div class="get-started">
    <ui-card outlined class="form-card">
      <div class="sign-up-in">
        <ui-tab-bar v-model="active">
          <ui-tab type="textOnly" >
            Sign in
          </ui-tab>
          <ui-tab>
            Sign up
          </ui-tab>
        </ui-tab-bar>
        <ui-panels v-model="active">
         <ui-panel>
          Je suis!
       	  <ui-textfield outlined with-leading-icon>
           Username
           <template #before=" { iconClass } ">
            <span :class="iconClass">
              <i class="fa fa-account_circle fa-lg"></i>
            </span>
           </template>
          </ui-textfield>
          <ui-textfield outlined with-leading-icon>
           Password
           <template #before=" { iconClass } ">
            <span :class="iconClass">
              <ui-icon :size="37">password</ui-icon>
            </span>
           </template>
          </ui-textfield>
         </ui-panel>
	 <ui-panel>
	 </ui-panel>
        </ui-panels>
      </div>
    </ui-card>
  </div>

</template>

<script>
  import { Vue } from "vue-class-component";
  export default class GetStarted extends Vue {

  }
</script>

<style lang="scss">
body {
  background-image: url("../assets/sm-05.jpg") !important;
}
.get-started {

}

.form-card {
  width: 450px;
  margin: 45px;
}


</style>
