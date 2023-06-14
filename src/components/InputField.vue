<template>
  <v-text-field
    class="FormInputField my-n5"
    v-model="password"
    type="password"
    :rules="[rules.required, rules.email]"
    :label="label_2"
    outlined
    clearable
  ></v-text-field>
</template>



<script>
export default {
  data() {




    return{



        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },


    
     
        }

    }
  },

  method: {},
};
</script>



<style scoped>
.FormInputField {
  /* width: 90%; */
  font-weight: 400;
  font-size: 12px;

  line-height: 14.52px;
  border-radius: 5px;
}
</style>