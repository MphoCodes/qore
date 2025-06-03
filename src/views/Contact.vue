<template>
  <div class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p class="text-xl text-slate-300 leading-relaxed">
          Ready to start your investment journey? Get in touch with our team today.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-8">
          <h2 class="text-3xl font-bold text-white mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="John"
                >
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Doe"
                >
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="john@example.com"
              >
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              >
            </div>
            
            <div>
              <label for="investmentAmount" class="block text-sm font-medium text-slate-300 mb-2">Initial Investment Amount</label>
              <select
                id="investmentAmount"
                v-model="form.investmentAmount"
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select amount range</option>
                <option value="10k-50k">R10,000 - R50,000</option>
                <option value="50k-100k">R50,000 - R100,000</option>
                <option value="100k-250k">R100,000 - R250,000</option>
                <option value="250k-500k">R250,000 - R500,000</option>
                <option value="500k-1m">R500,000 - R1M</option>
                <option value="1m+">R1M+</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tell us about your investment goals and any questions you have..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">Phone</h3>
                  <p class="text-slate-300">+27 (0)11 123-QORE</p>
                  <p class="text-slate-400 text-sm">Monday - Friday, 8 AM - 5 PM SAST</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">Email</h3>
                  <p class="text-slate-300">invest@qorelending.com</p>
                  <p class="text-slate-400 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">Office</h3>
                  <p class="text-slate-300">123 Sandton City Office Towers</p>
                  <p class="text-slate-300">Sandton, Johannesburg 2196</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6">Quick Answers</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-amber-400 mb-2">What's the minimum investment?</h3>
                <p class="text-slate-300 text-sm">R10,000 minimum initial investment. No additional investments allowed during the investment term.</p>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-amber-400 mb-2">How quickly can I access my funds?</h3>
                <p class="text-slate-300 text-sm">45-day notice period for withdrawals, with no penalty fees for early withdrawal.</p>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-amber-400 mb-2">Are returns guaranteed?</h3>
                <p class="text-slate-300 text-sm">We target 40% annual returns based on our loan portfolio performance. Past performance doesn't guarantee future results.</p>
              </div>
            </div>
          </div>

          <!-- Schedule Call -->
          <div class="bg-gradient-to-r from-amber-900/30 to-amber-800/30 border border-amber-600/50 rounded-xl p-8 text-center">
            <h2 class="text-2xl font-bold text-white mb-4">Schedule a Call</h2>
            <p class="text-slate-300 mb-6">Prefer to speak directly? Schedule a consultation with our investment team.</p>
            <button class="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        investmentAmount: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      alert('Thank you for your interest! We will contact you within 24 hours.');
      // Reset form
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        investmentAmount: '',
        message: ''
      };
    }
  }
}
</script>