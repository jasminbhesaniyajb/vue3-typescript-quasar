<template>
    <div>
        <h5 v-for="(item,index) in items" :key="index">{{item}}</h5>
        <!-- <h3>First El: {{firstEl}}</h3> -->
        {{secondArr}}
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Task",
})
export default class Task extends Vue {
 public items: any = [
     ["id", "name", "address"],
     [1,"abc", "add1"],
     [2, "xyz", "add2"],
     [3,"acjdk", "add3"]
 ]

//  public firstEl: any = ""
 public secondArr: any = []

 mounted() {
    this.getItems();
 }
    public getItems = () => {
        // this.firstEl = [...this.items].shift()
            // const details: any= {}
            // for (let i = 0; i < this.items.length; i++) {
            //     // console.log("item[i]", item[i]);
            //     console.log("arr[i]", this.items[i]);
            //     for (let j = 0; j < this.items[i].length; j++) {
            //     console.log("arr[i][j]", this.items[i][j]);
            //         details['id'] = this.items[i][0]
            //         details['name'] = this.items[i][1]
            //     }
            // }
            // console.log("details", details);
            // this.secondArr.push(details);

        // second
        this.items.splice(0,1)
        this.items.map((item: any) => {
            const details: any= {}
            for (let i = 0; i < item.length; i++) {
                // for (let j = 0; j < item[i].length; j++) {
                    details['id'] = item[0]
                    details['name'] = item[1]
                    details['address'] = item[2]
                // }
            }
            console.log("details", details);
            this.secondArr.push(details);
        })

        //third
        // this.items.splice(0,1)
        // for(const item of this.items) {
        //     const obj: any = {};
        //     console.log("item", item);
        //     this.items.forEach((itm: any,index: any) => {
        //         obj[itm] = item[index]
        //     });
        //     this.secondArr.push(obj)
        //     // console.log("tempArr", tempArr);
        // }

    }
}

</script>