<template>
    <div class="floating-window">
        <span class="popper-arrow"></span>
        <ul>
            <li>#当前角色</li>
            <li>#切换角色</li>
            <li>#修改密码</li>
            <li>
                <RouterLink to="/login">#退出登录</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.floating-window {
    position: relative;
}

.popper-arrow {
    display: block;
    position: relative;
    left: 84px;
    width: 10px;
    height: 10px;
    background-color: var(--li-color);
    margin-top: 3px;
    margin-bottom: -5px;
    transform: rotate(45deg);
}

ul {
    position: relative;
    left: 15px;
    background-color: var(--li-color);
    padding-top: 10px;
    border-radius: 10px;
}

li {
    margin-top: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: white;
    text-align: center;
}

a {
    color: white;
    align-items: center;
    justify-content: center;
}
</style>