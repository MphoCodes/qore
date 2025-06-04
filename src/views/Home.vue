<template>
  <!-- Hero Section -->
  <section class="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
    <div class="mb-8 space-y-4">
      <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
        Secure Your Financial Future
      </h1>
      <div class="text-2xl sm:text-3xl text-amber-300 font-medium">
        40% Annual Returns on Your Investment
      </div>
    </div>

    <div class="max-w-3xl mb-12">
      <p class="text-lg sm:text-xl text-slate-300 leading-relaxed bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-600">
        Qore Lending offers South African investors a secure and lucrative opportunity to grow your wealth.
        Our diversified commercial lending operations provide business loans to established SA companies
        that generate steady, attractive interest income—enabling us to deliver
        guaranteed 40% annual returns for our investors.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-6 mb-12">
      <router-link
        to="/investment-terms"
        class="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-lg font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Investing
      </router-link>
      <router-link
        to="/how-it-works"
        class="px-10 py-4 border-2 border-amber-600 text-amber-400 text-lg font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300"
      >
        Learn More
      </router-link>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
      <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6 hover:bg-slate-700/50 transition duration-300">
        <div class="text-3xl font-extrabold text-amber-400 mb-2">R850M+</div>
        <div class="text-slate-300">Total Investments</div>
      </div>
      <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6 hover:bg-slate-700/50 transition duration-300">
        <div class="text-3xl font-extrabold text-amber-400 mb-2">99.8%</div>
        <div class="text-slate-300">Success Rate</div>
      </div>
      <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6 hover:bg-slate-700/50 transition duration-300">
        <div class="text-3xl font-extrabold text-amber-400 mb-2">3,200+</div>
        <div class="text-slate-300">SA Investors</div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-20 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-white text-center mb-12">Why Choose Qore Lending?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6">
          <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Secure Investment</h3>
          <p class="text-slate-300">Your investment is backed by real commercial loans to verified SA businesses with solid collateral and CIPC registration.</p>
        </div>
        
        <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6">
          <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">High Returns</h3>
          <p class="text-slate-300">Earn 40% annually - significantly higher than SA bank deposits, unit trusts, or JSE returns.</p>
        </div>
        
        <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-6">
          <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Flexible Terms</h3>
          <p class="text-slate-300">45-day notice for refunds with zero interest penalty. Complete flexibility for your peace of mind.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <Testimonials />
</template>

<script>
import Testimonials from '../components/Testimonials.vue'
export default {
  name: 'Home',
  components: {
    Testimonials
  }
}
</script>
