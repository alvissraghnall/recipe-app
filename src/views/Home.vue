<template>
  <div class="home" :class="isMobile ? 'home-sm' : 'home-lg'">
    <div class="home-sm-intro">
      <h3 :class="$tt('headline3')" class="headline-main" style="top: 70%;"> Cooking Experience Like A Chef </h3>
      <h6 :class="$tt('overline')"> Let's make a delicious dish with the best recipe for the family. </h6>

      <ui-button icon="arrow_circle_right" :class="$tt('button')" style="background: green; color: white; height: 40px; border-radius: 32px; padding: 26px;"> Get Started </ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Options({

})
export default class Home extends Vue {
  message = "Hello"
  public windowWidth: number = window.innerWidth;
  public isMobile = true;

  public mounted(){
    window.addEventListener("resize", this.handleResize);
  }

  public handleResize(){
    console.log(this.windowWidth, "\n=====\n");
    this.windowWidth = window.innerWidth;
    this.isMobile = this.windowWidth < 800;
    console.log(this.windowWidth);
  }

  public beforeDestroy(){
    window.removeEventListener("resize", this.handleResize);
  }
}
</script>

<style lang="scss">
//
// @use '@material/button/button-shared-theme' with (
//   $height: 45px,
//   $horizontal-padding: 8px,
//   $minimum-height: 33px,
//   $maximum-height: 50px
//
// );

.home {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &-lg {
    background-image: url("../assets/bg-lg.jpg");
  }

  &-sm {
    background-image: url("../assets/bg-sm.jpg");

    &-intro {
      position: absolute;
      text-align: center;
      color: cyan;
      top: 70%;
      left: 40%;
      transform: translate(-40%, -70%);
    }
  }
}

.headline-main {
  font-family: sans-serif !important;
  font-size: 2.6em !important;
  font-weight: 900 !important;
}

@media screen and (min-width: 801px) {
  .home {
    background-image: url("../assets/bg-lg.jpg");

    &-sm-intro {
      display: none;
    }
  }
}
</style>
