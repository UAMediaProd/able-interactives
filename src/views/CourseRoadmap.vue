<template>
  <div :class="wrapperClass">
    <div class="flex flex-wrap justify-center">
      <div class="m-2 w-[250px] rounded-lg" v-for="(phase, key) in phases" :style="'border: 3px solid ' + phase.color[1]">

        <div class="phaseHead" :style="'background-color: ' + phase.color[0] +'; border-bottom: 3px solid ' + phase.color[1] + ';'">
          <h2 class="deloitteHead"><strong>Phase {{key+1}}</strong></h2>
        </div>

        <h3 class="deloitteHead"><strong>{{ phase.title }}</strong></h3>

        <ul class="my-2 mx-2">
          <li v-for="lesson in phase.lessons">
            <button @click="showLinks(lesson, phase)" @mouseenter="getRelatedLessons(lesson.id)" @mouseleave="allRelatedLessons = []" :class="allRelatedLessons.includes(lesson.id) ? phase.title+'linked' : phase.title+'butt'" class="w-full rounded px-1 pb-2 pt-2.5 font-medium text-[15px] btn-roadmap">
              {{ lesson.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Modal v-model="showModal" :closeClickDimmed="false">
    <div class="modal w-[80%]">
      <div class="rounded-lg" :style="'border: 2px solid ' + selected.p.color[1]">
        <div class="phaseHead rounded-t-md" :style="'background-color: ' + selected.p.color[0] +'; border-bottom: 2px solid ' + selected.p.color[1] + ';'">
          <h2 class="deloitteHead"><strong>Phase {{selected.key+1}}: {{ selected.l.title }}</strong></h2>
        </div>
        <ul class="py-4 px-4">
          <li v-for="link in selected.l.links" class="my-4">
            <a :href="link.href" :class="selected.p.title+'butt'" class="w-full rounded px-2 pb-2 pt-2.5 font-medium text-lg btn-roadmap block text-center">{{link.title}}</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-end my-4">
        <button class="btn-text-danger" @click="closeModal">Close</button>
      </div>
    </div>
  </Modal>

</template>

<style>

h2.deloitteHead{
  border-left: none !important;
  margin: inherit !important;
  color: #fff !important;
  text-align: center;
  padding-left: 0 !important;
}

h3.deloitteHead {
  margin: inherit !important;
  text-align: center;
  background: none !important;
  color: #102535;
  font-size: 1.5rem;
  font-family: 'made_evolve_sans_regular', sans-serif;
  padding: 0.3em;
  margin-bottom: 0 !important;
}


.phaseHead {
  padding: 10px;
  overflow: hidden;
}

.Preparationbutt:hover {
  background-color: #90BE6Daa;
  border-color: #65854C;
}

.Unpackingbutt:hover {
  background-color: #43aa8baa;
  border-color: #2f7761;
}

.Analysisbutt:hover {
  background-color: #a279b5aa;
  border-color: #8653a2;
}

.Developmentbutt:hover {
  background-color: #f8961eaa;
  border-color: #ae6915;
}

.Validationbutt:hover {
  background-color: #fa6769aa;
  border-color: #af484a;
}

.Communicationbutt:hover {
  background-color: #4cc9f0aa;
  border-color: #358da8;
}

.Preparationlinked {
  background-color: #90BE6D77;
  border-color: #65854C;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;

}

.Unpackinglinked {
  background-color: #43aa8b77;
  border-color: #2f7761;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;
}

.Analysislinked {
  background-color: #a279b577;
  border-color: #8653a2;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;
}

.Developmentlinked {
  background-color: #f8961e77;
  border-color: #ae6915;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;
}

.Validationbuttlinked {
  background-color: #fa676977;
  border-color: #af484a;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;
}

.Communicationlinked {
  background-color: #4cc9f0aa;
  border-color: #358da8;
  border-style: dashed;
  border-width: 3px;
  margin-top: -1px;
  margin-bottom: -1px;
}


</style>

<script setup>
import {ref} from 'vue'

const wrapperClass = "adx mx-auto max-w-[802px]"
let allRelatedLessons = ref([])
let selected = ref()
let showModal = ref(false)

const phases = [
  {
    title: "Preparation",
    color: ['#90BE6D','#65854C'],
    lessons: [
      {
        id: "1-1",
        title: "Project Kick-off",
        links: [
          { title: "Introduction", href: "" },
          { title: "Complexity", href: "" },
          { title: "Snowden & Boone, 2008", href: "" },
          { title: "Video", href: "" }
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
    color: ['#43aa8b','#2f7761'],
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
    color: ['#a279b5','#8653a2'],
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
        title: "Problem Validation",
        links: [
          { title: "", href: "" }
        ],
        relatedLessons: [""],
      }
    ]
  },
  {
    title: "Development",
    color: ['#f8961e','#ae6915'],
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
    color: ['#fa6769','#af484a'],
    lessons: [
      {
        id: "5-1",
        title: "Solution Validated Final Criteria",
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
    color: ['#4cc9f0','#358da8'],
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
          { title: "", href: "" }
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

function showLinks(lesson, phase) {
  if (lesson.links.length > 0) {
    showModal.value = true
    selected.value = {l: lesson, p: phase, key: phases.findIndex(p => p.title === phase.title)}
  }
}

function closeModal() {
  showModal.value = false
}
</script>
