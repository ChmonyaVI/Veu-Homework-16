<template>
    <div class="assignment__container">
        <assignment-creator />
        <assignments-list />
    </div>
</template>

<script>
import AssignmentsList from '@/components/AssignmentsList.vue'
import AssignmentCreator from '../components/AssignmentCreator.vue'
export default {
    name: 'AssignmentsView',
    components: { AssignmentsList, AssignmentCreator },
}
</script>

<style lang="scss" scoped>
.assignment__container {
    padding-left: 20px;
}
</style>
