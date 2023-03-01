<template>
  <div :class="wrapperClass">
    <h2>Slider</h2>
    <div class="flex flex-wrap justify-center items-center">
      <div v-for="(item, index) in slider" :key="index" class="max-w-[160px] text-center shadow transition m-4">
        <div v-if="item.grouped" class="">
          <div v-for="(item, index) in item.items" :key="index">
            <div class="p-4 transition"  :class="englishScore >= item.threshold ? 'bg-brand-midblue-tint border border-brand-midblue mt-[-1px] cursor-pointer hover:bg-brand-midblue-lightest' : 'bg-brand-midblue border border-brand-midblue text-white mt-[-1px]'">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div v-else class="p-4" :class="englishScore >= item.threshold ? 'bg-brand-midblue-tint border border-brand-midblue cursor-pointer hover:bg-brand-midblue-lightest' : 'bg-brand-midblue border border-brand-midblue text-white'">
        <p>{{ item.title }}</p>

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
    <p>Percentage of your class taught in English: <strong>{{englishScore}}%</strong></p>

    <h2>Browse</h2>

    <div class="tileHolder grid md:grid-cols-5 sm:grid-cols-3 gap-4 items-stretch justify-center items-center">
      <div class="transition text-center border border-brand-darkblue hover:bg-brand-darkblue hover:text-white hover:cursor-pointer h-[100px]" v-for="(tile,index) in tiles" style="line-height: 100px;">
     <span style="display: inline-block;
  vertical-align: middle;
  line-height: 24px;">{{tile.name}}</span>
      </div>
    </div>



    <h2>Results</h2>

    <div id="results">
      <div class="filterCont border p-1 grid grid-cols-4 gap-5">
        <p class="m-2 mb-0" v-for="(filter,idx) in filters"><small>
          <select>
            <option disabled selected>{{ idx }}</option>
            <option v-for="(option,key) in filter">{{key}}</option>

          </select>
        </small></p>
      </div>

      <p class="mt-4">{{ filterResults() }}</p>

    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";

const wrapperClass = 'adx max-w-[90%] mx-auto'

const slider = {
  "activate": {
    "title": "Activate prior knowledge",
    "threshold": 50,
    "link": ""
  },
  "lectureIntro-1-Group": {
    "grouped": true,
    "items": {
      "lectureIntro": {
        "title": "Lecture input (intro)",
        "threshold": 10,
        "link": ""
      },
      "lecturePart1": {
        "title": "Lecture input (part 1)",
        "threshold": 25,
        "link": ""
      },
    }
  },
  "support": {
    "title": "Supporting students with subject specific vocabulary",
    "threshold": 50,
    "link": ""
  },
  "lecture-2-3Group": {
    "grouped": true,
    "items": {
      "lecturePart2": {
        "title": "Lecture input (part 2)",
        "threshold": 50,
        "link": ""
      },
      "lecturePart3": {
        "title": "Lecture input (part 3)",
        "threshold": 75,
        "link": ""
      },
    }
  },
  "check":{
    "title": "Checking and consolidating understanding",
    "threshold": 25,
    "link": ""
  },
  "lecture-4-conc-Group": {
    "grouped": true,
    "items": {
      "lecturePart4": {
        "title": "Lecture input (part 4)",
        "threshold": 100,
        "link": ""
      },
      "lectureConclusion": {
        "title": "Lecture input (conclusion)",
        "threshold": 100,
        "link": ""
      }
    }
  },
  "summary": {
    "title": "Summary",
    "threshold": 10,
    "link": ""
  }
}

const tiles = [
  {"name": "Flipped learning"},
  {"name": "Working with TAs"},
  {"name": "Scaffolding ideas"},
  {"name": "Translanguaging"},
  {"name": "Questioning"},
  {"name": "Collaborative activities"},
  {"name": "Discussion-based activities"},
  {"name": "Activating prior knowledge"},
  {"name": "Checking and consolidating prior knowledge"},
  {"name": "Giving feedback"},
  {"name": "Summarising content"},
  {"name": "Supporting students with subject-specific vocabulary"},
  {"name": "Active learning in the sciences"}
]

let englishScore = ref(0)
let filters = ref({
  "Size": {
    "Small": false,
    "Medium": false,
    "Large": false
  },
  "Mode": {
    "Face-to-face": false,
    "Online": false,
    "both": false
  },
  "Class time": {
    "<5": false,
    "5-10": false,
    "10+": false
  },
  "Prep time": {
    "<5": false,
    "5-10": false,
    "10+": false
  }

})

function filterResults() {
  return "Holding place for results"
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
