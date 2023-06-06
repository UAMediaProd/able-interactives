<template>
  <div :class="wrapperClass">
    <div class="flex flex-wrap justify-center">
      <div class="border-2 border-slate-200 py-4 px-2 m-2 w-[320px]" v-for="phase in phases">
        <p><strong>{{ phase.title }}</strong></p>
        <ul>
          <li v-for="lesson in phase.lessons">
            <button @click="showLinks(lesson)" @mouseenter="getRelatedLessons(lesson.id)" @mouseleave="allRelatedLessons = []" :class="allRelatedLessons.includes(lesson.id) ? 'bg-secondary' : 'bg-primary'" class="w-full rounded px-2 pb-2 pt-2.5 font-medium text-white text-sm">
              {{ lesson.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const wrapperClass = "adx mx-auto max-w-[1100px]"
let allRelatedLessons = ref([])

const phases = [
  {
    title: "Preparation",
    lessons: [
      {
        id: "1-1",
        title: "Project Kick-off",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "1-2",
        title: "Team Building",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "1-3",
        title: "Preparing for a Brief",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      }
    ]
  },
  {
    title: "Unpacking",
    lessons: [
      {
        id: "2-1",
        title: "Inquiry Listening & Questioning",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "2-2",
        title: "Unpacking the Client Brief",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "2-3",
        title: "Conducting Research",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: ["3-2"],
      }
    ]
  },
  {
    title: "Analysis",
    lessons: [
      {
        id: "3-1",
        title: "Shared Team Understanding",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "3-2",
        title: "Group Report",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: ["2-3", "6-3"],
      },
      {
        id: "3-3",
        title: "Root Cause Analysis",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "3-4",
        title: "Insight Generation & Problem Validation",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [""],
      }
    ]
  },
  {
    title: "Development",
    lessons: [
      {
        id: "4-1",
        title: "Defined Problem Statement",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "4-2",
        title: "Solution Generation",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "4-3",
        title: "Project Status Update",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "4-4",
        title: "Solution Validation",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      }
    ]
  },
  {
    title: "Validation",
    lessons: [
      {
        id: "5-1",
        title: "Solution Validated Based on Final Criteria",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "5-2",
        title: "Sharing Insights with the Client",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      }
    ]
  },
  {
    title: "Communication",
    lessons: [
      {
        id: "6-1",
        title: "Prepare Recommendation(s)",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "6-2",
        title: "Present to Client & Discuss",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [],
      },
      {
        id: "6-3",
        title: "Reflect & Review",
        links: [
          { title: "AAAAAAAA", href: "" }
        ],
        relatedLessons: ["3-2"],
      }
    ]
  },
]

//function that takes in a lessonID and returns any lessons that have the lessonID in their own relatedLessons object
function getRelatedLessons(lessonID) {
  let relatedLessons = []
  phases.forEach(phase => {
    phase.lessons.forEach(lesson => {
      if (lesson.relatedLessons.includes(lessonID)) {
        relatedLessons.push(lesson.id)
      }
    })
  })
  allRelatedLessons.value = relatedLessons
}

function showLinks(lesson) {
  alert(lesson.links[0].title)
}






</script>