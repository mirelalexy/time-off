<script lang="ts">
    import { push } from 'svelte-spa-router';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Select from "$lib/components/ui/select/index.js"
</script>
  
<Card.Root class="w-full max-w-sm">
    <Card.Header>
      <Card.Title class="text-2xl">Forgot Password</Card.Title>
      <Card.Description>Enter your email address below to reset your password.</Card.Description>
    </Card.Header>
    <Card.Content class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="alexandra@example.com" required />
      </div>
      <div class="flex flex-col space-y-2">
        <Label for="role">Role</Label>
        <Select.Root>
            <Select.Trigger id="role" aria-label="Select role">
                <Select.Value placeholder="Select role" />
            </Select.Trigger>
            <Select.Content>
                <Select.Item value="employee" label="Employee">Employee</Select.Item>
                <Select.Item value="manager" label="Manager">Manager</Select.Item>
            </Select.Content>
        </Select.Root>
       </div>
    </Card.Content>
    <Card.Footer>
      <Button class="w-full" on:click={() => push('/')}>Send</Button>
    </Card.Footer>
</Card.Root>
  