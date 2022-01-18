<template>
  <div class="home">
    <p>Jesus Walks!</p>
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

  public mounted(){
    window.addEventListener("resize", this.handleResize);
  }

  public handleResize(){
    this.windowWidth = window.innerWidth;
  }

  public beforeDestroy(){
    window.removeEventListener("resize", this.handleResize);
  }
}
</script>

<style lang="scss">

.home {
  background-image: url("../assets/bg-lg.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
