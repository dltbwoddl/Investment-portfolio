<template>
  <div>
    <b-button variant="outline-info" :href="`risky/${eventname}`">{{eventname}}</b-button>
  </div>
</template>

<script>
export default {
  props : ['eventname']
}
</script>

<style>

</style>