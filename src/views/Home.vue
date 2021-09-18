<template>
  <div class="animated fadeIn">
    <Presentation/>
    <About/>
    <Services/>
    <Portfolio/>
  </div>
</template>

<script>
  import Presentation from '@/components/Presentation'
  import About from '@/components/About'
  import Services from '@/components/Services'
  import Portfolio from '@/components/Portfolio.vue'

  export default {
    components: {
      Presentation,
      About,
      Services,
      Portfolio
    }
  }
</script>
