<script>
    import { push } from 'svelte-spa-router';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Select from "$lib/components/ui/select/index.js"
</script>

<Card.Root class="w-[400px]">
    <Card.Header>
     <Card.Title>Create Account</Card.Title>
     <Card.Description>Start using Time Off.</Card.Description>
    </Card.Header>
    <Card.Content>
     <form>
      <div class="grid w-full items-center gap-4">
       <div class="flex flex-col space-y-2">
        <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input id="first-name" placeholder="Alexandra" required />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input id="last-name" placeholder="Tomescu" required />
            </div>
        </div>
       <div class="flex flex-col space-y-2">
        <Label for="email-signup">Email Address</Label>
        <Input id="email-signup" placeholder="alexandra@example.com" required/>
       </div>
       <div class="flex flex-col space-y-2">
        <Label for="passwordsignup">Password</Label>
        <Input id="passwordsignup" placeholder="" type="password" required/>
       </div>
       <div class="flex flex-col space-y-2">
        <Label for="managername">Manager</Label>
        <Input id="managername" placeholder="Sarah Smith" required/>
       </div>
       <div class="flex flex-col space-y-2">
        <Label for="managername">Function</Label>
        <Input id="managername" placeholder="Web Developer" required/>
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
      </div>
     </form>
    </Card.Content>
    <Card.Footer class="flex justify-between">
     <Button variant="outline" on:click={() => push('/')}>Cancel</Button>
     <Button on:click={() => push('/confirm')}>Sign Up</Button>
    </Card.Footer>
</Card.Root>  