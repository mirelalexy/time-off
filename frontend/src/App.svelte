<script>
	import Router, {location, link} from 'svelte-spa-router';
	import './app.css';
    import Home from './routes/Home.svelte';
	import SignUp from './routes/SignUp.svelte';
	import EmployeePortal from './routes/EmployeePortal.svelte';
	import NewRequest from './routes/NewRequest.svelte';
	import ManagerPortal from './routes/ManagerPortal.svelte';
	import ConfirmAccount from './routes/ConfirmAccount.svelte';
	import ResetPassword from './routes/ResetPassword.svelte';
	import Settings from './routes/Settings.svelte';
 	import { ModeWatcher } from "mode-watcher";
  	import History from './routes/History.svelte';
	import Pending from './routes/Pending.svelte';
	import SpecialDays from './routes/SpecialDays.svelte';
</script>
 
<ModeWatcher />
<slot />

<Router routes={{
    '/': Home,
	'/signup': SignUp,
	'/employeeportal/dashboard': EmployeePortal,
	'/employeeportal/new': NewRequest,
	'/employeeportal/history': History,
	'/employeeportal/pending': Pending,
	'/employeeportal/special': SpecialDays,
	'/employeeportal/settings': Settings,
	'/managerportal': ManagerPortal,
	'/confirm': ConfirmAccount,
	'/reset': ResetPassword
}}/>