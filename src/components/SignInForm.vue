
<template>
  <ui-form type="|" item-margin-bottom="16" action-align="center">
      <ui-textfield
        v-model="value"
        required
        outlined
        helper-text-id="email-valid-msg"
      >
          Email Address
      </ui-textfield>
      <ui-textfield-helper id="pwd-val-msg" visible validMsg>
          Must be at least 8 characters long.
      </ui-textfield-helper>

      <ui-textfield
        input-type="password"
        required
        outlined
        pattern=".{8,}"
        helper-text-id="pwd-val-msg"
        :attrs="{autocomplete: 'current-password'}"
      >
          Password
      </ui-textfield>
      <ui-textfield-helper id="pwd-val-msg" visible validMsg>
          Must be a valid email address
      </ui-textfield-helper>
  </ui-form>
</template>


<script lang="ts">
import { Vue } from 'vue-class-component'
export default class SignInForm extends Vue {
    
}
</script>

<style>

</style>