<template>
    <div class="busses__container">
        <div class="busses__list">
            <div v-for="bus in getBusesList" :key="bus.id" class="busses__item">
                <div class="busses__number">{{ bus.busNumber }}</div>
                <div class="busses__places">{{ bus.placesNumber }}</div>
                <div class="busses__block">
                    <button class="button__edit" @click="onEdit(bus.id)">Edit</button>
                    <button class="button__delete" @click="deleteBusses(bus.id)">Delete</button>
                </div>
            </div>
            <div v-if="getBusesList.length == 0">Список автобусов пуст.</div>
        </div>
        <router-link :to="{ name: 'busses-config' }" class="busses__add">Add</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BussesView',
    computed: {
        ...mapGetters('busses', ['getBusesList']),
    },
    created() {
        this.loadBussesList()
    },
    methods: {
        ...mapActions('busses', ['loadBussesList']),
        ...mapActions('busses', ['deleteBusses']),
        onEdit(busId) {
            this.$router.push({
                name: 'busses-config',
                params: {
                    id: busId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.busses {
    // .busses__container

    &__container {
        padding-left: 20px;
    }

    // .busses__list

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    // .busses__item

    &__item {
        display: flex;
        gap: 10px;
        align-items: baseline;
    }

    // .busses__number

    &__number {
        flex-basis: 5%;
    }

    // .busses__places

    &__places {
        flex-basis: 1%;
    }

    // .busses__add

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
    &__block {
        display: flex;
        gap: 10px;
    }
}
.button {
    // .button__edit

    &__edit {
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

    // .button__delete

    &__delete {
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
