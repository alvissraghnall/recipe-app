<template>
  <div class="home" :class="isMobile ? 'home-sm' : 'home-lg'">
    <div :class="isMobile ? 'home-sm-intro' : 'home-lg-intro'">
      <h3 :class="$tt('headline3')" class="headline-main" style="top: 70%">
        Cooking Experience Like A Chef
      </h3>
      <h6 :class="$tt('overline')">
        Let's make a delicious dish with the best recipe for the family.
      </h6>

      <ui-button
        @click="this.getStarted()"
        :class="$tt('button')"
        style="
          background: green;
          color: white;
          height: 40px;
          border-radius: 32px;
          padding: 26px;
        "
      >
        <template #before>
          <ui-icon class="icon" :size="36">arrow_circle_right</ui-icon>
        </template>
        Get Started
      </ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Options({})
export default class Home extends Vue {
  message = "Hello";
  public windowWidth: number = window.innerWidth;
  public isMobile = this.windowWidth < 800;
  private homeIntro = {
    "home-sm-intro": this.isMobile,
    "home-lg-intro": !this.isMobile
  };

  public mounted() {
    window.addEventListener("resize", this.handleResize);
    setInterval(() => {
      console.log(this.isMobile);
      
    }, 7000);
  }

  public handleResize(): void {
    console.log(this.windowWidth, "\n=====\n");
    this.windowWidth = window.innerWidth;
    this.isMobile = this.windowWidth < 800;
    console.log(this.windowWidth);
  }

  public beforeDestroy(): void {
    window.removeEventListener("resize", this.handleResize);
  }
  public getStarted(): void {
    this.$router.push("/get-started");
  }
}
</script>

<style lang="scss" scoped>
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

    &-intro {
      display: block;
      float: right;
      text-align: right;
      position: relative;
      top: 50%;
      color: white;
    }
  }

  &-sm {
    background-image: url("../assets/sm-03.jpg");

    &-intro {
      position: absolute;
      text-align: center;
      color: white;
      top: 70%;
      left: 40%;
      transform: translate(-40%, -70%);
    }
  }
}

.icon {
  margin-right: 5px;
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

    &-lg-intro {
      float: right;
      text-align: center;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
  }
  i.material-icons.mdc-button__icon:global() {
    font-size: 3em !important;
    background: black !important;
  }
}
</style>
