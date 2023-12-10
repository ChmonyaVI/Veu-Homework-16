<template>
    <div class="driver-edit__container">
        <div class="driver-edit__wrapper">
            <v-text-field
                class="driver-edit__input"
                v-model="driverData.driverName"
                type="text"
                label="Driver name: "
            ></v-text-field>
            <v-text-field
                class="driver-edit__input"
                v-model="driverData.driverExperience"
                type="number"
                label="Driver experience: "
            ></v-text-field>
        </div>
        <div class="driver-edit__btn-block">
            <v-btn class="driver-edit__button-edit" @click="onAction">{{ actionButtonTitle }}</v-btn>
            <v-btn class="driver-edit__button-cancel" @click="onCancel">Cancel</v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DriversEdit',
    data() {
        return {
            driverData: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverId']),
        receivedDriverId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedDriverId ? 'Save' : 'Create'
        },
    },
    created() {
        this.driverData = { ...this.getDriverId(this.receivedDriverId) }
    },
    methods: {
        ...mapActions('drivers', ['addDrivers', 'updateDrivers']),
        onAction() {
            if (!this.receivedDriverId) {
                this.addDrivers(this.driverData)
            } else {
                this.updateDrivers({
                    driverId: this.driverData.id,
                    driverData: {
                        driverName: this.driverData.driverName,
                        driverExperience: this.driverData.driverExperience,
                    },
                })
            }
            this.$router.push({
                name: 'drivers',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'drivers',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.driver-edit {
    // .driver-edit__container

    &__container {
        padding: 20px;
    }

    // .driver-edit__wrapper

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    // .driver-edit__label

    &__input {
        width: 298px;
    }

    // .driver-edit__btn-block

    &__btn-block {
        display: flex;
        gap: 91px;
    }

    // .driver-edit__button

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
.button {
}
</style>
