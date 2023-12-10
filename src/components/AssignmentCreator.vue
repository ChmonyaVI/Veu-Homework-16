<template>
    <div class="assignment-creator__container">
        <h1 class="assignment-creator__title">Добавиление назначение</h1>
        <div class="assignment-creator__wrapper">
            <div class="assignment-creator__item">
                <v-select
                    v-model="assignment.driverId"
                    label="Driver Name"
                    :items="getDriversList"
                    item-value="id"
                    variant="solo"
                    item-title="driverName"
                    clearable
                >
                    <template v-slot:item="{ props, item }">
                        <v-list-item
                            v-bind="props"
                            :value="item.raw.id"
                            :subtitle="item.raw.driverExperience"
                        ></v-list-item>
                    </template>
                </v-select>
            </div>
            <div class="assignment-creator__item">
                <v-select
                    v-model="assignment.busId"
                    label="Bus"
                    :items="getBusesList"
                    item-value="id"
                    variant="solo"
                    item-title="busNumber"
                    clearable
                >
                    <template v-slot:item="{ props, item }">
                        <v-list-item
                            v-bind="props"
                            :value="item.raw.id"
                            :subtitle="item.raw.placesNumber"
                        ></v-list-item>
                    </template>
                </v-select>
            </div>
            <v-btn class="button-add" @click="onAdd">Add</v-btn>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentCreator',

    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('busses', ['getBusesList']),
    },
    methods: {
        ...mapActions('assignments', ['addAssignment']),
        onAdd() {
            this.addAssignment(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.assignment-creator {
    // .assignment-creator__container

    &__container {
    }

    // .assignment-creator__wrapper

    &__wrapper {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    // .assignment-creator__title

    &__title {
    }

    // .assignment-creator__item

    &__item {
        width: 298px;
    }

    // .assignment-creator__label

    &__label {
    }
}

.button-add {
    margin-bottom: 20px;
    border: 2px solid black;
    padding: 5px 18px 5px 18px;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #42b983;
        color: #fff;
        border: 2px solid #42b983;
    }
}
</style>
