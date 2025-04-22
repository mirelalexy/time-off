<script>
    import { push } from "svelte-spa-router";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import CalendarDays from "lucide-svelte/icons/calendar-days";

    export let holidayName;
    export let holidayDate;
</script>
  
<Card.Root>
    <Card.Header>
        <p class="text-2xl font-semibold">Upcoming Holiday</p>
    </Card.Header>
    <Card.Content class="p-6 flex flex-col justify-center gap-7">
        <div class="flex flex-row w-full bg-orange-600 gap-3 rounded-lg p-3 items-center">
            <CalendarDays class="h-10 w-10"/>
            <div class="flex flex-col">
            <p class="font-semibold text-xl">{holidayName}</p>
            <p class="text-[14px]">{holidayDate}</p>
            </div>
        </div>
        <Button on:click={() => push('/employeeportal/special')} class="m-auto">See Holidays</Button>
    </Card.Content>
</Card.Root>