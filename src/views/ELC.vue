<template>
  <div :class="wrapperClass">
    <h2>Slider</h2>
    <div class="flex flex-wrap justify-center items-stretch">
      <div
        v-for="(item, index) in slider"
        :key="index"
        class="max-w-[180px] text-center shadow m-1"
        style="line-height: 100px"
      >
        <div
          class="p-2 h-full transition font-bold rounded"
          :class="
            englishScore >= item.threshold
              ? 'border cursor-pointer border-2 text-white'
              : 'border-2'
          "
          :style=" englishScore >= item.threshold ? `background-color: ${item.color}; border-color: ${item.color}; color: white;` :  `background color: white; border-color: ${item.color}; color: ${item.color};`"
        >
          <span style="
            display: inline-block;
            vertical-align: middle;
            line-height: 18px;
          ">{{ item.title }}</span>
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
    <h2>Browse</h2>
    <div
      class="tileHolder grid md:grid-cols-5 sm:grid-cols-3 gap-4 items-stretch justify-center items-center"
    >
      <div
        class="transition px-2 text-center border border-brand-darkblue hover:bg-brand-darkblue hover:text-white hover:cursor-pointer h-[100px]"
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
    <h2>Results</h2>
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
  activate: {
    title: "Activate prior knowledge",
    threshold: 50,
    link: "",
    color: "#4cc9f0"
  },
      lectureIntro: {
        title: "Lecture input (intro)",
        threshold: 10,
        link: "",
        color: "#fa6769"
      },
      lecturePart1: {
        title: "Lecture input (part 1)",
        threshold: 25,
        link: "",
        color: "#f8961e"
      },
  support: {
    title: "Supporting students with subject specific vocabulary",
    threshold: 50,
    link: "",
    color: "#f9c74f"
  },
      lecturePart2: {
        title: "Lecture input (part 2)",
        threshold: 50,
        link: "",
        color: "#90be6d"
      },
      lecturePart3: {
        title: "Lecture input (part 3)",
        threshold: 75,
        link: "",
        color: "#43aa8b"
      },
  check: {
    title: "Checking and consolidating understanding",
    threshold: 25,
    link: "",
    color: "#a279b5"
  },
      lecturePart4: {
        title: "Lecture input (part 4)",
        threshold: 100,
        link: "",
        color: "#005a9c"
      },
      lectureConclusion: {
        title: "Lecture input (conclusion)",
        threshold: 100,
        link: "",
        color: "#102535"
      },
  summary: {
    title: "Summary",
    threshold: 10,
    link: "",
    color: "#d40000"
  },
};

const tiles = [
  { name: "Flipped learning" },
  { name: "Working with TAs" },
  { name: "Scaffolding ideas" },
  { name: "Translanguaging" },
  { name: "Questioning" },
  { name: "Collaborative activities" },
  { name: "Discussion-based activities" },
  { name: "Activating prior knowledge" },
  { name: "Checking and consolidating prior knowledge" },
  { name: "Giving feedback" },
  { name: "Summarising content" },
  { name: "Supporting students with subject-specific vocabulary" },
  { name: "Active learning in the sciences" },
];

let englishScore = ref(0);
let filters = ref({
  Size: {
    Small: false,
    Medium: false,
    Large: false,
  },
  Mode: {
    "Face-to-face": false,
    Online: false,
    both: false,
  },
  "Class time": {
    "<5": false,
    "5-10": false,
    "10+": false,
  },
  "Prep time": {
    "<5": false,
    "5-10": false,
    "10+": false,
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
