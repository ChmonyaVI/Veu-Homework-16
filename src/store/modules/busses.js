import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('bussesList')

export default {
    namespaced: true,
    state: {
        bussesList: [
            // {
            //     id: 1,
            //     busNumber: 'AO2312HA',
            //     placesNumber: 40,
            // },
            // {
            //     id: 2,
            //     busNumber: 'AO2371HA',
            //     placesNumber: 34,
            // },
        ],
        loading: false,
        error: null,

        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
    },
    getters: {
        getBusesList: (state) => state.bussesList,
        getBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId),
    },
    mutations: {
        deleteBus(state, busId) {
            state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
        },
        addBus(state, bus) {
            state.bussesList.push(bus)
        },
        updateItem(state, busToUpdate) {
            const busIndex = state.bussesList.findIndex((bus) => bus.id === busToUpdate.id)
            state.bussesList[busIndex] = busToUpdate
        },
        //========================================================================================================================================================
        setItemsList(state, itemsList) {
            state.bussesList = itemsList
        },
        deleteItem(state, busId) {
            state.bussesList = state.bussesList.filter((item) => item.id !== busId)
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadBussesList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addBusses({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadBussesList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteBusses({ commit, dispatch }, busId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(busId)
                .then(() => {
                    dispatch('loadBussesList').then(() => {
                        commit('deleteBus', busId)
                        dispatch('assignments/deleteAssignmentByBusId', busId, { root: true })
                    })
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateBusses({ commit, dispatch }, { busId, busDate }) {
            console.log('busId', busId)
            console.log('busDate ', busDate)

            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(busId, busDate)
                .then(() => {
                    dispatch('loadBussesList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
    },
    // actions: {
    //     deleteBusAction({ commit, dispatch }, busId) {
    //         commit('deleteBus', busId)
    //         dispatch('assignments/deleteAssignmentByBusId', busId, { root: true })
    //     },
    //     addBusAction({ commit }, busData) {
    //         commit('addBus', {
    //             id: new Date().getTime(),
    //             ...busData,
    //         })
    //     },
    //     updateBusActions({ commit }, busToUpdate) {
    //         commit('updateBus', busToUpdate)
    //     },
    // },
    modules: {},
}
