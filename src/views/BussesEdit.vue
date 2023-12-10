<template>
    <div class="edit-bus__container">
        <div class="edit-bus__wrapper">
            <v-text-field
                class="edit-bus__input"
                v-model="busDate.busNumber"
                type="text"
                label="Bus number:"
            ></v-text-field>
            <v-text-field
                class="edit-bus__input"
                v-model="busDate.placesNumber"
                type="number"
                label="Bus places number: "
            ></v-text-field>
        </div>
        <div class="edit-bus__block">
            <v-btn class="edit-bus__edit" @click="onAction">{{ actionButtonTitle }}</v-btn>
            <v-btn class="edit-bus__cancel" @click="onCancel">Cancel</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'BussesEdit',

    data() {
        return {
            busDate: {},
        }
    },
    computed: {
        ...mapGetters('busses', ['getBusById']),
        busId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.busId ? 'Save' : 'Create'
        },
    },
    created() {
        this.busDate = { ...this.getBusById(this.busId) }
    },
    methods: {
        ...mapActions('busses', ['addBusses', 'updateBusses']),
        onAction() {
            if (!this.busId) {
                this.addBusses(this.busDate)
            } else {
                this.updateBusses({
                    busId: this.busDate.id,
                    busDate: {
                        busNumber: this.busDate.busNumber,
                        placesNumber: this.busDate.placesNumber,
                    },
                })
            }
            this.$router.push({
                name: 'busses',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'busses',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.edit-bus {
    // .edit-bus__container

    &__container {
        padding-left: 20px;
        align-items: start;
    }

    // .edit-bus__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    // .edit-bus__label

    &__label {
    }
    // .edit-bus__input

    &__input {
        width: 298px;
    }

    // .edit-bus__block

    &__block {
        display: flex;
        gap: 91px;
    }

    // .edit-bus__edit

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
    // .edit-bus__cancel

    &__cancel {
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
