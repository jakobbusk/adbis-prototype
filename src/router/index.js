import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // stakeholder routes
    {
      path: '/stakeholder/login',
      name: 'StakeholderLogin',
      component: () => import('../views/stakeholder/Login.vue')
    },
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
      path: '/stakeholder/bookings/:id/edit',
      name: 'StakeholderEditBooking',
      component: () => import('../views/stakeholder/EditBooking.vue')
    },
    {
      path: '/stakeholder/bookings/:id',
      name: 'StakeholderBooking',
      component: () => import('../views/stakeholder/ShowBooking.vue')
    },
    // Shipping routes
    {
      path: '/shipping/login',
      name: 'ShippingLogin',
      component: () => import('../views/shippingteam/Login.vue')
    },
    {
      path: '/shipping/dashboard',
      name: 'ShippingDashboard',
      component: () => import('../views/shippingteam/Dashboard.vue')
    },
    {
      path: '/shipping/bookings',
      name: 'ShippingBookings',
      component: () => import('../views/shippingteam/Bookings.vue')
    },
    {
      path: '/shipping/bookings/new',
      name: 'ShippingNewBooking',
      component: () => import('../views/shippingteam/NewBooking.vue')
    },
    {
      path: '/shipping/bookings/:id/edit',
      name: 'ShippingEditBooking',
      component: () => import('../views/shippingteam/EditBooking.vue')
    },
    {
      path: '/shipping/bookings/:id',
      name: 'ShippingBooking',
      component: () => import('../views/shippingteam/ShowBooking.vue')
    }

  ],
})

export default router
