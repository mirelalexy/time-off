<script>
    import { link, push } from 'svelte-spa-router';
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="flex flex-col items-center">
    <Tabs.Root value="employee" class="w-[400px]">
        <Tabs.List class="grid w-full grid-cols-2">
         <Tabs.Trigger value="employee">Employee Portal</Tabs.Trigger>
         <Tabs.Trigger value="manager">Manager Portal</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="employee">
         <Card.Root>
          <Card.Header>
           <Card.Title>Employee Portal</Card.Title>
           <Card.Description>
            Submit a leave request, view upcoming holidays, birthdays, pending and past requests, information on vacation days.
           </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
           <div class="space-y-1">
            <Label for="email">Email Address</Label>
            <Input id="email" value="" />
           </div>
           <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a use:link href="/reset" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          </Card.Content>
          <Card.Footer>
           <Button on:click={() => push('/employeeportal')} class="w-full">Log In As Employee</Button>
          </Card.Footer>
         </Card.Root>
        </Tabs.Content>
        <Tabs.Content value="manager">
         <Card.Root>
          <Card.Header>
           <Card.Title>Manager Portal</Card.Title>
           <Card.Description>
            Approve/reject requests, track pending and past leave requests.
           </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
             <Label for="email">Email Address</Label>
             <Input id="email" value="" />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password">Password</Label>
                  <a use:link href="/reset" class="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
           </Card.Content>
           <Card.Footer>
            <Button on:click={() => push('/managerportal')} class="w-full">Log In As Manager</Button>
           </Card.Footer>
         </Card.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>