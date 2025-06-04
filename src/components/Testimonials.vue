<template>
  <div class="py-20 px-6 bg-slate-800/40">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-8">What Our Investors Say</h2>
      <div class="relative h-48">
        <transition-group name="fade" tag="div">
          <div
            v-for="(testimonial, idx) in [testimonials[current]]"
            :key="testimonial.name"
            class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
          >
            <p class="text-xl text-slate-200 max-w-2xl">"{{ testimonial.quote }}"</p>
            <div class="text-amber-400 font-semibold">{{ testimonial.name }}</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      current: 0,
      testimonials: [
        {
          name: 'Sipho M.',
          quote: 'Qore Lending transformed my savings into real growth. I can see a bright future ahead.'
        },
        {
          name: 'Naledi T.',
          quote: 'The 40% return sounded too good to be true, but Qore delivers every quarter.'
        },
        {
          name: 'Thabo K.',
          quote: 'Professional service and amazing results. I recommend Qore to all my friends.'
        }
      ]
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.current = (this.current + 1) % this.testimonials.length
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
