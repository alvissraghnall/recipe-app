<template>
  <ui-grid class="demo-grid max-width">
    <ui-grid-cell class="demo-cell" columns="12">
      <ui-form type="|" item-margin-bottom="16" action-align="center">
        <template #default="{ actionClass }">
          <ui-form-field class="form-item">
            <ui-textfield
              v-model="this.formData.firstName"
              required
              outlined
              helper-text-id="name-valid-msg"
              input-type="text"
            >
              Full Name
            </ui-textfield>
            <ui-textfield-helper
              id="name-val-msg"
              :visible="this.controls.isVisible"
              v-if="this.controls.helperText"
            >
              Must have at least 2 characters
            </ui-textfield-helper>
          </ui-form-field>
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
          <ui-form-field class="form-item pwd-field">
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
          <ui-form-field class="form-item">
            <ui-textfield
              v-model="this.formData.rePassword"
              input-type="password"
              required
              outlined
              pattern=".{8,}"
              helper-text-id="pwd-val-msg"
              :attrs="{ autocomplete: 'current-password' }"
            >
              Confirm Password
            </ui-textfield>
            <ui-textfield-helper id="pwd-val-msg" visible validMsg>
              Enter Password again.
            </ui-textfield-helper>
          </ui-form-field>

          <ui-form-field>
            <ui-select
              v-model="this.formData.gender"
              :options="this.genderOptions"
              default-label=""
            >
              Gender
            </ui-select>
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

          <ui-form-field :class="actionClass">
            <ui-button raised @click="this.login()">Sign Up</ui-button>
          </ui-form-field>
        </template>
      </ui-form>
    </ui-grid-cell>
  </ui-grid>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import {validations} from "../utils/validations";
import { useValidator, helpers, useToast } from "balm-ui";


// eslint-disable-next-line prettier/prettier
@Options({
 required: {
    validate(value: string) {
      return !helpers.isEmpty(value);
    },
    message: "%s is required",
  },
})
export default class SignUpForm extends Vue {
  private balmUI = useValidator();
  private validations = validations;
  private $toast = useToast();
  private messages: string[] = [];
  private genderOptions = [
    {
      label: "Male",
      value: "M"
    },
    {
      label: "Female",
      value: "F"
    }
  ]
  private formData = {
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    password: "",
    rePassword: "",
    gender: ""
  };

  private controls = {
    helperText: true,
    isVisible: true,
  };

  // eslint-disable-next-line prettier/prettier
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private login() {
    let result = this.balmUI.validate(this.formData);
    let { valid, messages } = result;
    this.messages = messages;

    if(valid) {
      this.$toast("Ok");
    }
  }
}
</script>

<style>
  /* .pwd-field {
    margin-left: 15px;
  } */
  .mdc-form--vertical .mdc-form__item {
    align-items: center !important;
  }
</style>
