<template>
  <div>
    <!-- dialog form -->

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

    <!-- dialog form -->

    <v-card>
     
      <v-app-bar dense>
        <v-toolbar-title class="mr-3 SalesPortal">Sales Portal</v-toolbar-title>
        <!-- <v-spacer></v-spacer> -->

        <v-toolbar-title class="BannerText"
          >Client management /Leads</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn icon>
          <img width="28px" class="" :src="Ellipse" alt="" srcset="" />
        </v-btn>

        <v-toolbar-title class="BannerText mr-8"> A K Satish </v-toolbar-title>
      </v-app-bar>

      <!-- testing ends-->

      <v-card-title class="TableSearchSection">
        <v-row class="d-flex flex-xs-column align-center">
          <v-col cols="6" sm="3" md="3" xs="2">
            <v-text-field
              class="TableSearchBar"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              solo
              flat
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-text-field
              class="TableSearchBar"
              v-model="search"
              append-icon="mdi-magnify"
              label="Find By Sources"
              solo
              hide-details
              flat
            ></v-text-field>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="6" xs="2" md="2" sm="2" class="align-end">
            <v-btn
              @click="dialog = true"
              align-end
              class="AddLeadBtn white--text"
            >
              <v-icon left>mdi-plus</v-icon>
              Add Lead
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <div class="TableContainer">
        <v-data-table
          class="LeadsTable text-center"
          :headers="headers"
          :items="items"
          :loading="loading"
          :hide-default-footer="true"
          :search="search"
        >
          <template slot="item.Contact" slot-scope="{ item }">
            <div
              class="contact-cell"
              v-html="formatContact(item.Contact)"
            ></div>
          </template>

          <template slot="item.Action" slot-scope="{ item }">
            <v-btn
              class="mr-2 BtnTextEdit"
              color="grey"
              depressed
              outlined
              @click="editItem(item.id)"
              >Edit</v-btn
            >

            <v-btn
              class="BtnTextDelete"
              depressed
              outlined
              @click="deleteItem(item.id)"
              color="grey"
              >Delete</v-btn
            >

            <v-btn class="ml-2 BtnTextDots" depressed outlined color="grey">
              <v-icon style="margin-right: -1px"> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>


<script>
import Ellipse from "../assets/Ellipse 11.png";

import deleteIcon from "../assets/delete.svg";

export default {
  name: "Leads",

  data() {
    return {
      dialog: false,
      fullname: "",
      contact: "",

      EditingEntry: false,
      EditingEntryIndex: null,

      //   Modal Form Validation

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

      search: "",
      loading: false,
      headers: [
        {
          text: "Registration Date",
          align: "center",

          value: "RegistrationDate",
        },
        {
          text: "Client Name",
          align: "center",
          filterable: true,
          value: "ClientName",
        },
        { text: "Contact", align: "center", value: "Contact" },
        {
          text: "Reffered By",
          align: "center",
          value: "ReferredBy",
          filterable: true,
        },
        { text: "Source", align: "center", value: "Source" },
        { text: "Action", align: "center", value: "Action" },
      ],
      items: [
        {
          id: 1,

          RegistrationDate: "17/05/22",
          ClientName: "Amit Jain",
          Contact: "9753620608 amit@gmail.com",
          ReferredBy: "Sujay",

          Source: "IVR Call",
        },
      ],
    };
  },

  methods: {
    editItem(item) {
      console.log("edit Item: ", item);
      this.dialog = true;
      this.EditingEntry = true;
      this.EditingEntryIndex = item;

      // for spliting Client name

      this.fullname = this.items[item - 1].ClientName;

      const names = this.fullname.trim().split(" ");
      this.FirstName = names[0];
      this.LastName = names.slice(1).join(" ");

      //   Spliting the contact part

      this.contact = this.items[item - 1].Contact;

      const ContactName = this.contact.trim().split(" ");
      this.NumberInput = ContactName[0];
      this.Email = ContactName.slice(1).join(" ");

      this.SelectRefferedBy = this.items[item - 1].ReferredBy;

      this.SelectSource = this.items[item - 1].Source;
    },

    deleteItem(item) {
      console.log("Delete Item: ", item);

      if (item !== -1) {
        this.items.splice(item, 1);
      }
    },

    formatContact(Contact) {
      const [Number, Email] = Contact.split(" ");
      return `  ${Number}<br>${Email}`;
    },

    // Modal form Validation

    ModalFormValidate() {
      if (this.$refs.form.validate()) {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = String(today.getFullYear()).slice(-2);

        if (this.EditingEntry === true) {
          console.log("editing started");
          (this.items[
            this.EditingEntryIndex
          ].RegistrationDate = `${day}/${month}/${year}`),
            (this.items[
              this.EditingEntryIndex
            ].ClientName = `${this.FirstName} ${this.LastName}`),
            (this.items[
              this.EditingEntryIndex
            ].Contact = `${this.NumberInput} ${this.Email}`),
            (this.items[this.EditingEntryIndex].ReferredBy =
              this.SelectRefferedBy),
            (this.items[this.EditingEntryIndex].Source = this.SelectSource);
        } else if (this.EditingEntry === false) {
          this.items.push({
            id: this.items.length + 1,
            RegistrationDate: `${day}/${month}/${year}`,
            ClientName: `${this.FirstName} ${this.LastName}`,

            Contact: `${this.NumberInput} ${this.Email}`,

            ReferredBy: this.SelectRefferedBy,
            Source: this.SelectSource,
          });
        }

        this.$refs.form.reset();
        this.dialog = false;
        this.EditingEntry = false;
      }
    },
  },
};
</script>



<style scoped>
.LeadsTopBanner {
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.SalesPortal {
  color: #ff7144;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  text-transform: uppercase;
}

.BannerText {
  font-size: 14px;
  line-height: 16.94px;
  font-weight: 400;
  font: Inter;
}

.LeadsTable > thead > tr > th:last-child {
  text-align: center !important;
}
.TableSearchSection {
  background-color: #d8d8d8;
}

.TableSearchBar {
  width: 70%;
}

table > .TableContainer {
  /* display: flex; */
  width: 100%;
  margin: 0 auto;
  /* align-items: center; */
  /* justify-content: space; */
}

.AddLeadBtn {
  background-color: #ff7144 !important;
  font-size: 14px;
  border-radius: 5px;
  text-align: right;
}

.BtnTextEdit,
.BtnTextDelete {
  font-size: 11px;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.contact-cell {
  white-space: pre-wrap;
  /* text-align: center; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

/* styling the modal */

.DialogBoxBanner {
  background-color: #ff7144;
  color: #ececec;
}

.AddLeadTitle {
  white-space: pre-line;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
}

.LeadDesc {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
}
/* styling the modal */
</style>