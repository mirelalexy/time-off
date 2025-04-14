<script>
    import { link } from 'svelte-spa-router';
    import Login from '../components/Login.svelte';
    import Logo from '../components/Logo.svelte';
</script>

<div class="flex flex-col min-h-screen justify-center items-center gap-9">
    <Logo/>
    <Login/>
    <span>Don't have an account?
        <a use:link href="/signup" class="underline">
            Sign Up
        </a>
    </span>
</div>