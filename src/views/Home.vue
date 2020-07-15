<template>
  <div class="home">
    <h1 class="text-center">{{ $t('pages.HomeHeadline') }}</h1>
    <p class="text-center">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <AxiosTest></AxiosTest>
  </div>
</template>

<script>
import AxiosTest from '@/components/AxiosTest.vue'

export default {
  name: 'Home',
  components: {
    AxiosTest
  }
}
</script>
