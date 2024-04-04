<template>
    <div class="login-page">
        <div class="login-form">
            <span>LiteAdmin</span>
            <div>
                <input type="text" placeholder="用户名" v-model="user">
            </div>
            <div>
                <input :type="pw_input_type" placeholder="密码" v-model="password">
                <span class="pw-eye" @click="change_pw_visiable">{{ pw_eye }}</span>
            </div>

            <div class="login-form-buttons">
                <button @click="login">提交</button>
                <button @click="reset">清空</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref('admin')
const password = ref('123456')
const pw_input_type = ref('password')
const pw_eye = ref('🙈')


const change_pw_visiable = function () {
    if (pw_input_type.value === 'password') {
        pw_eye.value = '🐵'
        pw_input_type.value = 'text'
    }
    else {
        pw_eye.value = '🙈'
        pw_input_type.value = 'password'
    }
}
const login = function () {
    setTimeout(() => {
        router.push({
            path: '/home'
        })
    }, 500);
}
const reset = function () {
    user.value = ''
    password.value = ''
}

console.log(user.value)

</script>

<style>
.login-page {
    position: relative;
    background-image: url('../../assets/bg.png');
    background-size: cover;
    width: 100%;
    height: 100%;
}

.login-page span {
    font-size: 30px;
    color: var(--li-color);
    margin-bottom: 50px;
    text-shadow: 3px 3px 5px var(--li-color-hover);
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 100px;
    top: 200px;

    border-radius: 30px;
    width: 500px;
    height: 300px;
    background: linear-gradient(rgb(213, 134, 79), rgb(52, 125, 176));
    box-shadow: inset 3px 3px 8px var(--li-color), inset -3px -3px 8px var(--li-color);
}

.login-form input {
    height: 30px;
    width: 300px;
    border: 2px solid var(--li-color-hover);
    margin: 10px 0;
}

.login-form-buttons button {
    height: 30px;
    width: 60px;
    margin: 10px 10px;
    border-radius: 10px;
    cursor: pointer;
}

.login-form-buttons button:hover {
    background-color: var(--li-color-hover);
    color: white;
}

.pw-eye {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 70px;
    bottom: 50px;
    cursor: pointer;
}
</style>