<template>
    <div class="drivers__container container">
        <div class="drivers__wrapper">
            <div class="drivers__list">
                <div v-for="driver in getFilterDriverList" :key="driver.id" class="drivers__item">
                    <div class="drivers__name">{{ driver.driverName }}</div>
                    <div class="drivers__exp">{{ driver.driverExperience }}</div>
                    <div class="drivers__block-button">
                        <v-btn class="drivers__button-edit" @click="onEdit(driver.id)">Edit</v-btn>
                        <v-btn class="drivers__button-cancel" @click="deleteDrivers(driver.id)">Delete</v-btn>
                    </div>
                </div>
                <div v-if="getFilterDriverList.length == 0">Список водителей пуст.</div>
            </div>
            <router-link :to="{ name: 'drivers-config' }" class="drivers__add">Add</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DriversList',

    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('drivers', ['getFilterDriverList']),
    },
    created() {
        this.loadDriversList()
    },
    methods: {
        ...mapActions('drivers', ['loadDriversList']),
        ...mapActions('drivers', ['deleteDrivers']),
        onEdit(driverId) {
            this.$router.push({
                name: 'drivers-config',
                params: { id: driverId },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.drivers {
    // .drivers__container

    &__container {
    }

    // .drivers__wrapper

    &__wrapper {
    }

    &__add {
        border: 2px solid black;
        padding: 5px 18px 5px 18px;
        border-radius: 5px;
        background-color: transparent;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: #42b983;
            color: #fff;
            border: 2px solid #42b983;
        }
    }
    // .drivers__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    // .drivers__item

    &__item {
        display: flex;
        gap: 10px;
        align-items: baseline;
    }

    // .drivers__name

    &__name {
        flex-basis: 3%;
    }

    // .drivers__exp

    &__exp {
        flex-basis: 1%;
    }

    // .drivers__block-button

    &__block-button {
        display: flex;
        gap: 10px;
    }
}
.drivers {
    // .drivers__block-button

    &__block-button {
    }

    // .drivers__button-edit

    &__button-edit {
        margin-top: 20px;
        border: 2px solid black;
        padding: 5px 18px 5px 18px;
        border-radius: 5px;
        background-color: transparent;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: #c5c5c5;
            color: #fff;
        }
    }

    // .drivers__button-cancel

    &__button-cancel {
        margin-top: 20px;
        border: 2px solid black;
        padding: 5px 18px 5px 18px;
        border-radius: 5px;
        background-color: transparent;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: #be0303;
            color: #fff;
        }
    }
}
</style>
