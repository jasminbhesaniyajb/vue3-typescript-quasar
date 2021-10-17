<template>
  <div class="todo-app-sec q-pa-md">
    <!-- <div class="q-pa-md row items-start q-gutter-md">
      <div class="col-lg-6 col-md-6 col-12 q-mx-auto">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h5 text-center">Add User</div>
            <q-form action="" @submit.prevent="onSubmit" @reset="onReset">
              <q-input
                v-model="fname"
                label="First Name"
                :rules="[(val) => !!val || 'First Name is required']"
                ref="form"
              />
              <q-input
                v-model="lname"
                label="Last Name"
                :rules="[(val) => !!val || 'Last Name is required']"
              />
              <q-input
                v-model="email"
                label="Enter Email"
                :rules="[(val) => !!val || 'Email is required']"
              />
              <q-input
                v-model="phone"
                label="Enter phone"
                maxlength="10"
                :rules="[(val) => !!val || 'Phone number is required']"
              />
              <q-select
                v-model="city"
                :options="options"
                label="City"
                :rules="[(val) => val.length > 0 || 'City is required']"
              />
              <div class="q-mt-lg text-center">
                <q-btn
                  v-if="!showUpdateBtn"
                  type="submit"
                  color="primary"
                  class="q-ma-md"
                  label="Submit"
                />
                <q-btn
                  v-if="showUpdateBtn"
                  color="positive"
                  class="q-ma-md"
                  label="Update"
                  @click.prevent="updateList"
                />
                <q-btn outline color="primary" type="reset" label="Reset" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div> -->
    <!--  -->
    <q-btn color="primary" label="Add User" class="q-ma-md" @click="small = true"/>
       <q-dialog
      v-model="small"
    >
      <q-card style="width: 900px">
        <q-card-section>
          <div class="text-h6">Add User</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-form action="" @submit.prevent="onSubmit" @reset="onReset">
              <q-input
                v-model="fname"
                label="First Name"
                :rules="[(val) => !!val || 'First Name is required']"
                ref="form"
              />
              <q-input
                v-model="lname"
                label="Last Name"
                :rules="[(val) => !!val || 'Last Name is required']"
              />
              <q-input
                v-model="email"
                label="Enter Email"
                :rules="[(val) => !!val || 'Email is required']"
              />
              <q-input
                v-model="phone"
                label="Enter phone"
                maxlength="10"
                :rules="[(val) => !!val || 'Phone number is required']"
                for="phone_number"
              />
              <q-select
                v-model="city"
                :options="options"
                label="City"
                data-cy='select-input'
                :rules="[(val) => val.length > 0 || 'City is required']"
                for="city"
              />
              <div class="q-mt-lg text-center">
                <q-btn
                  v-if="!showUpdateBtn"
                  type="submit"
                  color="primary"
                  class="q-mr-md"
                  label="Submit"
                />
                <q-btn
                  v-if="showUpdateBtn"
                  color="positive"
                  class="q-mr-md"
                  label="Update"
                  @click.prevent="updateList"
                />
                <q-btn outline color="primary" class="q-mr-md" type="reset" label="Reset" />
                <q-btn outline color="primary" type="reset" label="Cancel" v-close-popup />
              </div>
            </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!--  -->
  <div class="q-pa-md">
    <q-markup-table v-if="loading">
      <thead>
        <tr>
          <th class="text-left"><q-skeleton animation="blink" type="text" /></th>
          <th class="text-right"><q-skeleton animation="blink" type="text" /></th>
          <th class="text-right"><q-skeleton animation="blink" type="text" /></th>
          <th class="text-right"><q-skeleton animation="blink" type="text" /></th>
          <th class="text-right"><q-skeleton animation="blink" type="text" /></th>
          <th class="text-right"><q-skeleton animation="blink" type="text" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
        </tr>
        <tr>
          <td class="text-left"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
        </tr>
        <tr>
          <td class="text-left"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
        </tr>
        <tr>
          <td class="text-left"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
        </tr>
        <tr>
          <td class="text-left"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
          <td class="text-right"><q-skeleton animation="blink" type="text" /></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
    <!--  -->
    <!-- quasar table -->
    <div class="q-pa-md" v-if="loading === false">
      <q-table
        title="Users List"
        :rows="allUserList"
        :columns="columns"
        :filter="filter"
        row-key="name"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              dense
              round
              flat
              color="primary"
              class="q-ma-md"
              icon="edit"
              @click="update(props.row, props.rowIndex)"
            >
              <q-tooltip class="bg-primary text-body2" :offset="[10, 10]">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn
              color="red"
              dense
              round
              flat
              @click="remove(props.rowIndex)"
              icon="delete"
            >
              <q-tooltip class="bg-red text-body2" :offset="[10, 10]">
                Delete
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
        <template v-slot:top-right>
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts">
// import { ref } from "vue";
// import { Component } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";
import { userType } from "@/type/UserList";
import { useQuasar } from "quasar";
import { FETCH_USERS } from "../service/users";
// import axios from "axios";

