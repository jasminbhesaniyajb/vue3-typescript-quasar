<template>
  <div>
    <q-layout>
      <q-page-container class="q-px-md">
        <q-page>
          <div class="flex flex-center window-height">
            <q-card class="my-card w-50">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">create your Account.</div>
                <div class="text-subtitle2">Is it awesome app to use.</div>
              </q-card-section>

              <q-separator />

              <div class="q-my-xl q-px-lg">
                <q-form>
                  <div class="q-mb-lg">
                    <q-input label="Name" type="text" v-model="name" />
                  </div>
                  <div class="q-mb-lg">
                    <q-input label="Email" type="email" v-model="email" />
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
                      label="Signup"
                      @click="onSignup"
                    />
                  </div>
                  <div class="text-center">
                    <router-link
                      to="/login"
                      class="text-decoration-none text-primary"
                      >Click here if you have already Account.</router-link
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
import { useRouter } from "vue-router";
import { Options, Vue } from "vue-class-component";
import Axios from "axios";
import { useQuasar } from "quasar";


@Options({
  name: "Signup",
  //   components: {
  //   }
})
export default class Signup extends Vue {
    public router = useRouter()
    public q = useQuasar();
    public name = ""
    public email = ""
    public password = ""

    public onSignup = async () => {
      const signup = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
       try {
        await Axios.post(`http://localhost:4000/signup`, signup, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((data) => {
          console.log(`data`, data);
          if (data.status == 201 || data.data == 201) {
            localStorage.setItem("auth-token", data.data.token);
            localStorage.setItem("userInfo", JSON.stringify(data.data));
            this.router.push({ name: "Login" });
            this.q.notify({
            position: "top",
            message: "new user created successfully...",
            color: "green-4",
          });
          }
        });
      } catch (error) {
        console.log(`error`, error);
      }
    }

}

</script>
<style scoped>
.w-50 {
  width: 500px !important;
}
.text-decoration-none {
  text-decoration: none;
}
</style>