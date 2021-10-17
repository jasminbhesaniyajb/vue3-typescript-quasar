<template>
  <div class="about">
    <h3>About page Emit: {{aboutPageTitle}}</h3>
    <Child :title="title" @changeTitle="updateTitle($event)"/>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
// import { Prop } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
import Child from "../components/Child.vue";


@Options({
  name: "About",
  components: {
    Child
  }
})
export default class About extends Vue {
  public title = "pass data parent to child"
  public aboutPageTitle = ""

  public updateTitle = (ParentTitle: string) => {
    console.log("update-title:", ParentTitle);
    this.aboutPageTitle = ParentTitle
  }
}
</script>

