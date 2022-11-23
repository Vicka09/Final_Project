import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import FinalExam from '@/components/FinalExamPage.vue'
import FinalGrade from '@/components/FinalGradePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import LogoutPage from '@/components/LogoutPage.vue'
import SemesterPage from '@/components/SemesterPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  {
    path: '/FinalGrade',
    name: 'FinalGrade',
    component: FinalGrade, //() => import('@/components/FinalGradePage'),
  },
  {
    path: '/FinalExam',
    name: 'FinalExam',
    component: FinalExam, //() => import('@/components/FinalExamPage'),
  },
  {
    path: '/SemesterPage',
    name: 'Semester',
    component: SemesterPage, //() => import('@/components/SemesterPage'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage, //() => import('@/components/LoginPage'),
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: LogoutPage, //() => import('@/components/LogoutPage'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
