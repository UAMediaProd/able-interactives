<template>
  <div :class="wrapperClass" class="my-4">
    <Transition>
    <div v-if="show"  class="absolute  mx-auto shadow-lg w-fit px-4 py-2 bg-white rounded-lg" :style="{top: clickedLoc[1]+'px', left: clickedLoc[0]+'px'}">
      <p class="text-right"><span class="transition text-slate-400 hover:text-red-600 hover:cursor-pointer" @click="show = false"><i class="far fa-times"></i></span></p>

      <div class="grid grid-cols-4 gap-4 m-4 justify-center">

        <p @click="categorise('bg-orange-200')" class="relative hover:cursor-pointer group bg-orange-200 w-[30px] h-[30px] rounded-full text-center">iii
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-orange-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">iii. culturally sensitive and culturally informed approach</span>
        </p>
        <p @click="categorise('bg-amber-200')" class="relative hover:cursor-pointer group bg-amber-200 w-[30px] h-[30px] rounded-full text-center">iv
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-amber-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">iv. evidence-based approach and plans for evaluation</span></p>
        <p @click="categorise('bg-yellow-200')" class="relative hover:cursor-pointer group bg-yellow-200 w-[30px] h-[30px] rounded-full text-center">v
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-yellow-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">v. benefits to recipients of project activities</span></p>
        <p @click="categorise('bg-emerald-200')" class="relative hover:cursor-pointer group bg-emerald-200 w-[30px] h-[30px] rounded-full text-center">vi
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-emerald-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">vi. benefits to psychology/psychologists in target community</span></p>
        <p @click="categorise('bg-teal-200')" class="relative hover:cursor-pointer group bg-teal-200 w-[30px] h-[30px] rounded-full text-center">vii
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-teal-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">vii. feasibility of project and probability of successful completion</span></p>

        <p @click="categorise('bg-blue-200')" class="relative hover:cursor-pointer group bg-blue-200 w-[30px] h-[30px] rounded-full text-center">viii
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-blue-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">viii. sustainability after funding ends</span></p>

        <p @click="categorise('bg-indigo-200')" class="relative hover:cursor-pointer group bg-indigo-200 w-[30px] h-[30px] rounded-full text-center">ix
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-indigo-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">ix. ongoing engagement with the APS</span></p>

        <p @click="categorise('bg-violet-200')" class="relative hover:cursor-pointer group bg-violet-200 w-[30px] h-[30px] rounded-full text-center">x
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-violet-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">x. evidence of innovation</span></p>


        <p @click="categorise('bg-fuchsia-200')" class="relative hover:cursor-pointer group bg-fuchsia-200 w-[30px] h-[30px] rounded-full text-center">i
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-fuchsia-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">i. clear rationale for all budget items</span></p>
        <p @click="categorise('bg-pink-200')" class="relative hover:cursor-pointer group bg-pink-200 w-[30px] h-[30px] rounded-full text-center">j
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-pink-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">j. evidence of need for grant in order for the project to proceed</span></p>
        <p @click="categorise('bg-rose-200')" class="relative hover:cursor-pointer group bg-rose-200 w-[30px] h-[30px] rounded-full text-center">k
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-rose-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">k. clear and accurate description of budget items</span></p>
        <p @click="categorise('bg-red-200')" class="relative hover:cursor-pointer group bg-red-200 w-[30px] h-[30px] rounded-full text-center">l
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-red-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">l. realistic and modest costings</span></p>





        <p @click="categorise(null)" class="relative hover:cursor-pointer group bg-slate-200 w-[30px] h-[30px] rounded-full text-center">
          <span role="tooltip" class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded bg-slate-200 p-2 text-sm opacity-0  before:invisible  group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">clear selection</span>
        </p>
      </div>
    </div>
    </Transition>




    <div class="mt-4 mb-8 rounded-lg shadow-lg p-12 bg-white">

    <p class="text-right mb-6 text-slate-400">Page <strong>3</strong> of <strong>6</strong></p>

    <p class="mb-4">
   <span @mouseover="hoverSpan(0)" @mouseout="hovered = null" @click="showMenu(0, $event)" :class="chosen[0] ? chosen[0] : hovered === 0 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer">To evaluate the success of the single-school pilot study, key stakeholders will be surveyed at baseline, halfway through the program (Week 5), during the final session (Week 10) and at follow-up after the school holidays. Evaluation methods have been summarised in Table 1.</span>       <i class="far fa-check-circle text-emerald-400" v-if="submitted[0] && (chosen[0] === correctSet[0])"></i></p>

    <table class="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellspacing="0">
      <caption>Table 1: Evaluation for the single-school pilot study</caption>
      <thead>
      <tr>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Stakeholders</th>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Feedback</th>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Measure</th>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Time point(s)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowspan="3" class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Teachers</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Usefulness of PD Day</td>
        <td rowspan="3" class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">7-point Likert scale, plus comments for constructive feedback</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">End of PD Day</td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">General level of class social skills</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Baseline (PD Day), Week 5, Week 10 Follow-up</td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Ease of implementation</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Week 10</td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Parents</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Child's/Childrens' prosocial behaviour at home</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">7-point Likert scale, plus parent/teacher interviews (to account for varying literacy levels among parents)</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Baseline (Parent Info Session), Week 5, Week 10, Follow-up</td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Students</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Social skills and programme satisfaction</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">7-point Likert scale (using smiley and sad faces instead of words and numbers)</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Baseline, Week 5 Week 10, Follow-up</td>
      </tr>
      </tbody>
    </table>


    <h2>Budget</h2>
    <p>All budget items are listed in Australian dollars and summarised in Table 2.</p>

    <table class="mt-4 w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellspacing="0">
      <caption>Table 2: Project budget</caption>
      <thead>
      <tr>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Item</th>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Estimated Cost</th>
        <th scope="col" class="h-12 px-6  font-medium border-l  stroke-slate-700 text-slate-700 bg-slate-100">Explanation</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Compensation for Indonesian Psychologist</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$1,450</span>  <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "> <span  @mouseover="hoverSpan(2)" @mouseout="hovered = null" @click="showMenu(2, $event)" :class="chosen[2] ? chosen[2] : hovered === 2 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">2 weeks full-time salary for data collection, data collection, translation and collaborative meetings - plus extra to cover travel costs and delivery of PD Day</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[2] && (chosen[2] === correctSet[2])"></i></td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Compensation for Australian Psychologist</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$1,250</span>  <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "> <span  @mouseover="hoverSpan(2)" @mouseout="hovered = null" @click="showMenu(2, $event)" :class="chosen[2] ? chosen[2] : hovered === 2 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">25 hours (at $50/hr) for collaborative meetings and creation of adapted programme</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[2] && (chosen[2] === correctSet[2])"></i></td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Staff Professional Development day</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$750</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "> <span  @mouseover="hoverSpan(2)" @mouseout="hovered = null" @click="showMenu(2, $event)" :class="chosen[2] ? chosen[2] : hovered === 2 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">10 teachers and the Principal from the target school to attend the PD Day - 6 hours</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[2] && (chosen[2] === correctSet[2])"></i></td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">"Stop-Think-Do" Social Skills Programme pack</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$300</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "> <span  @mouseover="hoverSpan(2)" @mouseout="hovered = null" @click="showMenu(2, $event)" :class="chosen[2] ? chosen[2] : hovered === 2 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">Original copy of the source material – includes teacher manuals, lesson plans and posters</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[2] && (chosen[2] === correctSet[2])"></i></td>
      </tr>
      <tr>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 ">Materials for creation and distribution of the adapted programme</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$1,000</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "> <span  @mouseover="hoverSpan(2)" @mouseout="hovered = null" @click="showMenu(2, $event)" :class="chosen[2] ? chosen[2] : hovered === 2 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">Including illustration/graphic design, printing, copying and postage</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[2] && (chosen[2] === correctSet[2])"></i></td>
      </tr>
      <tr>
        <td class="h-12 px-6  text-right transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 font-bold">TOTAL:</td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 font-bold"><span  @mouseover="hoverSpan(1)" @mouseout="hovered = null" @click="showMenu(1, $event)" :class="chosen[1] ? chosen[1] : hovered === 1 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">$4,750</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[1] && (chosen[1] === correctSet[1])"></i></td>
        <td class="h-12 px-6  transition duration-300 border-t border-l  border-slate-200 stroke-slate-500 text-slate-500 "></td>
      </tr>
      </tbody>
    </table>

    </div>
