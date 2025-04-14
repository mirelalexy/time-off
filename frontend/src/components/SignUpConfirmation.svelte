<script>
    import { push } from 'svelte-spa-router';
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<div class="flex flex-col items-center gap-5">
    <h1 class="text-lg font-bold md:text-3xl">Account Created</h1>
    <p>Just one more step. Please check your email to confirm your account before you can log in.</p>
    <Button on:click={() => push('/')}>Back to Log In</Button>
  </div>

  