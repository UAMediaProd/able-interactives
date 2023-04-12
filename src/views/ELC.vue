<template>
  <div :class="wrapperClass">
    <h2>EMI active learning tool</h2>
    <div class="my-4">
    <p class="my-4">Use this visual tool to help you determine when and how to interject English into your teaching. Move the slider along the bar to indicate how much English you want to use in your class. Suggested lesson stages for the intended percentage of English use are highlighted.</p>

      <p class="my-4">You may then browse associated activities for the lesson stages shown in green in the Browse by stage section below
    </p>
    </div>
    <div class="flex justify-center items-center">
      <div
        v-for="(item, index, idx) in slider"
        :key="index"
        class="max-w-[145px] text-center flex text-sm"
      >
        <div v-if="item.grouped" class="">
          <div v-for="(item, index) in item.items" :key="index">
            <div class=" transition font-bold mt-[-2px] p-1 min-h-[25px]"   :class="
            englishScore >= item.threshold
              ? 'border border-2 text-white'
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
          class="p-1 my-auto transition font-bold min-h-[94px]"
          :class="
            englishScore >= item.threshold
              ? 'border border-2 text-white'
              : 'border-2'
          "
          :style=" englishScore >= item.threshold ? `background-color: ${item.color}; border-color: ${item.color}; color: white;` :  `background color: white; border-color: ${item.color}; color: ${item.color};`"
             style="display:table"

        >
          <span style="
            display: table-cell;
            vertical-align: middle;
            line-height: 18px;

          ">{{ item.title }}</span>
        </div>

        <div v-if="idx < Object.keys(slider).length - 1">
          <span style="line-height: 94px" class="p-1 text-2xl font-bold">+</span>
        </div>
        <div v-else>
          <span style="line-height: 94px" class="p-1 text-2xl font-bold"></span>
        </div>
      </div>
    </div>
    <div class="mb-4">
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
    <p  class="my-4"><strong>
      Percentage of your class taught in English:
      {{ englishScore }}%</strong>
    </p>
    </div>
    <div class="adx-cue" v-if="englishScoreFeedback.length > 1"><small>{{englishScoreFeedback}}</small></div>

    <h2>Browse suggested activities</h2>
    <div class="my-4">
      <p class="my-4">Click on the tiles below to browse activities by category. You may browse activities by the lesson stage they are used, which reflect the lesson stages in EMI active learning tool above. You may also browse the additional resource categories to expand your teaching repertoire. </p>

      <p class="my-4">Use the filter tool below to narrow your search and identify resources that are best for your context. Tiles for recommended activities will appear at the bottom of this screen. You may reset your search at any time.   </p>
    </div>
    <h4 class="my-6">Browse by stage</h4>
    <div
    class="tileHolder flex gap-2 items-stretch justify-center items-center"
    >
    <div
        class="transition text-sm px-2 max-w-[250px] text-center hover:cursor-pointer min-h-[60px] border border-2 "
        :class=" stageSelected === tile.name ? tile.selected : tile.color"
        v-for="(tile, index) in stages"
        style="line-height: 70px"
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
      class="tileHolder text-sm mb-2 flex flex-wrap gap-2 items-stretch justify-center"
    >
      <div
        class="transition px-2 text-center border border-brand-darkblue hover:bg-brand-darkblue hover:text-white hover:cursor-pointer min-h-[50px]"
        :class="tileSelected === tile.name ? 'bg-brand-darkblue-dark hover:bg-brand-darkblue-dark font-bold text-white' : ''"
        v-for="(tile, index) in tiles"
        style="line-height: 50px"
        @click="tileSelected === tile.name ? tileSelected = null : tileSelected = tile.name"
      >
        <span
          style="
            display: inline-block;
            vertical-align: middle;
            line-height: 24px;
          ">{{ tile.name }}</span
        >

      </div>

    </div>
    <h2>Find a suitable activity</h2>
    <p><strong>Filter:</strong></p>
    <div id="results">
      <div class="filterCont border p-1 grid grid-cols-4">
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
      <h4 id="resultsView">Recommended activities</h4>
        <TransitionGroup  class="resultBox lg:columns-4 md:columns-3 sm:columns-2 gap-2" name="list" tag="div">
        <a :href="result.link" target="_blank" class="w-full block p-4 mb-2 shadow-lg border text-center transition hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer" v-for="(result,idx) in filteredResults" :key="idx">
          <h5 class="mb-4"><strong>{{result.name}}</strong></h5>
         <div class="flex flex-wrap"><p class="m-1">Class size:</p><span class="px-2 m-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full" v-for="classSize in result.filters['Class size']"><small>{{classSize}}</small></span></div>
          <div class="flex flex-wrap"><p class="m-1">Class time:</p><span class="px-2 m-1 bg-green-200 hover:bg-green-300 text-green-800 text-sm font-medium rounded-full" v-for="time in result.filters['Class time']"><small>{{time}}</small></span></div>
          <div class="flex flex-wrap"><p class="m-1">Prep time:</p><span class="px-2 m-1 bg-purple-200 hover:bg-purple-300 text-purple-800 text-sm font-medium rounded-full" v-for="time in result.filters['Preparation time']"><small>{{time}}</small></span></div>
        </a>
        </TransitionGroup>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import activities from "@/assets/emi_activities.json"

const wrapperClass = "adx mx-auto";

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

const stages = [
  { name: "Activating prior knowledge", color: "border-chartreuse-light hover:bg-chartreuse-light hover:text-white", selected: "border-chartreuse-light bg-chartreuse-light text-white font-bold" },
  { name: "Supporting students with subject specific vocabulary",  color: "border-chartreuse-mid hover:bg-chartreuse-mid hover:text-white",  selected: "border-chartreuse-mid bg-chartreuse-mid text-white font-bold" },
  { name: "Checking and consolidating understanding", color: "border-chartreuse-dark border-2 hover:bg-chartreuse-dark hover:text-white",  selected: "border-chartreuse-dark bg-chartreuse-dark text-white font-bold" },
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

const englishScoreFeedback = computed ( () => {
  if(englishScore.value >= 10 && englishScore.value < 25) {
    return "Take the first step to injecting English into your lesson by delivering the lecture introduction in English. Also, support students to develop subject specific vocabulary through activities given in the Browse by stage category below. A strong understanding of related terminology in English is essential. These activities are interactive, dynamic and easy to plan in advance."
  } else if (englishScore.value >= 25 && englishScore.value < 50) {
    return "Increase the amount of English you are using by extending your lecture input to include part 1 of the lecture. Additionally, use English when you activate students’ prior knowledge from past study through activities given in the Browse by stage category below. Use the activities to create explicit links between prior and new learning"
  } else if (englishScore.value >= 50 && englishScore.value < 75) {
    return "Teach half of the lesson in English by delivering part 2 of the lecture in English. You may also check and consolidate understanding through activities given in the Browse by stage category below. Now, you can check the extent to which students have understood and can express targeted concepts in English."
  } else if (englishScore.value >= 75 && englishScore.value < 100) {
    return "Extend your use of English in a lesson further by also delivering part 3 of the lecture and summarising the lesson in English. Find activities to support you to summarise the content in the Browse by stage category below.  "
  }  else if (englishScore.value >= 100) {
    return "Facilitate the entire lesson in English by additionally delivering part 4 and the conclusion of the lecture in English. Remember that you can use translanguaging at any time to offer clarity, scaffold learning and provide a meaningful learning experience."
  } else {
    return " "
  }
})

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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}


</style>
