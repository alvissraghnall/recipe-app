<template>
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
          First Name
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
      <ui-form-field :class="actionClass">
        <ui-button raised @click="this.login()">Sign Up</ui-button>
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

// eslint-disable-next-line prettier/prettier
@Options({

})
export default class SignUpForm extends Vue {
  private formData = {
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    password: "",
  };

  private controls = {
    helperText: true,
    isVisible: true,
  };

  // eslint-disable-next-line prettier/prettier
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private login() {}
}
</script>

<style></style>
