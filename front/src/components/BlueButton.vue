<template>
  <div><b-button variant="outline-primary" :href="`/${url}`">{{name}}</b-button></div>
</template>

<script>
export default {
  props:['name', 'url']
}
</script>

<style>

</style>