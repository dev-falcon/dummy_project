<template>
  <v-dialog
    v-model="dialog"
    persistent
    style="
       {
        border-radius: 20px;
      }
    "
    max-width="600px"
  >
    <v-card>
      <v-card-title class="DialogBoxBanner white--text">
        <div class="AddLeadTitle">
          Add Lead
          <!-- </div> -->

          <br />
          <div class="LeadDesc">Please enter details here</div>
        </div>

        <v-spacer></v-spacer>

        <div
          style="
             {
              cursor: pointer;
            }
          "
        >
          <img @click="dialog = false" :src="deleteIcon" alt="" />
        </div>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row dense>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class=""
                  v-model="FirstName"
                  :rules="nameRules"
                  label="First Name*"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Last Name"
                  v-model="LastName"
                  :rules="nameRules"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Mobile Number*"
                  v-model="NumberInput"
                  :rules="NumberRules"
                  type="number"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="Email"
                  :rules="emailRules"
                  type="Email"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="['Raipur', 'Durg', 'Bhilai']"
                  v-model="SelectCity"
                  :rules="[(v) => !!v || 'city is required']"
                  label="Select City"
                  outlined
                ></v-autocomplete>
              </v-col>

              <v-col cols="12">
                <v-autocomplete
                  v-model="SelectState"
                  :items="['Chhatishgarh', 'Madhya pradesh', 'Delhi']"
                  :rules="[(v) => !!v || 'State is required']"
                  label="State"
                  outlined
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-select
                  :items="['Person-1', 'Person-2', 'Sujay']"
                  label="Reffered by"
                  v-model="SelectRefferedBy"
                  outlined
                  :rules="[(v) => !!v || 'Reffrence is required']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="SelectSource"
                  :items="['Source-1', 'Source-2', 'IVR Call']"
                  required
                  :rules="[(v) => !!v || 'Source is required']"
                  label="Source"
                  outlined
                ></v-autocomplete>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  outlined
                  name="input-remark"
                  label="Type remarks here"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          align-end
          @click="ModalFormValidate"
          class="AddLeadBtn white--text mb-3"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>




<script>
import deleteIcon from "../assets/delete.svg";

export default {
  data() {
    return {
      dialog: false,
      fullname: "",
      contact: "",

      valid: true,

      FirstName: "",
      LastName: "",
      nameRules: [(v) => !!v || "Name is required"],

      NumberInput: "",

      NumberRules: [
        (v) => !!v || "Number is required",
        (v) => (v && v.length <= 10) || "Must be of 10 digits",
      ],

      Email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      SelectCity: null,
      SelectState: null,
      SelectRefferedBy: null,
      SelectSource: null,

      //   Modal Form Validation

      Ellipse: Ellipse,
      deleteIcon: deleteIcon,
    };
  },

  method: {},
};
</script>



