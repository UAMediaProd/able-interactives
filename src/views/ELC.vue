<template>
  <div :class="wrapperClass">
    <h2>EMI active learning tool</h2>
    <div class="flex flex-wrap justify-center items-center">
      <div
        v-for="(item, index, idx) in slider"
        :key="index"
        class="max-w-[170px] min-h-[140px] text-center flex"
      >
        <div v-if="item.grouped" class="">
          <div v-for="(item, index) in item.items" :key="index">
            <div class="p-4 transition font-bold mt-[-2px] min-h-[73px]"   :class="
            englishScore >= item.threshold
              ? 'border cursor-pointer border-2 text-white'
              : 'border-2'
          "
                 :style=" englishScore >= item.threshold ? `background-color: ${item.color}; border-color: ${item.color}; color: white;` :  `background color: white; border-color: ${item.color}; color: ${item.color};`">
               <span style="
            display: inline-block;
            vertical-align: middle;
            line-height: 18px;
          ">{{ item.title }}</span>
            </div>
          </div>
        </div>


        <div v-else
          class="p-2 transition font-bold min-h-[140px]"
          :class="
            englishScore >= item.threshold
              ? 'border cursor-pointer border-2 text-white'
              : 'border-2'
          "
          :style=" englishScore >= item.threshold ? `background-color: ${item.color}; border-color: ${item.color}; color: white;` :  `background color: white; border-color: ${item.color}; color: ${item.color};`"
             style="line-height: 125px;"
        >
          <span style="
            display: inline-block;
            vertical-align: middle;
            line-height: 18px;
          ">{{ item.title }}</span>
        </div>

        <div v-if="idx < Object.keys(slider).length - 1">
          <span style="line-height: 140px;" class="p-2 text-3xl font-bold">+</span>
        </div>
      </div>
    </div>
    <input
      v-model="englishScore"
      type="range"
      min="0"
      max="100"
      step="5"
      class="slider w-full mt-4"
      list="tickMarks"
    />
    <datalist id="tickMarks">
      <option v-for="n in 100" :value="n" :label="`${n}`"></option>
    </datalist>
    <p>
      Percentage of your class taught in English:
      <strong>{{ englishScore }}%</strong>
    </p>
    <h2>Browse suggestable activities</h2>
    <h4 class="my-6">Browse by stage</h4>
    <div
    class="tileHolder flex gap-4 items-stretch justify-center items-center"
    >
    <div
        class="transition px-2 max-w-[250px] text-center border border-brand-darkblue hover:bg-brand-darkblue hover:text-white hover:cursor-pointer min-h-[100px]"
        v-for="(tile, index) in stages"
        style="line-height: 100px"
    >
        <span
            style="
            display: inline-block;
            vertical-align: middle;
            line-height: 24px;
          "
        >{{ tile.name }}</span
        >
    </div>
  </div>
    <br>

    <h4 class="my-6">Browse additional resources</h4>
    <div
      class="tileHolder mb-4 flex flex-wrap gap-4 items-stretch justify-center items-center"
    >
      <div
        class="transition px-2 text-center border border-brand-darkblue hover:bg-brand-darkblue hover:text-white hover:cursor-pointer min-h-[100px]"
        v-for="(tile, index) in tiles"
        style="line-height: 100px"
      >
        <span
          style="
            display: inline-block;
            vertical-align: middle;
            line-height: 24px;
          "
          >{{ tile.name }}</span
        >
      </div>
    </div>
    <h2>Find a suitable activity</h2>
    <div id="results">
      <div class="filterCont border p-1 grid grid-cols-4 gap-5">
        <p class="m-2 mb-0" v-for="(filter, idx) in filters">
          <small>
            <select>
              <option disabled selected>{{ idx }}</option>
              <option v-for="(option, key) in filter">{{ key }}</option>
            </select>
          </small>
        </p>
      </div>
      <p class="mt-4">{{ filterResults() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const wrapperClass = "adx max-w-[90%] mx-auto";


const slider = {
  "activate": {
    "title": "Activating prior knowledge",
    "threshold": 25,
    "link": "",
    color: "#bcd8a7"
  },
  "lectureIntro-1-Group": {
    "grouped": true,
    "items": {
      "lectureIntro": {
        "title": "Lecture input (intro)",
        "threshold": 10,
        "link": "",
        color: "#94dff6"
      },
      "lecturePart1": {
        "title": "Lecture input (part 1)",
        "threshold": 25,
        "link": "",
        color: "#4cc9f0"
      },
    }
  },
  "support": {
    "title": "Supporting students with subject specific vocabulary",
    "threshold": 10,
    "link": "",
    color: "#90be6d"
  },
  "lecture-2-3Group": {
    "grouped": true,
    "items": {
      "lecturePart2": {
        "title": "Lecture input (part 2)",
        "threshold": 50,
        "link": "",
        color: "#669cc4"
      },
      "lecturePart3": {
        "title": "Lecture input (part 3)",
        "threshold": 75,
        "link": "",
        color: "#337bb0"
      },
    }
  },
  "check":{
    "title": "Checking and consolidating understanding",
    "threshold": 50,
    "link": "",
    color: "#8eccb9"

  },
  "lecture-4-conc-Group": {
    "grouped": true,
    "items": {
      "lecturePart4": {
        "title": "Lecture input (part 4)",
        "threshold": 100,
        "link": "",
        color: "#005a9c"
      },
      "lectureConclusion": {
        "title": "Lecture input (conclusion)",
        "threshold": 100,
        "link": "",
        color: "#102535"
      }
    }
  },
  "summary": {
    "title": "Summarising content",
    "threshold": 75,
    "link": "",
    color: "#43aa8b"
  }
}


const tiles = [
  { name: "Flipped learning" },
  { name: "Working with teaching assistants" },
  { name: "Scaffolding ideas" },
  { name: "Translanguaging" },
  { name: "Questioning" },
  { name: "Collaborative activities" },
  { name: "Discussion-based activities" },
  { name: "Giving feedback" },
  { name: "Active learning in STEM" }
];

const stages = [
  { name: "Activating prior knowledge" },
  { name: "Supporting students with subject specific vocabulary" },
  { name: "Checking and consolidating prior knowledge" },
  { name: "Summarising content" }
]

let englishScore = ref(0);
let filters = ref({
  "Class size": {
    "Small": false,
    "Medium": false,
    "Large": false,
  },
  "Mode of delivery": {
    "Face-to-face": false,
    "Online": false,
    "Both": false,
  },
  "Class time": {
    "<5 minutes": false,
    "5-10 minutes": false,
    "10+ minutes": false,
  },
  "Preparation time": {
    "<5 minutes": false,
    "5-10 minutes": false,
    "10+ minutes": false,
  },
});

function filterResults() {
  return "Holding place for results";
}
</script>

<style>
h2 {
  font-size: 2rem !important;
  line-height: 1.05;
  margin: 2rem 0 0.7rem !important;
  letter-spacing: 0.02rem;
}
</style>