<!--    end page-->



    <div class="mt-4 mb-8 rounded-lg shadow-lg p-12 bg-white">
      <p class="text-right text-slate-400 mb-6">Page <strong>4</strong> of <strong>6</strong></p>


      <h2>Intercultural Significance</h2>

      <ul class="list-disc">
        <li class="mb-4"><span @mouseover="hoverSpan(3)" @mouseout="hovered = null" @click="showMenu(3, $event)" :class="chosen[3] ? chosen[3] : hovered === 3 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">The intercultural significance of this project is inherent in its tangible outcome. The
          creation of a culturally-adapted social skills intervention will be extremely valuable
          to Indonesia – whose social norms differ greatly from Australia’s – because it will be
          locally relevant, not imposed from Western society.</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[3] && (chosen[3] === correctSet[3])"></i></li>
        <li class="mb-4"><span  @mouseover="hoverSpan(3)" @mouseout="hovered = null" @click="showMenu(3, $event)" :class="chosen[3] ? chosen[3] : hovered === 3 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">It is equally important that this intervention will be codesigned, incorporating input
          from Indonesian psychologists, social workers, teachers, parents and children. By
          being involved in the adaptation process, the target community can truly take
          ownership of the programme and reap the most benefit from it.</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[3] && (chosen[3] === correctSet[3])"></i></li>
        <li class="mb-4"><span  @mouseover="hoverSpan(3)" @mouseout="hovered = null" @click="showMenu(3, $event)" :class="chosen[3] ? chosen[3] : hovered === 3 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">In achieving its primary goal of improving accessibility to inclusive education, this
          project is in line with UNESCO 1994 Salamanca World Declaration (Kurniawati, 2014).</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[3] && (chosen[3] === correctSet[3])"></i></li>
        <li class="mb-4"><span  @mouseover="hoverSpan(3)" @mouseout="hovered = null" @click="showMenu(3, $event)" :class="chosen[3] ? chosen[3] : hovered === 3 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">The successful adaptation of the childrens’ social skills programme would serve as a
          model from which various adults’ skill-developing programmes can also be adapted
          to help Australian migrants interact better within their new communities.</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[3] && (chosen[3] === correctSet[3])"></i></li>
      </ul>
      <h2>Relevance to the APS</h2>
      <ul class="list-disc">
        <li class="mb-4">The cultural adaptation process will demonstrate the APS’ commitment to
          developing culturally relevant psychological knowledge and research methods.</li>
        <li class="mb-4">Relations with our closest neighbour will be strengthened from this collaboration, in
          line with the Memorandum of Understanding between the APS and HIMPSI.</li>
        <li class="mb-4">This project will help promote the work of the APS and enhance the reputation of
          Australian psychologists to their Indonesian counterparts</li>
        <li class="mb-4">By collaborating with Indonesian psychologists, APS members will have the
          opportunity to develop cultural competence</li>
        <li class="mb-4">In line with the APS vision, this pilot study seeks to use practical and evidence-based
          strategies to respond to the complex societal issue of inclusive education</li>
        <li class="mb-4">This project is relevant to psychologists, as opposed to educators, because the role
          of the psychologist goes beyond delivering a curriculum; psychologists are
          responsible for ensuring that the content is culturally relevant and addresses the
          welfare of students and parents.</li>
        <li class="mb-4"><span  @mouseover="hoverSpan(4)" @mouseout="hovered = null" @click="showMenu(4, $event)" :class="chosen[4] ? chosen[4] : hovered === 4 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">This pilot study will inspire future collaboration opportunities in Indonesia and
          around the world; as these opportunities grow, more APS members can become
          involved.</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[4] && (chosen[4] === correctSet[4])"></i></li>
        <ul class="list-circle ml-8 mb-4">
          <li class="mb-4"><span  @mouseover="hoverSpan(4)" @mouseout="hovered = null" @click="showMenu(4, $event)" :class="chosen[4] ? chosen[4] : hovered === 4 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">Large-scale implementation of the adapted social skills programme across
            Indonesia</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[4] && (chosen[4] === correctSet[4])"></i></li>
          <li class="mb-4"><span  @mouseover="hoverSpan(4)" @mouseout="hovered = null" @click="showMenu(4, $event)" :class="chosen[4] ? chosen[4] : hovered === 4 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">Adaptation and implementation of Stop-Think-Do programmes in other
            countries</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[4] && (chosen[4] === correctSet[4])"></i></li>
          <li class="mb-4"><span  @mouseover="hoverSpan(4)" @mouseout="hovered = null" @click="showMenu(4, $event)" :class="chosen[4] ? chosen[4] : hovered === 4 ? 'bg-slate-200' : 'bg-slate-100'" class="rounded-lg transition leading-9 p-1 hover:cursor-pointer hover:bg-slate-200">Cultural adaptation of other inclusive education strategies for multiple age
            groups</span> <i class="far fa-check-circle text-emerald-400" v-if="submitted[4] && (chosen[4] === correctSet[4])"></i></li>
        </ul>
      </ul>
    </div>


    <div v-if="submitButt" class="p-4 my-4 mx-auto rounded" :class="correct ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'">
      <p>{{correct ? 'Well done, you successfully identified the matching criteria!' : 'Take another look at the criteria and the sections above and try again.'}}</p>
    </div>

    <!-- Component: Base primary basic button -->
    <div class="flex justify-end">
      <button @click="submitAnswers()" class="font-bold h-10 gap-2 px-5 text-md font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
        <span>Check selections</span>
      </button>
      <!-- End Base primary basic button -->
    </div>





  </div>
