import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // stakeholder routes
    {
      path: '/stakeholder/dashboard',
      name: 'StakeholderDashboard',
      component: () => import('../views/stakeholder/Dashboard.vue')
    },
    {
      path: '/stakeholder/bookings',
      name: 'StakeholderBookings',
      component: () => import('../views/stakeholder/Bookings.vue')
    },
    {
      path: '/stakeholder/bookings/new',
      name: 'StakeholderNewBooking',
      component: () => import('../views/stakeholder/NewBooking.vue')
    },
    {
      path: '/stakeholder/bookings/:id',
      name: 'StakeholderBooking',
      component: () => import('../views/stakeholder/ShowBooking.vue')
    }

  ],
})

export default router
