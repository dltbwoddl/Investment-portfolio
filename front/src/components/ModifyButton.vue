<template>
  <div>
    <input type="text" :value="`${event}`" :name="`${id}`">
  </div>
</template>

<script>
export default {
  props:['id', 'event']
}
</script>

<style>

</style>