</template>

<script setup>
import { ref } from 'vue'

const wrapperClass = 'max-w-[1100px] mx-auto'

let show = ref(false)
let chosen = ref([])
let selected = ref(null)
let submitted = ref([])
let submitButt = ref(false)
let correct = ref(false)

let clickedLoc = ref([0,0])
let hovered = ref(null)

const correctSet = [ "bg-amber-200", "bg-red-200", "bg-fuchsia-200", "bg-orange-200", "bg-indigo-200" ]

function showMenu(idx, event){


  if(submitted.value[idx]){
    if(chosen.value[idx] === correctSet[idx]){
      show.value = false
      return
    }
  }
  submitButt.value = false
  clickedLoc.value = [event.pageX, event.pageY]
  selected.value = idx
  show.value = true
}

function categorise(c){
  submitted.value[selected.value] = false;
  chosen.value[selected.value] = c
  show.value = !show.value
}

function hoverSpan(idx){
  hovered.value = idx
}

function submitAnswers(){
  submitButt.value = true

  for (let i = 0; i < chosen.value.length; i++) {
    if(chosen.value[i]){
      submitted.value[i] = true
    }
  }
  correct.value = arraysEqual(chosen.value, correctSet)
}

//check if two arrays match
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}




</script>

<style>
body {
  background: #fcfcfc;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>