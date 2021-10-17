<template>
  <q-page>
    <h3 class="q-my-xs">Child component</h3>
    <h5 class="q-my-xs">
      <span class="text-primary">props: </span> {{ title }}
    </h5>
    <q-btn
      color="primary"
      class="q-mr-md q-px-lg"
      label="Emit"
      @click="changeTitleParent"
    />
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import { Prop, Emit } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Child"
})
export default class Child extends Vue {

  public parentTitle = "call Emit"
  @Prop({ type: String })
  public title!: string;

  @Emit('changeTitle')
  changeTitleParent() {
    console.log("Emit", this.parentTitle);
    return this.parentTitle
  }
}
</script>
