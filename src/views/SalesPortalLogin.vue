<template>
  <!-- <v-container class="fill-height"> -->

  <v-layout
    align-lg-center
    align-md-center
    align-xl-center
    align-sm-center
    align-center
    justify-center
    class=""
  >
    <v-flex xs10 sm6 md5 lg4 xl4>
      <v-card elevation="2" class="LoginCard pb-4" outlined>
        <div v-if="!ForgetPassword" class="InnerSectionLoginCard">
          <v-card-title class="LoginCardTitle">
            Welcome, please sign in
          </v-card-title>

          <div class="LoginForm">
            <v-form @submit="SubmitForm">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      class="FormInputField my-n1"
                      v-model="email"
                      :label="label_1"
                      :rules="emailRules"
                      outlined
                      type="Email"
                      color="grey"
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xs="12">
                    <v-text-field
                      class="FormInputField my-n5"
                      v-model="password"
                      :rules="[rules.required]"
                      :label="label_2"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      color="grey"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-text class="text-center">
                <v-btn type="submit" class="SignInBtn white--text mx-auto">
                  Sign In
                </v-btn>
              </v-card-text>

              <v-card-text
                @click="ForgetPasswordHandler"
                class="ForgetPasswordText text-center"
              >
                Forget Password?
              </v-card-text>
            </v-form>
          </div>
        </div>

        <div v-else-if="ForgetPassword" class="InnerSectionLoginCard">
          <v-card-title class="LoginCardTitle">
            Reset Password
          </v-card-title>

          <div class="LoginForm">
            <v-form @submit="SubmitForm">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      class="FormInputField my-n2"
                      v-model="email"
                      :label="label_1"
                      :rules="[rules.required]"
                      outlined
                      color="grey"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      class="FormInputField my-n2"
                      v-model="password"
                      :rules="[rules.required, rules.email]"
                      :label="label_2"
                      color="grey"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      class="FormInputField my-n2"
                      v-model="CnfmPassword"
                      :rules="[rules.required, rules.email]"
                      label="Confirm password"
                      color="grey"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-text class="text-center">
                <v-btn type="submit" class="SignInBtn white--text mx-auto">
                  Reset Password
                </v-btn>
              </v-card-text>

              <v-card-text
                @click="ReturnSignUp"
                class="ForgetPasswordText text-center"
              >
                Return to sign up
              </v-card-text>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
</template>



<script>
// import InputField from '@/components/InputField.vue';

export default {
  name: "SalesPortalLogin",

  // components:{
  //     InputField,
  // },

  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,

      email: null,
      password: null,
      CnfmPassword: null,

      label_1: "Email",
      label_2: "Password",

      ForgetPassword: false,

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },

  methods: {
    ResetPasswordHandler() {
      this.$router.push("/");
      this.ForgetPassword = !this.ForgetPassword;
    },

    ReturnSignUp() {
      this.ForgetPassword = !this.ForgetPassword;

      (this.email = ""), (this.password = ""), (this.CnfmPassword = "");
    },

    ForgetPasswordHandler() {
      this.ForgetPassword = !this.ForgetPassword;
    },
    SubmitForm(e) {
      e.preventDefault();

      if (this.email && this.password) {
        console.log("ready to go");
        this.$router.push("/leads");
        console.log("Email:",this.email )
        console.log("Password:",this.password )

      }
      if (!this.email) {
        this.label_1 = "Email required";
      }
      if (!this.password) {
        this.label_2 = "Password cannot be empty";
      }

      console.log(this.error);
    },
  },
};
</script>


<style scoped>
body {
  font-family: Inter;
  font-style: normal;
}

.LoginCard {
  border-radius: 20px !important ;
}
.InnerSectionLoginCard {
  width: 85%;
  margin: 0 auto;
}

.LoginCardTitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #ff7144;
  line-height: 48px;
  text-align: left;
  font-size: 20px;
}

@media (max-width: 394px) {
  .LoginCardTitle {
    font-size: 14px;
    line-height: 20px;
  }

  .SignInBtn {
    font-size: 12px;
    width: auto !important;
  }
}

.ForgetPasswordText {
  color: #ff7144;
  font-family: Inter;
  font-weight: 600;
  cursor: pointer;

  font-style: normal;
  line-height: 5px;
  font-size: 16px;
}

.FormInputField {
  /* width: 90%; */
  font-weight: 400;
  font-size: 16px;
  /* height: 103px; */
  line-height: 14.52px;
  border-radius: 5px;
}

.SignInBtn {
  background-color: #ff7144 !important;

  width: 60%;
  font-size: 14px;
  border-radius: 5px;
}
</style>



