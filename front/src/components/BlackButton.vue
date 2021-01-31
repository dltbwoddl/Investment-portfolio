<template>
  <div><b-button variant="dark" :href="url">{{modify}}</b-button></div>
</template>

<script>
export default {
  props : ['modify', 'url']
}
</script>

<style>

</style>