<script>
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import { push } from "svelte-spa-router";
    import HistoryTableRowManager from "./HistoryTableRowManager.svelte";
</script>
  
<Card.Root class="xl:col-span-2">
    <Card.Header class="flex flex-row items-center">
    <div class="grid gap-2">
      <Card.Title>History</Card.Title>
      <Card.Description>See requests you've approved or rejected.</Card.Description>
    </div>
    <Button on:click={() => push('/managerportal/history')} size="sm" class="ml-auto gap-1">
      View All
      <ArrowUpRight class="h-4 w-4" />
    </Button>
  </Card.Header>
    <Card.Content>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head>User</Table.Head>
                    <Table.Head class="hidden sm:table-cell">Type</Table.Head>
                    <Table.Head class="hidden md:table-cell">Start Date</Table.Head>
                    <Table.Head class="hidden md:table-cell">End Date</Table.Head>
                    <Table.Head class="text-right">Status</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
              <HistoryTableRowManager/>
              <HistoryTableRowManager/>
              <HistoryTableRowManager/>
            </Table.Body>
        </Table.Root>
    </Card.Content>
</Card.Root>