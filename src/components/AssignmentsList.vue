<template>
    <div class="assignments__container">
        <div class="assignments__wrapper">
            <h1 class="assignments__title">Назначение</h1>
            <div class="assignments__list">
                <div v-for="assignment in getFilledAssignmentsList" :key="assignment.id" class="assignments__item">
                    <div class="assignments__name">
                        {{ assignment.driverName }}
                    </div>
                    <span class="assignments__decor">-</span>
                    <div class="assignments__number">{{ assignment.busNumber }}</div>
                    <div class="assignments__block-btn">
                        <v-btn class="button-delete" @click="deleteAssignment(assignment.id)">Delete</v-btn>
                    </div>
                </div>
                <div v-if="getFilledAssignmentsList.length == 0">Список пуст.</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AssignmentsList',

    computed: {
        ...mapGetters('assignments', ['getAssignmentsList']),
        ...mapGetters('assignments', ['getFilledAssignmentsList']),
    },
    created() {
        this.loadAssignmentsList()
    },
    methods: {
        ...mapActions('assignments', ['loadAssignmentsList']),
        ...mapActions('assignments', ['deleteAssignment']),
    },
}
</script>

<style lang="scss" scoped>
.assignments {
    // .assignments__container

    &__container {
    }

    // .assignments__wrapper

    &__wrapper {
    }

    // .assignments__title

    &__title {
    }
    // .assignments__decor

    &__decor {
        flex-basis: 2%;
    }

    // .assignments__list

    &__list {
    }

    // .assignments__item

    &__item {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
    }

    // .assignments__block

    &__block {
    }

    // .assignments__block-btn

    &__block-btn {
    }
    // .assignments__name

    &__name {
        flex-basis: 3%;
    }

    // .assignments__number

    &__number {
        flex-basis: 6%;
    }
}
.button-delete {
    border: 2px solid black;
    padding: 5px 18px 5px 18px;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #ff0000;
        color: #fff;
    }
}
</style>
