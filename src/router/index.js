import VueRouter from "vue-router";
import TaskOne from "@/components/TaskOne/TaskOne";
import GoodlineTasks from "@/components/GoodlineTasks";
import TaskTwo from "../components/TaskTwo/TaskTwo";

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

        {
            path: '/task-two',
            component: TaskTwo,
            name: 'TaskTwo'
        },

    ]

})