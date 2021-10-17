<template>
  <div>
    <div class="row q-mt-lg">
      <div class="col-lg-4 col-md-4 col-12 q-mx-auto">
        <q-card class="my-card">
          <q-card-section>
          <div class="text-center">
          <img :src="singleUser.avatar" class="single-user-img" alt="">
          <h5 class="q-my-sm">{{singleUser.first_name}} {{singleUser.last_name}}</h5>
          </div>
          <p><span class="text-bold">Email :</span> {{singleUser.email}}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component } from "vue-property-decorator";
// import { useRouter } from "vue-router";
import { Options, Vue } from "vue-class-component";
import Axios from "axios";

@Options({
  name: "SingleUser",
})
export default class SingleUser extends Vue {
  // public router = useRouter();
  public singleUser: any= {};
  public userId: any = null;

  mounted() {
    this.userId = this.$route.params.id;
    console.log("params id :", this.userId);
    this.getSingleUser();
  }
  public getSingleUser = async () => {
    try {
      await Axios.get(`https://reqres.in/api/users/${this.userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {
        console.log("api call singleUser success", data.data.data);
        this.singleUser = data.data.data;
      });
    } catch (error) {
      console.log(`err`, error);
    }
  };
}
</script>
<style scoped>
.single-user-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>