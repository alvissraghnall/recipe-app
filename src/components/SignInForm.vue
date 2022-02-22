<template>
  <ui-form
    type="|"
    item-margin-bottom="16"
    action-align="center"
    style="text-align: center"
  >
    <template #default="{ actionClass }">
      <ui-form-field class="form-item">
        <ui-textfield
          v-model="this.formData.email"
          required
          outlined
          helper-text-id="email-valid-msg"
          input-type="email"
        >
          Email Address
        </ui-textfield>
        <ui-textfield-helper
          id="email-valid-msg"
          :visible="this.controls.isVisible"
          v-if="this.controls.helperText"
        >
          Must be like me@example.com
        </ui-textfield-helper>
      </ui-form-field>
      <ui-form-field class="form-item">
        <ui-textfield
          v-model="this.formData.password"
          input-type="password"
          required
          outlined
          pattern=".{8,}"
          helper-text-id="pwd-val-msg"
          :attrs="{ autocomplete: 'current-password' }"
        >
          Password
        </ui-textfield>
        <ui-textfield-helper id="pwd-val-msg" visible validMsg>
          Must be at least 8 characters long.
        </ui-textfield-helper>
      </ui-form-field>
      <div class="mdc-alert mdc-alert--error" v-if="messages.length">
        <i class="material-icons md-error-icon mdc-alert__icon"> cancel </i>
        <div class="mdc-alert__content">
          <ul>
            <li v-for="(message, index) in messages" :key="index">
              {{ message }}
            </li>
          </ul>
        </div>
        <!---->
      </div>
      <!-- <ui-alert v-if="messages.length" state="error">
                <ul>
                <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
                </ul>
          </ui-alert> -->
      <ui-form-field :class="actionClass">
        <ui-button raised @click="this.register()">Submit</ui-button>
        <!-- <ui-button outlined>Cancel</ui-button> -->
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import validations from "../utils/validations";
import { useValidator, helpers } from "balm-ui";

@Options({
  required: {
    validate(value: string) {
      return !helpers.isEmpty(value);
    },
    message: "%s is required",
  },
})
export default class SignInForm extends Vue {
  private balmUI = useValidator();
  private validations = validations;
  private formData = {
    email: "",
    password: "",
  };
  private controls = {
    helperText: true,
    isVisible: true,
  };
  private messages = [];
  private register() {
    let result = this.balmUI.validate(this.formData);
    let { valid, messages } = result;
    this.messages = messages;
    console.log(
      `The email: ${this.formData.email} \n The Password: ${this.formData.password}`
    );
    console.log(valid, messages);

    if (valid) {
      let data = {
        email: this.formData.email,
        password: this.formData.password,
      };
      // this.$toast("Ok.");

      // let requestParameters = utils.globalRequestParameters;
      // requestParameters.method = "POST";
      // requestParameters.body = JSON.stringify(data);

      // fetch(utils.url + "user", requestParameters).then((res) => {
      //   res.text().then((res) => (this.mesaj = res));
      // });
    }
  }
}
</script>

<style></style>
