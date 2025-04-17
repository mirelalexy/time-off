<script >
    import * as Card from "$lib/components/ui/card/index.js";

    export let title;
    export let number;
    export let icon;
</script>
  
<Card.Root>
    <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-1">
      <Card.Title class="text-sm font-medium">{title}</Card.Title>
      <svelte:component this={icon} class="text-muted-foreground h-4 w-4" />
    </Card.Header>
    <Card.Content class="pt-0 px-6 pb-6">
      <div class="text-2xl font-bold">{number}</div>
    </Card.Content>
</Card.Root>