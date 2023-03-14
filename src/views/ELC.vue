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
              ? 'border border-2 text-white'
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
    <h2>Browse suggested activities</h2>
    <h4 class="my-6">Browse by stage</h4>
    <div
    class="tileHolder flex gap-4 items-stretch justify-center items-center"
    >
    <div
        class="transition px-2 max-w-[250px] text-center hover:cursor-pointer min-h-[100px] border border-2 "
        :class=" stageSelected === tile.name ? tile.selected : tile.color"
        v-for="(tile, index) in stages"
        style="line-height: 100px"
        @click="stageSelected === tile.name ? stageSelected = null : stageSelected = tile.name"
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
        :class="tileSelected === tile.name ? 'bg-brand-darkblue-dark hover:bg-brand-darkblue-dark font-bold text-white' : ''"
        v-for="(tile, index) in tiles"
        style="line-height: 100px"
        @click="tileSelected === tile.name ? tileSelected = null : tileSelected = tile.name"
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
        <p class="m-2 mb-0" v-for="(filter, idx) in appliedFilters">
          <small>
            <strong>{{idx}}</strong>
            <select v-model="appliedFilters[idx].selected">
              <option selected></option>
              <option v-for="(option) in filter.labels" :value="option">{{ option }}</option>
            </select>
          </small>
        </p>
      </div>
      <h4>Recommended activities</h4>
        <TransitionGroup class="resultBox grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4" name="list" tag="div">
        <a :href="result.link" target="_blank" class="p-4 m-4 shadow-lg border text-center transition hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer" v-for="result in filteredResults">
          <h5 class="mb-4"><strong>{{result.name}}</strong></h5>
         <div class="flex flex-wrap"><p class="m-1">Class size:</p><span class="px-4 m-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full" v-for="classSize in result.filters['Class size']"><small>{{classSize}}</small></span></div>
          <div class="flex flex-wrap"><p class="m-1">Mode:</p><span class="px-4 m-1 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-medium rounded-full" v-for="delivery in result.filters['Mode of delivery']"><small>{{delivery}}</small></span></div>
          <div class="flex flex-wrap"><p class="m-1">Class time:</p><span class="px-4 m-1 bg-green-200 hover:bg-green-300 text-green-800 text-sm font-medium rounded-full" v-for="time in result.filters['Class time']"><small>{{time}}</small></span></div>
          <div class="flex flex-wrap"><p class="m-1">Prep time:</p><span class="px-4 m-1 bg-purple-200 hover:bg-purple-300 text-purple-800 text-sm font-medium rounded-full" v-for="time in result.filters['Preparation time']"><small>{{time}}</small></span></div>
        </a>
        </TransitionGroup>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import activities from "@/assets/emi_activities.json"

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
    "title": "Checking and consolidating prior knowledge",
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

const stages = [
  { name: "Activating prior knowledge", color: "border-chartreuse-light hover:bg-chartreuse-light hover:text-white", selected: "border-chartreuse-light bg-chartreuse-light text-white font-bold" },
  { name: "Supporting students with subject specific vocabulary",  color: "border-chartreuse-mid hover:bg-chartreuse-mid hover:text-white",  selected: "border-chartreuse-mid bg-chartreuse-mid text-white font-bold" },
  { name: "Checking and consolidating prior knowledge", color: "border-chartreuse-dark border-2 hover:bg-chartreuse-dark hover:text-white",  selected: "border-chartreuse-dark bg-chartreuse-dark text-white font-bold" },
  { name: "Summarising content", color: "border-chartreuse-darkest hover:bg-chartreuse-darkest hover:text-white",  selected: " border-chartreuse-darkest bg-chartreuse-darkest text-white font-bold" }
]

const tiles = [
  { name: "Flipped learning" },
  { name: "Working with teaching assistants" },
  { name: "Scaffolding ideas" },
  { name: "Translanguaging" },
  { name: "Questioning" },
  { name: "Collaborative activities" },
  { name: "Discussion based activities" },
  { name: "Giving feedback" },
  { name: "Active learning in STEM" }
];

let appliedFilters = ref({
  "Class size": {
    "labels": ["Small","Medium", "Large"],
    "selected": null
  },
  "Mode of delivery": {
    "labels": ["Face-to-face","Online", "Both"],
    "selected": null
  },
  "Class time": {
    "labels": ["<5 minutes","5-10 minutes", "10+ minutes"],
    "selected": null
  },
  "Preparation time": {
    "labels": ["<5 minutes","5-10 minutes", "10+ minutes"],
    "selected": null
  },
});

let englishScore = ref(0);

let stageSelected = ref();
let tileSelected = ref();


let filteredStage = computed(() => {
  return Object.values(activities).filter(activity => {
    const stage = activity.stage
    return stage.includes(stageSelected.value)
  });
});

let filteredTile = computed(() => {
  if(stageSelected.value) {
    return filteredStage.value.filter(activity => {
      const tile = activity.tiles
      return tile.includes(tileSelected.value)
    });
  } else {
    return Object.values(activities).filter(activity => {
      const tile = activity.tiles
      return tile.includes(tileSelected.value)
    });
  }
});

let filteredResults = computed(() => {
  if(stageSelected.value && tileSelected.value) {
    return Object.values(filteredTile.value).filter(activity => {
      const filters = activity.filters;
      return Object.keys(appliedFilters.value).every(filterKey => {
        const selectedValue = appliedFilters.value[filterKey].selected;
        if (!selectedValue) {
          return filteredTile.value; // if filter is not selected, don't filter by it
        }
        const activityValues = filters[filterKey];
        return activityValues.includes(selectedValue);
      });
    });
  } else if(stageSelected.value) {
    return Object.values(filteredStage.value).filter(activity => {
      const filters = activity.filters;
      return Object.keys(appliedFilters.value).every(filterKey => {
        const selectedValue = appliedFilters.value[filterKey].selected;
        if (!selectedValue) {
          return filteredStage.value; // if filter is not selected, don't filter by it
        }
        const activityValues = filters[filterKey];
        return activityValues.includes(selectedValue);
      });
    });
  } else if(tileSelected.value) {
    return Object.values(filteredTile.value).filter(activity => {
      const filters = activity.filters;
      return Object.keys(appliedFilters.value).every(filterKey => {
        const selectedValue = appliedFilters.value[filterKey].selected;
        if (!selectedValue) {
          return filteredTile.value; // if filter is not selected, don't filter by it
        }
        const activityValues = filters[filterKey];
        return activityValues.includes(selectedValue);
      });
    });
  } else {
    return Object.values(activities).filter(activity => {
      const filters = activity.filters;
      return Object.keys(appliedFilters.value).every(filterKey => {
        const selectedValue = appliedFilters.value[filterKey].selected;
        if (!selectedValue) {
          return true; // if filter is not selected, don't filter by it
        }
        const activityValues = filters[filterKey];
        return activityValues.includes(selectedValue);
      });
    });
  }
});


</script>

<style>
h2 {
  font-size: 2rem !important;
  line-height: 1.05;
  margin: 2rem 0 0.7rem !important;
  letter-spacing: 0.02rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0px);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
