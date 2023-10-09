<template>
  <div :class="wrapperClass">

    <h2>Find a pedagogy or technology</h2>
    <div id="results" class="overflow-y-scroll max-h-[700px] pb-8">
      <div class="filterCont border p-1 grid grid-cols-2">
        <p class="m-2 mb-0">
          <small>
            <strong>Section</strong>
            <select v-model="selected">
              <option selected value="">Show all</option>
              <option v-for="(option) in sections" :value="option">{{ option }}</option>
            </select>
          </small>
        </p>

        <p class="m-2 mb-0">
          <small>
            <strong>Subsection</strong>
            <select v-model="subsection">
              <option selected value="">Show all</option>
              <option v-for="(option) in subsections" :value="option">{{ option }}</option>
            </select>
          </small>
        </p>



      </div>


        <TransitionGroup  class="resultBox lg:columns-4 md:columns-2 sm:columns-2 gap-2 overflow-scroll" name="list" tag="div">
        <a :href="result.link" target="_blank" class="w-full block p-4 mb-2 shadow-lg border text-center transition hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer" v-for="(result,idx) in filteredResults" :key="idx" :class="result.type">
          <h5 class="mb-4"><strong>{{result.name}}</strong></h5>
         <div class="flex flex-wrap"><span class="px-2 m-1 bg-[#669cc4] text-white text-sm font-medium rounded-full" v-for="section in result.section"><small>{{section}}</small></span>
           <span class="px-2 m-1 bg-[#707c86] text-white text-sm font-medium rounded-full" v-for="subsection in result.subsection"><small>{{subsection}}</small></span>

         </div>

        </a>
        </TransitionGroup>

    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch} from "vue";
import activities from "@/assets/pdiet.json"

const wrapperClass = "adx mx-auto"
let selected = ref(null)
let subsection = ref(null)


let sections = computed(() => {
  //return sections, but all individual unique occurrences
  let sections = []
  Object.values(activities).forEach((activity) => {
    sections = [...sections, ...activity.section]
  })
  return [...new Set(sections)]
});

//calculated value for the select list of subsections depending on what is availble inside the filteredResults
let subsections = computed(() => {
  //return subsections, but all individual unique occurrences
  let subsections = []
  Object.values(filteredResults.value).forEach((activity) => {
    if (activity.subsection) {
      subsections = [...subsections, ...activity.subsection]
    }
  })
  return [...new Set(subsections)]
});


let filteredResults = computed(() => {

  //filter activity based on section
  let filtered = Object.values(activities).filter((activity) => {

    if (selected.value) {
      return activity.section.includes(selected.value)
    } else {
      return true
    }
  })

  //filter filtered based on subsection
  filtered = filtered.filter((activity) => {
    if (subsection.value) {
      if (activity.subsection) {
        return activity.subsection.includes(subsection.value)
      } else {
        return false
      }
    } else {
      return true
    }
  })




  return filtered
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

.parent {
  background: #ebf2f7;
}

.top {
  background: #eceeef;
}


</style>
