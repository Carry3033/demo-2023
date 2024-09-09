<template>
    <div id="app">
        <p>{{success}}</p>

        <Adaption></Adaption>
        <!-- <Adaption2></Adaption2> -->
    </div>
</template>

<script>
import Adaption from './test/CssDemo/SelfAdaption/index.vue';
import Adaption2 from './test/CssDemo/SelfAdaption/index.js';

export default {
    name: 'App',
    components: {
        Adaption,
        // Adaption2,
    },
    data() {
        return {
            success: 'Vue 引入成功',
        };
    },
    mounted() {
        console.log(Adaption2);
    }
};
</script>
