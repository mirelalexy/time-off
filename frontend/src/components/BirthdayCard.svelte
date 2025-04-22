<script >
    import { push } from "svelte-spa-router";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    export let employee;
</script>
  
<Card.Root>
    <Card.Header>
        <p class="text-2xl font-semibold">It's {employee} birthday soon!</p>
    </Card.Header>
    <Card.Content class="p-6 flex flex-col justify-center items-center gap-9">
        <Avatar.Root class="w-16 h-16">
            <Avatar.Image src=https://github.com/shadcn.png alt="bday" class="w-16 h-16"/>
            <Avatar.Fallback class="w-16 h-16">LK</Avatar.Fallback>
        </Avatar.Root>
        <Button on:click={() => push('/employeeportal/special')} class="m-auto">See Birthdays</Button>
    </Card.Content>
</Card.Root>