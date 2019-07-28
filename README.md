# vue-replay 使用说明

        <sendReplay
        v-model="value"
        :focus-type.sync="show"
        @send="send()" />
# 参数说明

focus-type.sync 控制回复框 是否展示

    true:  展示
    fasle: 不展示
    默认false

@send 点击发送 回调函数