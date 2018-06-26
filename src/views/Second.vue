<template>
  <div>
    <new :prop1="dataForNew" />
    <button @click="dataForNew.sub1 = 'asdfasdf'">Click me</button>
  </div>
</template>

<script>
import New from "@/components/New.vue";
export default {
    components: {
        New
    },
    data() {
        return {
            dataForNew: {
                sub1: "hello",
                sub2: "goodbye"
            }
        };
    }
};
</script>

<style lang='scss' scoped>
</style>