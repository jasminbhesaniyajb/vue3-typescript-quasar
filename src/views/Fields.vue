<template>
  <div class="q-pa-md">
    <h4>Fields</h4>
    <!-- <draggable v-model="items">
      <template v-slot:item="{ item }">
        <div>
          {{ item.title }}
        </div>
      </template>
    </draggable> -->
    <!--  -->
    <div class="flex items-center">
      <div
        class="drop-zone"
        @drop.prevent="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <ul>
          <li
          :class="{active: isActive}"
            v-for="(item,index) in option"
            :key="index"
            draggable="true"
            @dragstart="startDrag($event, item)"
            @click="selectedItem(item, index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="q-mx-xl text-center">
         <q-btn @click="AddSelectItem" color="primary" icon="keyboard_double_arrow_right" label="Add Fields" /> <br />
         <q-btn @click="RemoveSelectItem" class="q-mt-md" color="primary" icon="keyboard_double_arrow_left" label="Remove Field" />
      </div>
      <div
        class="drop-zone"
        @drop.prevent="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <ul>
          <li
            v-for="(item,index) in option1"
            :key="index"
            @dragstart="startDrag($event, item)"
            draggable="true"
            @click="selectedLeftItem(item, index)"
          >
            {{ item?.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
// import Draggable from "vue3-draggable";

export default {
  name: "Fields",
  components: {
    // Draggable,
  },

  setup() {
    const isActive = ref(false)
    const option = ref([
      { id: 0, title: "Google", list: 1 },
      { id: 1, title: "Facebook", list: 1 },
      { id: 2, title: "Twitter", list: 1 },
      { id: 3, title: "Apple", list: 2 },
      { id: 4, title: "Insta", list: 1 },
    ]);

    const option1 = ref([
      { id: 4, title: "abc", list: 2 },
    ]);

    const selectValue = ref([]);
    const selectedIndex = ref("")
    const selectLeftValue = ref([]);
    const selectedleftIndex = ref("")

    onMounted(() => {
      console.log("call mounted");
    });
    const menusList = computed(() => console.log("call computed method"));

    // const getList = (list) => {
    //   return option.value.filter((item) => item.list == list);
    // };

    const startDrag = (event, item) => {
      console.log("drag event", item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = option.value.find((item) => item.id == itemID);
      console.log("list", list);
      console.log("item drop", item);
      // option.value = list
      option.value.splice(itemID,1)
      option1.value.push(item)
    };

    const selectedItem = (data, idx) => {
      selectValue.value = data;
      selectedIndex.value = idx
    };

    const AddSelectItem = () => {
      option1.value.push(selectValue.value)
      option.value.splice(selectedIndex.value, 1)
    };

    const selectedLeftItem = (data, idx) => {
      console.log("idx", idx);
      selectedleftIndex.value = idx
      selectLeftValue.value = data
    }

    const RemoveSelectItem = () => {
      option.value.push(selectLeftValue.value)
      option1.value.splice(selectedleftIndex.value, 1)
    }

    return {
      // items,
      option,
      menusList,
      startDrag,
      onDrop,
      // getList,
      selectedItem,
      AddSelectItem,
      selectValue,
      option1,
      isActive,
      RemoveSelectItem,
      selectedIndex,
      selectedLeftItem,
      selectLeftValue,
      selectedleftIndex
    };
  },
};
</script>
<style scoped>
.multi-select {
  width: 200px;
}
.drop-zone {
  width: 180px;
  height: 200px;
  border: 1px solid black;
  overflow-y: scroll;
}
ul {
  list-style: none;
  padding-left: 10px;
}
.active {
  background: lightblue;
}
ul li:hover {
  background: lightblue;
}
</style>