const users = namespace("users");

@Options({
  name: "Home",
  // components: {
  // }
})
export default class Home extends Vue {
  public options = ["Junagadh", "Rajkot", "Surat", "Hyderabad"];
  public filter = "";
  public columns: Array<any> = [
    {
      name: "fname",
      label: "First Name",
      align: "left",
      field: "fname",
      sortable: true,
    },
    {
      name: "lname",
      align: "left",
      label: "Last Name",
      field: "lname",
      sortable: true,
    },
    {
      name: "email",
      align: "left",
      label: "Email",
      field: "email",
      sortable: true,
    },
    { name: "phone", align: "left", label: "Phone No.", field: "phone" },
    {
      name: "city",
      align: "left",
      label: "City",
      field: "city",
      sortable: true,
    },
    { name: "action", align: "center", label: "Action", field: "action" },
  ];
  public selectId: any = null;
  public showUpdateBtn = false;
  public q = useQuasar();
  public loading= true
  public small = false

  @users.Getter
  public allUserList!: Array<userType>;

  public fname = "";
  public lname = "";
  public email = "";
  public phone = "";
  public city = "";

  @users.Action
  public addList!: (add: userType) => void;
  onSubmit() {
    console.log("...adding new user");
    this.addList({
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      city: this.city,
    });
    this.small = false;
    this.q.notify({
      position: "top",
      message: "New user added successfully...",
      color: "green-4",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
    this.loading = false
    // this.onReset();
    // this.$q.dialog.close()
  }

  @users.Action
  public removeUser!: (idx: number) => void;
  remove(idx: number) {
    console.log("remove item index", idx);
    this.allUserList.splice(idx, 1);
    this.q.notify({
      position: "top",
      message: "User deleted successfully...",
      color: "red-4",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  }

  update(data: any, idx: number) {
    console.log("edit", idx);
    console.log("data", data);
    this.selectId = idx;
    this.fname = data.fname;
    this.lname = data.lname;
    this.email = data.email;
    this.phone = data.phone;
    this.city = data.city;
    this.showUpdateBtn = true;
    this.small = true;
  }

  updateList() {
    this.allUserList.splice(this.selectId, 1, {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      city: this.city,
    });
    this.showUpdateBtn = false;
    this.q.notify({
      position: "top",
      message: "User updated successfully...",
      color: "green-4",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    });
  }

  onReset(): void {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.phone = "";
    this.city = "";
    // (this.$refs.form as HTMLFontElement).reset();
    // this.$refs.form as Vue & {reset: ()=> any}
  }

  mounted() {
    setTimeout(() => (this.loading = false), 2000);
    this.getUser();
  }

  public getUser = async () => {
    try {
      const data = await FETCH_USERS()
      console.log("services api", data);
      
    } catch (error) {
      console.log("err", error);
      
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 20px;
}
table,
th,
td {
  border: 1px solid black;
}
</style>
