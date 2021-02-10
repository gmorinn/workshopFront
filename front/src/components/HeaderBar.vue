<template>
    <div class="nav">
        <h1>My app</h1>
        <ul>
            <li>home</li>
            <li>Login</li>
            <li>Signup</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
    .nav {
        background-color: blue;
        height: 5rem;
        position: relative;
        h1 {
            position: absolute;
            top: 1rem;
            left: 1rem;
            color: white;
        }
        ul {
            float: right;
            line-height: 3;
            li {
                list-style: none;
                color: white;
                display: inline;
                font-size: 1.6rem;
                margin-right: 2rem;
                &:hover{
                    box-shadow: 0 1rem 2rem rgba(black, .5);
                }
            }
        }
    }

</style>