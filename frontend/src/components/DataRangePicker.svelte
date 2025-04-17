<script>
    import CalendarIcon from "lucide-svelte/icons/calendar";
    import {
      CalendarDate,
      DateFormatter,
      getLocalTimeZone,
    } from "@internationalized/date";
    import { cn } from "$lib/utils.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { RangeCalendar } from "$lib/components/ui/range-calendar/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
  
    const df = new DateFormatter("en-US", {
      dateStyle: "medium",
    });
  
    // Get the current date (April 17, 2025)
    const now = new Date();
    const today = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
  
    // Initialize value with the current date
    let value = {
      start: today,
      end: today.add({ days: 7 }),
    };
  
    let startValue = undefined;
  
    // Optional: Update in real-time (every minute)
    setInterval(() => {
      const now = new Date();
      value = {
        start: new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate()),
        end: new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate()).add({ days: 7 }),
      };
    }, 60 * 1000); // Update every minute
  
    // Calculate days total
    $: daysTotal = value && value.start && value.end
      ? value.end.day - value.start.day + 1 // Simple calculation; adjust for months/years if needed
      : 0;
  </script>
  
  <div class="grid gap-2">
    <Popover.Root openFocus>
      <Popover.Trigger asChild let:builder>
        <Button
          variant="outline"
          class={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
          builders={[builder]}
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {#if value && value.start}
            {#if value.end}
              {df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
                value.end.toDate(getLocalTimeZone())
              )}
            {:else}
              {df.format(value.start.toDate(getLocalTimeZone()))}
            {/if}
          {:else if startValue}
            {df.format(startValue.toDate(getLocalTimeZone()))}
          {:else}
            Pick a date
          {/if}
        </Button>
      </Popover.Trigger>
      <Popover.Content class="w-auto p-0" align="start">
        <RangeCalendar
          bind:value
          bind:startValue
          initialFocus
          numberOfMonths={2}
          placeholder={value?.start}
        />
      </Popover.Content>
    </Popover.Root>
    <p class="text-sm">Days total: {daysTotal}</p>
  </div>