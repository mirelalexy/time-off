<script>
	import Router, {location, link} from 'svelte-spa-router';
	import './app.css';
    import Home from './routes/Home.svelte';
	import SignUp from './routes/SignUp.svelte';
	import EmployeePortal from './routes/EmployeePortal.svelte';
	import ManagerPortal from './routes/ManagerPortal.svelte';
	import ConfirmAccount from './routes/ConfirmAccount.svelte';
	import ResetPassword from './routes/ResetPassword.svelte';
 	import { ModeWatcher } from "mode-watcher";
</script>
 
<ModeWatcher />
<slot />

<Router routes={{
    '/': Home,
	'/signup': SignUp,
	'/employeeportal': EmployeePortal,
	'/managerportal': ManagerPortal,
	'/confirm': ConfirmAccount,
	'/reset': ResetPassword
}}/>