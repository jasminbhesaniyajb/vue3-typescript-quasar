<template>
  <div class="about">
    <q-layout>
      <q-page-container class="q-px-md">
        <q-page>
          <div class="flex flex-center window-height">
            <q-card class="my-card w-50 h-40">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">Login To Your Account</div>
                <div class="text-subtitle2">Is it awesome app to use.</div>
              </q-card-section>
              <q-separator />
              <div class="q-my-xl q-px-lg">
                <q-form>
                  <div class="q-mb-lg">
                    <q-input label="Email" v-model="email" />
                  </div>
                  <div class="q-mb-lg">
                    <q-input
                      label="Password"
                      v-model="password"
                      type="password"
                    />
                  </div>
                  <div class="q-mb-lg">
                    <q-btn
                      color="primary"
                      class="full-width"
                      label="Login"
                      @click="onLogin"
                    />
                  </div>
                  <div class="text-center">
                    <router-link
                      to="/signup"
                      class="text-decoration-none text-primary"
                      >Click here to create a new Account.</router-link
                    >
                  </div>
                </q-form>
              </div>
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import { useRouter } from "vue-router";
import { Options, Vue } from "vue-class-component";
import Axios from "axios";
import { useQuasar } from "quasar";
import {LOGIN_USER} from "../service/users"

@Options({
  name: "Login",
  //   components: {
  //   }
})
export default class Login extends Vue {
  public router = useRouter();
  public q = useQuasar();

  public email = "";
  public password = "";

  public onLogin = async () => {
    const login = {
      email: this.email,
      password: this.password,
    };
    try {
     const data = await LOGIN_USER(login)
     console.log("login data", data);
        // if (data) {
          // localStorage.setItem("auth-token", data.token);
          // localStorage.setItem("userInfo", JSON.stringify(data));
          this.router.push({ name: "Home" });
          console.log("login success");
          this.q.notify({
            position: "top",
            message: "User login successfully...",
            color: "green-4",
          });
        // }
    } catch (error) {
      console.log(`error`, error);
    }
  };
}
</script>
<style scoped>
.w-50 {
  width: 500px !important;
}
.h-40 {
  height: 400px;
}

</style>

