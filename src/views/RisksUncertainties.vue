<template>
  <div v-if="state===0">
    <h1>Identify risks and uncertainties faced by Australian SMEs.</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <h3 class="text-center">Risks</h3>
        <div class="text-center">
          <div v-for="(thing, index) in risks">
            <input class="border" v-model="risks[index]">
            <i v-if="risks.length>2" class="fas fa-minus-circle cursor-pointer" @click="deleteRisk(index)"></i>
          </div>
        </div>
        <div class="text-center">
          <button class="adx-button primary" @click="addRisk" :disabled="risks.length===5">
            Add Risk
          </button>
        </div>
      </div>
      <div class="col-span-1">
        <h3 class="text-center">Uncertainties</h3>
        <div class="text-center">
          <div v-for="(thing, index) in uncertainties">
            <input class="border" v-model="uncertainties[index]">
            <i v-if="uncertainties.length>2" class="fas fa-minus-circle cursor-pointer"
               @click="deleteUncertainties(index)"></i>
          </div>
        </div>
        <div class="text-center">
          <button class="adx-button primary" @click="addUncertainties" :disabled="uncertainties.length===5">
            Add Uncertainty
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="adx-button primary" @click="nextButton">
        Next
      </button>
    </div>
  </div>

  <div v-if="state===1">
    <h1>Page 2</h1>
    <div class="flex justify-between">
      <button class="adx-button primary" @click="prevButton">
        Previous
      </button>
      <button class="adx-button primary" @click="nextButton">
        Next
      </button>

    </div>
  </div>

  <div v-if="state===2">
    <h1>Page 3</h1>
  </div>

  <div v-if="state===3">
    <h1>Page 4</h1>
  </div>

  <div v-if="state===4">
    <h1>Page 5</h1>
  </div>

</template>

<script setup>
import {ref} from "vue"

const state = ref(0)
const risks = ref(["", ""])
const uncertainties = ref(["", ""])

function addRisk() {
  if (risks.value.length < 5) {
    risks.value.push("")
  }
}

function addUncertainties() {
  if (uncertainties.value.length < 5) {
    uncertainties.value.push("")
  }
}

function nextButton() {
  state.value++
}

function prevButton() {
  state.value--
}

function deleteRisk(index) {
  risks.value.splice(index, 1)
}

function deleteUncertainties(index) {
  uncertainties.value.splice(index, 1)
}

</script>