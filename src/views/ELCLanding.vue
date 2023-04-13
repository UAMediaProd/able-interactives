<template>
  <div :class="wrapperClass">
<!--    <h2>EMI active learning tool</h2>-->

    <h2>Find a suitable activity</h2>
    <div id="results" class="overflow-y-scroll pb-8">

      <h4 id="resultsView">Recommended activities</h4>
        <TransitionGroup  class="resultBox lg:columns-4 md:columns-3 sm:columns-2 gap-2 overflow-scroll" name="list" tag="div">
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
import {ref, computed, onMounted, onBeforeMount} from "vue";
import {useRoute} from "vue-router";
import activities from "@/assets/emi_activities.json"

/*
0: "Activating prior knowledge"
1: "Supporting students with subject specific vocabulary"
2: "Checking and consolidating understanding"
3: "Summarising content"
4: "Collaborative activities"
5: "Discussion based activities"
6: "Active learning in STEM"
 */

onBeforeMount(() => {

  //get query params
  const route = useRoute();
appliedFilters.value["Stage or other resource"].selected = appliedFilters.value["Stage or other resource"].labels[route.query.s]
})

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
  { name: "Activating prior knowledge", color: "border-chartreuse-light hover:bg-chartreuse-light hover:text-white", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14429"},
  { name: "Supporting students with subject specific vocabulary",  color: "border-chartreuse-mid hover:bg-chartreuse-mid hover:text-white", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14434"},
  { name: "Checking and consolidating understanding", color: "border-chartreuse-dark border-2 hover:bg-chartreuse-dark hover:text-white", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14430"},
  { name: "Summarising content", color: "border-chartreuse-darkest hover:bg-chartreuse-darkest hover:text-white", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14433" }
]

const tiles = [
  { name: "Flipped learning", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14258" },
  { name: "Working with teaching assistants", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14252" },
  { name: "Scaffolding ideas", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14251" },
  { name: "Translanguaging", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14260" },
  { name: "Questioning", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14253" },
  { name: "Collaborative activities", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14431" },
  { name: "Discussion based activities", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14432" },
  { name: "Giving feedback", link:"https://canvas.catalog.adelaide.edu.au/courses/900/modules/items/14257" },

];

let appliedFilters = ref({
  "Stage or other resource": {
    "labels": ["Activating prior knowledge","Supporting students with subject specific vocabulary", "Checking and consolidating understanding", "Summarising content", "Collaborative activities", "Discussion based activities", "Active learning in STEM"],
    "selected": null
  },
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



let filteredResults = computed(() => {

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
