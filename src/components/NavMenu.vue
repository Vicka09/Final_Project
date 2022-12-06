<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/FinalExam">Final Exam Calculator</RouterLink>
    <RouterLink to="/FinalGrade">Final Grade Calculator</RouterLink>
    <RouterLink to="/SemesterPage"> Semester Calculator</RouterLink>
    <RouterLink to="/Login">Login</RouterLink>
    
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
