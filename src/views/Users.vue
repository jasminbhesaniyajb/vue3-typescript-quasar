<template>
  <div>
    <div class="q-pa-md">
      <q-markup-table v-if="loading">
        <thead>
          <tr>
            <th class="text-left">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>

     <!-- quasar table -->
    <div class="q-pa-md" v-if="loading === false">
      <q-table
        title="Users List"
        :columns="columns"
        :rows="userList[0]"
        :filter="filter"
        row-key="name"
      >
      <template v-slot:body-cell-avatar="props">
          <q-td :props="props">
            <img :src="props.row.avatar" class="avatar-img" alt="">
          </q-td>
        </template>
        <template v-slot:body-cell-view="props">
          <q-td :props="props">
            <router-link :to="{ name: 'SingleUser', params: { id: props.row.id } }">
                <q-icon name="visibility" class="text-h5" />
            </router-link>
          </q-td>
        </template>
      </q-table>
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts">
// import ViewIcon from '../assets/images/view-icon.svg';
import { Options, Vue } from "vue-class-component";
import Axios from "axios";
@Options({
  name: "Users",
    components: {
      // ViewIcon
    }
})
export default class Users extends Vue {
  public loading = false;
  public userList: any = [];
  public filter = "";
  public columns: Array<any> = [
    {
      name: "avatar",
      align: "center",
      label: "Avatar",
      field: "avatar",
      sortable: false,
    },
    {
      name: "first_name",
      label: "First Name",
      align: "left",
      field: "first_name",
      sortable: true,
    },
    {
      name: "last_name",
      align: "left",
      label: "Last Name",
      field: "last_name",
      sortable: true,
    },
    {
      name: "email",
      align: "left",
      label: "Email",
      field: "email",
      sortable: true,
    },
    {
      name: "view",
      align: "left",
      label: "View",
      field: "view",
      sortable: false,
    },
  ];

  mounted() {
    this.getUser();
  }

  public getUser = async () => {
    try {
      this.loading = true;
      await Axios.get(`https://reqres.in/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {
        if (data.status == 200) {
          this.userList.push(data.data.data)
        }
      });
    } catch (error) {
      console.log(`error`, error);
    } finally {
      this.loading = false;
    }
  };
}
</script>