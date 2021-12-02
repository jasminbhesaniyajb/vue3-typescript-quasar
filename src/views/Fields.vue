<template>
  <div class="q-px-md q-pt-md">
    <div class="row no-wrap justify-around flex-center">
      <div
        v-mutation="handler1"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="drop-target rounded-borders overflow-hidden scroll q-pa-sm"
        id="firstBox"
      >
        <template v-for="item in tableData" :key="item.id">
          <p
            draggable="true"
            @dragstart="onDragStart"
            @click="dragClick"
            :id="item.id"
            class="q-pa-xs"
          >
            {{ item.value }}
          </p>
        </template>
      </div>
      <div>
        <div class="text-center">
        <button @click="Add">&gt;&gt;</button>
        <p>Add to report field</p>
        </div>
        <div class="text-center">
        <button @click="remove">&lt;&lt;</button>
        <p>Remove from report field</p>
        </div>
      </div>

      <div
        v-mutation="handler2"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="drop-target rounded-borders overflow-hidden scroll q-pa-sm"
        id="lastBox"
      >
        <template v-for="item in tableDataTwo" :key="item.id">
          <p
            draggable="true"
            @dragstart="onDragStart"
            @click="dragClick"
            :id="item.id"
            class="q-pa-xs"
          >
            {{ item.value }}
          </p>
        </template>
      </div>
    </div>
    <div class="q-mt-lg">
      firstBox {{ firstBox }} <br />
      <br />
      lastBox {{ lastBox }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const tableData = [
  {
    id: 1,
    value: "item1",
  },
  {
    id: 2,
    value: "item2",
  },
  {
    id: 3,
    value: "item3",
  },
  {
    id: 4,
    value: "item4",
  },
  {
    id: 5,
    value: "item5",
  },
  {
    id: 6,
    value: "item6",
  },
];

const tableDataTwo = [
  {
    id: 7,
    value: "item7",
  },
  {
    id: 8,
    value: "item8",
  },
  {
    id: 9,
    value: "item9",
  },
  {
    id: 10,
    value: "item10",
  },
  {
    id: 11,
    value: "item11",
  },
  {
    id: 12,
    value: "item12",
  },
];
import { onMounted } from "vue";
export default {
  setup() {
    const status1 = ref([]);
    const status2 = ref([]);
    const parentId = ref("");
    const child = ref(null);
    const firstBox = ref([]);
    const lastBox = ref([]);

    onMounted(() => {
      firstBox.value.push(...tableData);
      lastBox.value.push(...tableDataTwo);
    });

    return {
      status1,
      status2,
      tableData,
      tableDataTwo,
      firstBox,
      lastBox,

      handler1(mutationRecords) {
        firstBox.value = [];
        const first = document.getElementById("firstBox").children;
        for (let i = 0; i < first.length; i++) {
          firstBox.value.push({
            id: Number(first[i].id),
            value: first[i].innerHTML,
          });
        }

        status1.value = [];
        for (const index in mutationRecords) {
          const record = mutationRecords[index];
          const info = `type: ${record.type}, nodes added: ${
            record.addedNodes.length > 0 ? "true" : "false"
          }, nodes removed: ${
            record.removedNodes.length > 0 ? "true" : "false"
          }, oldValue: ${record.oldValue}`;
          status1.value.push(info);
        }
      },

      handler2(mutationRecords) {
        lastBox.value = [];
        const first = document.getElementById("lastBox").children;
        for (let i = 0; i < first.length; i++) {
          lastBox.value.push({
            id: Number(first[i].id),
            value: first[i].innerHTML,
          });
        }

        status2.value = [];
        for (const index in mutationRecords) {
          const record = mutationRecords[index];
          const info = `type: ${record.type}, nodes added: ${
            record.addedNodes.length > 0 ? "true" : "false"
          }, nodes removed: ${
            record.removedNodes.length > 0 ? "true" : "false"
          }, oldValue: ${record.oldValue}`;
          status2.value.push(info);
        }
      },

      // store the id of the draggable element
      onDragStart(e) {
        e.dataTransfer.setData("text", e.target.id);
        e.dataTransfer.dropEffect = "move";
      },

      Add() {
        if (parentId.value === "firstBox") {
          child.value.parentNode.removeChild(child.value);
          const lastBox = document.getElementById("lastBox");
          lastBox.appendChild(child.value);
          child.value.classList.remove("red");
        }
      },
      remove() {
        if (parentId.value === "lastBox") {
          child.value.parentNode.removeChild(child.value);
          const lastBox = document.getElementById("firstBox");
          lastBox.appendChild(child.value);
          child.value.classList.remove("red");
        }
      },

      dragClick(e) {
        if (child.value !== null) {
          child.value.classList.remove("red");
        }
        parentId.value = "";
        child.value = null;
        parentId.value = e.target.parentNode.id;
        child.value = document.getElementById(e.target.id);
        child.value.classList.add("red");
      },

      onDragEnter(e) {
        // don't drop on other draggables
        if (e.target.draggable !== true) {
          e.target.classList.add("drag-enter");
        }
      },

      onDragLeave(e) {
        e.target.classList.remove("drag-enter");
      },

      onDragOver(e) {
        e.preventDefault();
      },

      onDrop(e) {
        e.preventDefault();

        // don't drop on other draggables
        if (e.target.draggable === true) {
          return;
        }

        const draggedId = e.dataTransfer.getData("text");
        const draggedEl = document.getElementById(draggedId);

        // check if original parent node
        if (draggedEl.parentNode === e.target) {
          e.target.classList.remove("drag-enter");
          return;
        }

        // make the exchange
        draggedEl.parentNode.removeChild(draggedEl);
        e.target.appendChild(draggedEl);
        e.target.classList.remove("drag-enter");
      },
    };
  },
};
</script>

<style scoped lang="sass">
.drop-target
  background-color:#fff !important
  border:1px solid #d5cfcf
.scroll
  overflow-y: scroll !important
  height:200px !important

.drop-target
  height: 400px
  width: 200px
  min-width: 200px
  background-color: gainsboro

.drag-enter
  outline-style: dashed

.box
  width: 100px
  height: 100px
  float: left
  cursor: pointer

@media only screen and (max-width: 500px)
  .drop-target
    height: 200px
    width: 100px
    min-width: 100px
    background-color: gainsboro

  .box
    width: 50px
    height: 50px

.box:nth-child(3)
  clear: both

.navy
  background-color: navy

.red
  background-color: firebrick

.green
  background-color: darkgreen

.orange
  background-color: orange
</style>