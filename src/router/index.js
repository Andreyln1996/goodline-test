import VueRouter from "vue-router";
import TaskOne from "@/components/TaskOne/TaskOne";
import GoodlineTasks from "@/components/GoodlineTasks";

export default new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/task-one',
            component: TaskOne,
            name: 'TaskOne'
        },

        {
            path: '/',
            component: GoodlineTasks,
            name: 'GoodlineTasks'
        },

    ]

})