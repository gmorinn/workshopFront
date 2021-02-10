<template>
    <div class="block">
        <div class="block__title">User login</div>
        <div class="block__form">
            <div class="formgroup">
                <input type="text" class="form__input" placeholder="Username" id="name" required autocomplete="off">
                <label for="name" class="form__label"></label>
            </div>
            <div class="formgroup">
                <input type="password" class="form__input" placeholder="Password" id="password" required autocomplete="off">
                <label for="password" class="form__label"></label>
            </div>
            <a href="#" class="block__btn" v-on:click="$emit('clickLogin')">Login</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="scss" scoped>
    .block {
        position: relative;
        height: 15rem;

        &__btn {
            background-color: white;
            border: 1px solid blue;
            padding: .4rem 2rem;
            border-radius: .7rem;
            color: blue;
            text-decoration: none;
            &:hover {
                background-color: blue;
                color: white;
                border: 1px solid white;
            }
        }

        &__title {
            font-size: 3rem;
            text-align: center;
            color: blue;
            font-weight: bold;
        }

        &__form {
            position: absolute;
            left: 50%;
            top: 60%;
            transform: translate(-50%, -50%);

            .formgroup {
                margin-bottom: 2rem;
                .form__input {
                    padding: .4rem .7rem;
                    border-radius: 1rem;
                    outline: none;
                    border: 2px solid blue;
                }
            }
        }
    }

</style>