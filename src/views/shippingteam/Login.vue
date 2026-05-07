<template>
    <div class="min-h-screen bg-(--color-surface) px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
            <div class="grid w-full overflow-hidden rounded-2xl border theme-soft-border bg-white shadow-xl lg:grid-cols-2">
                <div class="theme-nav flex flex-col justify-between p-8 text-white sm:p-10">
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Shipping team</p>
                        <h2 class="mt-4 text-3xl font-semibold leading-tight">Welcome back</h2>
                        <p class="mt-3 max-w-md text-sm/6 text-white/75">
                            Sign in to manage bookings, review shipments, and keep the team workflow moving.
                        </p>
                    </div>

                    <div class="mt-10 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                        <p class="text-sm font-medium text-white/80">Secure access</p>
                        <p class="mt-1 text-sm/6 text-white/70">Use your shipping team credentials to continue.</p>
                    </div>
                </div>

                <div class="p-8 sm:p-10">
                    <div class="max-w-md">
                        <h3 class="theme-text text-2xl font-semibold">Login</h3>
                        <p class="mt-2 text-sm/6 theme-soft-text">Enter your details below to continue.</p>

                        <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
                            <div>
                                <label for="email" class="mb-1 block text-sm font-medium theme-text">Email</label>
                                <input
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    autocomplete="email"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#001B66]/20"
                                >
                            </div>

                            <div>
                                <label for="password" class="mb-1 block text-sm font-medium theme-text">Password</label>
                                <input
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    autocomplete="current-password"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 theme-soft-border placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#001B66]/20"
                                >
                            </div>

                            <div class="flex items-center justify-between text-sm">
                                <label class="flex items-center gap-2 theme-soft-text">
                                    <input type="checkbox" class="rounded border theme-soft-border text-[#001B66] focus:ring-[#001B66]">
                                    Remember me
                                </label>
                                <a href="#" class="font-medium theme-text hover:opacity-80">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                class="theme-nav inline-flex w-full items-center justify-center rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001B66]"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
    router.push('/shipping/bookings')
}

</script>