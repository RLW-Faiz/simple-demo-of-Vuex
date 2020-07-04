<template>
    <div class="index">
        <div class="user_state">{{this.$store.state.user_info.user_info}}</div>
        <button @click="change_btn">改变用户状态</button>
    </div>
</template>
<script>
import store from '../../store'
export default {
    data(){
        return{

        }
    },
    methods:
    {
        change_btn(){
            store.commit('login')
        },
    }
}
</script>
<style lang="less" scoped>
    .user_state{
        width: 100%;
        height: 100px;
        font-size: 30px;
    }
</style>