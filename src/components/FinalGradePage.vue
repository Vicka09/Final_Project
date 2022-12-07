<script setup>
function Calc()
{
    var avg=(document.getElementById("current").value);
      var final=(document.getElementById("exam-grade").value);
      var weight=(document.getElementById("weight").value);
      var total=(avg*(100.0-weight)+final*weight)/100.0;
      document.getElementById("overall-grade").value=(total.toFixed(2));
}
</script>

<template>
<h1>Final Grade Calculator</h1> 
<div class="calcform">
    <div class = "input-info">
    <label> Current Average Grade</label>
    <input type = "number" min="0" step="any" id="current">
    </div>
    <div class = "input-info">
    <label>Final Exam Grade </label>
    <input type = "number" min="0" step="any" id="exam-grade">
    </div>
    <div class = "input-info">
    <label>Final Exam Weight</label>
    <input type = "number" min="0" step="any" id="weight">
    </div>
    <button type = "button" id="calcGrade" @click="Calc()" title="Calculate">Calculate Grade</button>
    <p></p>
    <div class = "input-info">
    <label> Overall Grade</label>
    <input type = "number" min="0" id="overall-grade">
    </div>

</div>
</template>

<style scoped lang="postcss">
main{
    @apply mt-8 flex-col justify-center items-center gap-8;
}
 h1{
  @apply text-center text-white bg-emerald-700 max-h-fit text-3xl mb-2;
 }
 .calcform{
    @apply max-w-max gap-5 mx-auto font-semibold justify-center items-center p-6 border-8 border-solid border-yellow-300 rounded-lg shadow-lg;
 }
 .input-info
 {
    @apply mb-1 flex-wrap p-2 w-80 col-auto;
 }

 button{
    @apply bg-green-400 p-2 flex-wrap text-xl font-bold rounded-lg shadow-sm m-auto ;
 }
</style> 
