<template>
    <div class="adaption">
        <div class="header">
            <span>{{title}}</span>
        </div>

        <div class="container">
            <div class="scroll">
                <div v-for="item in contextList">{{item}}</div>
            </div>
        </div>

        <div class="floor">
            <button>{{submit}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            title: '标题',
            submit: '标题',
            contextList: ['内容区域']
        }
    },
    mounted() {
        this.getContext();
    },
    methods: {
        getContext() {
            this.contextList = [];
            for (let i = 0; i < 20; i++) {
                this.contextList.push('内容区域');
            }
        }
    }
}
</script>

<style lang="scss">
body {
    padding: 0;
    margin: 0;
}

.adaption {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .header, .floor {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        height: 40px;
        background-color: #ffffff;
    }

    .container {
        flex-grow: 1;

        .scroll {
            /* height: 300px; */
            /* overflow: auto; */
            text-align: center;
        }
    }
}

/* 媒体查询：当视窗高度小于600px时，中间栏进行滚动 */
@media (max-height: 600px) {
  .header, .floor {
    position: fixed; /* 固定在视窗内 */
    width: 100%; /* 宽度为视窗宽度 */
  }

  .header {
    top: 0;
  }

  .floor {
    bottom: 0;
  }

  .container {
    margin-top: 50px; /* 为顶部栏的高度留出空间 */
    margin-bottom: 50px; /* 为底部栏的高度留出空间 */
    height: calc(100% - 100px); /* 减去顶部和底部栏的高度 */
  }
}
</style>
