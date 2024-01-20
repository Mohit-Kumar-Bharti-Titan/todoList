import ViewAllJobs from './components/ViewAllJobs'
import ViewPendingTodo from './components/ViewPendingTodo'
import ViewDoneTodo from './components/ViewDoneTodo'

export default [
    {path : '/', component: ViewAllJobs},
    {path : '/done', component : ViewDoneTodo},
    {path : '/pending', component : ViewPendingTodo}

] 