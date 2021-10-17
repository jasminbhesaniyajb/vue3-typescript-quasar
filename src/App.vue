<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="toggle-menu"
        />
        <q-toolbar-title> Vue3-ts-quasar </q-toolbar-title>

        <div>
          <q-chip v-if="userInfo" class="q-mr-md">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            {{userInfo.name}}
          </q-chip>
          <router-link to="/login">
            <q-btn
              color="white"
              text-color="black"
              label="Login"
            />
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Vue3-ts-vuex</q-item-label>
        <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="apps" />
          </q-item-section>
          <q-item-section>
            <router-link to="/">
              <q-item-label>CRUD-APP</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
        <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <router-link to="/about">
              <q-item-label>About</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
         <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="supervisor_account" />
          </q-item-section>
          <q-item-section>
            <router-link to="/users">
              <q-item-label>Users</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
         <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="task" />
          </q-item-section>
          <q-item-section>
            <router-link to="/task">
              <q-item-label>Task</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
         <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="low_priority" />
          </q-item-section>
          <q-item-section>
            <router-link to="/fields">
              <q-item-label>Drag & Drop Fields</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
        <q-item
          clickable
        >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
              <span @click="Logout">Logout</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { LocalStorage } from 'quasar';
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";


export default {
  name: "LayoutDefault",
  components: {
    // HelloWorld
  },

  setup() {
  const router = useRouter()
  const q = useQuasar();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  // const token = localStorage.getItem("auth-token");
  //   if (!token) {
  //     router.push("/login");
  //   }

   const Logout = () => {
     console.log("logout");
      localStorage.clear("auth-token");
      localStorage.clear("userInfo");
      router.push({ name: "Login" });
      q.notify({
            position: "top",
            message: "User logout successfully...",
            color: "red-4",
          });
    }
    return {
      leftDrawerOpen: ref(false),Logout,router,q,userInfo
    };
  },
};
</script>
