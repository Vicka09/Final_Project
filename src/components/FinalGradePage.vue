<script>


</script>

<template>
<h2>Final Grade Calculator</h2> 
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
    <button type = "button" id="calcGrade" onclick="Calc()" title="Calculate">Calculate Grade</button>
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
 h2{
    @apply text-center text-black text-xl m-6;
 }
 .calcform{
    @apply max-w-max gap-5 m-auto font-semibold justify-center items-center p-3.5 border-8 border-solid border-yellow-300 rounded-lg shadow-lg;
 }
 .input-info
 {
    @apply mb-1 flex-wrap p-2 w-80 col-auto;
 }

 button{
    @apply bg-green-400 p-2 flex-wrap text-xl font-bold rounded-lg shadow-sm m-auto ;
 }
</style> 