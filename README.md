# vue-replay 使用说明

    <template>
        <div id="app">
            <button @click="getFocus">获取焦点</button>
            <vue-replay
            v-model="value"
            :focus-type.sync="show"
            @send="send()" />
        </div>
    </template>

    <script>
        import vueReplay from 'vue-replay'
        export default {
        name: 'App',
        components: {
            vueReplay
        },
        data() {
            return {
            value: '',
            show: false
            }
        },
        watch: {
            value() {
            console.log(this.value)
            }
        },
        methods: {
            getFocus() {
            this.show = true
            },
            send() {
            console.log(this.value)
            this.show = false
            }
        }
        }
    </script>

# 参数说明

focus-type.sync 控制回复框 是否展示

    true:  展示
    fasle: 不展示
    默认false

@send 点击发送后的 回调函数