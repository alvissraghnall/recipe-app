<template>
  <div class="get-started" ref="cover">
    <ui-card outlined class="form-card">
      <div class="sign-up-in-top-right" :class="{'sign-in-top-right': this.activeItem === 'Sign In'}">
        <img src="../assets/top-right.png" alt="" class="sign-up-in-top-right-img" />
      </div>
      <div class="sign-up-in">
        <Tabs
          :items="this.items"
          :activeItem="this.activeItem"
          @tabClick="(event) => this.handleTab(event)"
        />
        <div v-if="this.activeItem === 'Sign Up'">
          <SignUpForm />
        </div>
        <div v-else-if="this.activeItem === 'Sign In'">
          <SignInForm />
        </div>
      </div>
      
    </ui-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tabs from "../components/Tabs.vue";
import SignUpForm from "../components/SignUpForm.vue";
import SignInForm from "../components/SignInForm.vue";
@Options({
  components: {
    Tabs,
    SignUpForm,
    SignInForm,
  },
})
export default class GetStarted extends Vue {
  protected items: string[] = ["Sign Up", "Sign In"];
  private activeItem: string = this.items[0];
  private windowHeight: number = window.innerHeight;

  private handleTab(e: Event): void {
    // console.log(e);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.activeItem = (e.target as HTMLUListElement).textContent!;
    //console.log(this.activeItem);
  }

  /**
   * mounted
   */
  public mounted() {
    window.addEventListener("resize", this.handleResize);
    (this.$refs.cover as HTMLDivElement).style.maxHeight = this.windowHeight.toString();
    (this.$refs.cover as HTMLDivElement).style.height = window.innerHeight.toString();
    console.log(this.$refs.cover, (this.$refs.cover as HTMLDivElement).style.maxHeight, window.innerHeight, this.windowHeight, this.windowHeight.toString());
  }

  private handleResize() {
    console.log("previous: ", this.windowHeight);
    this.windowHeight = window.innerHeight;
    console.log("now: ", this.windowHeight);
    
  }
  // eslint-disable-next-line prettier/prettier
}
// eslint-disable-next-line prettier/prettier
</script>

<style lang="scss">

html {
  background-image: url("../assets/sm-05.jpg") !important;
  background-size: cover;
}

.get-started {
  padding-top: -10%;
  width: 100vw;
  height: 100vh;
  // background-image: url("../assets/sm-05.jpg") !important;
  background-size: cover;
}

.sign-in-form {
  margin: 15px;
}

.form-card {
  width: 450px;
  margin: 45px;
}

.sign-up-in-top-right {
  position: absolute;
  float: right;
  left: 75%;
  top: -8%;
}

.sign-in-top-right {
  top: -13%;
}

.sign-up-in-top-right-img {
  width: 160px;
  height: auto;
  position: absolute;
  top: 10%;
  z-index: 3;
}

@media screen and (max-width: 555px) {
  .form-card {
    // margin: auto; 
    width: 70%;
  }
}

@media screen and (min-width: 726px) {
  html {
    background-image: url("../assets/bg-sm.jpg") !important;
    background-size: cover;
  }
}
</style>
