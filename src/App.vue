<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Subtle background shapes -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-32 left-16 w-96 h-96 bg-gradient-to-tr from-amber-900/10 to-slate-700/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-32 right-24 w-80 h-80 bg-gradient-to-tr from-slate-700/20 to-amber-900/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Particle background (subtle) -->
    <div class="absolute inset-0 opacity-10">
      <div
        v-for="i in 25"
        :key="i"
        class="absolute w-1 h-1 bg-amber-600 rounded-full animate-ping"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: (4 + Math.random() * 4) + 's'
        }"
      ></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Navbar -->
      <header class="p-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <nav class="flex justify-between items-center max-w-7xl mx-auto">
          <router-link to="/" class="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div class="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">Q</span>
            </div>
            <h1 class="text-3xl font-extrabold text-white">
              Qore Lending
            </h1>
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link
              to="/"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link
              to="/about"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'About' }"
            >
              About
            </router-link>
            <router-link
              to="/how-it-works"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'HowItWorks' }"
            >
              How It Works
            </router-link>
            <router-link
              to="/investment-terms"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'InvestmentTerms' }"
            >
              Terms
            </router-link>
            <router-link
              to="/contact"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'Contact' }"
            >
              Contact
            </router-link>
            <router-link
              to="/investment-terms"
              class="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Invest Now
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-white p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-slate-700">
          <div class="flex flex-col space-y-4 pt-4">
            <router-link
              to="/"
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link
              to="/about"
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'About' }"
            >
              About
            </router-link>
            <router-link
              to="/how-it-works"
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'HowItWorks' }"
            >
              How It Works
            </router-link>
            <router-link
              to="/investment-terms"
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'InvestmentTerms' }"
            >
              Investment Terms
            </router-link>
            <router-link
              to="/contact"
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-amber-400 font-medium transition-colors"
              :class="{ 'text-amber-400': $route.name === 'Contact' }"
            >
              Contact
            </router-link>
            <router-link
              to="/investment-terms"
              @click="mobileMenuOpen = false"
              class="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-center"
            >
              Invest Now
            </router-link>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1">
        <router-view />
      </main>

      <!-- Footer -->
      <footer class="bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 text-center p-6">
        <div class="max-w-7xl mx-auto space-y-4">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400">
            <div>&copy; 2025 Qore Lending (Pty) Ltd. All rights reserved.</div>
            <div class="flex space-x-6">
              <a href="#" class="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-amber-400 transition-colors">Terms of Service</a>
              <router-link to="/contact" class="hover:text-amber-400 transition-colors">Contact Us</router-link>
            </div>
          </div>
          <div class="text-xs text-slate-500 border-t border-slate-700 pt-4">
            <p>Qore Lending (Pty) Ltd is a registered South African company. Company Registration: 2024/123456/07</p>
            <p class="mt-1">This is not a bank deposit. Investments are not guaranteed and may be subject to market risk.</p>
            <p class="mt-1">Please consider your financial situation and consult with a qualified financial advisor before investing.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  watch: {
    $route() {
      // Close mobile menu when route changes
      this.mobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
