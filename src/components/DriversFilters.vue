<template>
    <div class="driver-filter__container">
        <div class="driver-filter__wrapper">
            <div class="driver-filter__block">
                <v-text-field
                    class="driver-filter__input"
                    v-model="filterData.name"
                    type="text"
                    label="Drivers name input"
                ></v-text-field>
            </div>
            <div class="driver-filter__block">
                <v-text-field
                    class="driver-filter__input"
                    v-model="filterData.expMin"
                    type="number"
                    label="Drivers minimal experience"
                ></v-text-field>
            </div>
            <div class="driver-filter__block">
                <v-text-field
                    class="driver-filter__input"
                    v-model="filterData.expMax"
                    type="number"
                    label="Drivers maximal experience"
                ></v-text-field>
            </div>
            <v-btn class="button-clear" @click="clearFilter">Clear</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DriversFilters',

    data() {
        return {
            filterData: {
                name: null,
                expMin: null,
                expMax: null,
            },
        }
    },

    watch: {
        filterData: {
            handler(newFilterValue) {
                this.updateFilter(newFilterValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('drivers', ['updateFilter']),
        clearFilter() {
            this.filterData = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.driver-filter {
    // .driver-filter__container

    &__container {
    }

    // .driver-filter__wrapper

    &__wrapper {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        align-items: center;
    }

    // .driver-filter__block

    &__block {
    }

    // .driver-filter__label

    &__label {
    }

    // .driver-filter__input

    &__input {
        width: 298px;
    }
}
.button-clear {
    margin-bottom: 16px;
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
</style>
