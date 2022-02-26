<template>
  <div class="get-started">
    <ui-card outlined class="form-card">
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

  private handleTab(e: Event): void {
    // console.log(e);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.activeItem = (e.target as HTMLUListElement).textContent!;
    //console.log(this.activeItem);
  }
  // eslint-disable-next-line prettier/prettier
}
// eslint-disable-next-line prettier/prettier
</script>

<style lang="scss">
.get-started {
  width: 100%;
  height: 100%;
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
