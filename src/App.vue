<template>
    <div id="app">
        <p>{{success}}</p>

        <Adaption></Adaption>
    </div>
</template>

<script>
import Adaption from './test/CssDemo/SelfAdaption/index.vue';
import Adaption2 from './test/CssDemo/SelfAdaption/index.js';

export default {
    name: 'App',
    components: {
        Adaption,
    },
    data() {
        return {
            success: 'Vue 引入成功',
        };
    },
};
</script>
