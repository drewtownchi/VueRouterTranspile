<template>
  <div>
{{someData}}
  </div>
</template>

<script>
export default {
    props: {
        prop1: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            /*  someData: "initial" */
        };
    },
    computed: {
        someData() {
            return this.prop1.sub1;
        }
    }
    /*     watch: {
        "prop1.sub1": {
            handler() {
                this.someData = this.prop1.sub1;
            },
            immediate: true
        }
    } */
};
</script>

<style lang='scss' scoped>
</style>