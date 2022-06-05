<template>
  {{ message.split('').reverse().join('') }} 
</template>

<script>
import {  ref } from 'vue'

export default {
  setup () {
    const message =ref('hello')
  
    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped>

</style>