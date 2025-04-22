<script >
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import { push } from "svelte-spa-router";
    import PendingTableRowManager from "./PendingTableRowManager.svelte";
</script>

<Card.Root class="xl:col-span-1">
    <Card.Header class="flex flex-row items-center">
		<div class="grid gap-2">
			<Card.Title>Pending</Card.Title>
			<Card.Description>Approve or reject pending requests.</Card.Description>
		</div>
		<Button on:click={() => push('/managerportal/pending')} size="sm" class="ml-auto gap-1">
			View All
			<ArrowUpRight class="h-4 w-4" />
		</Button>
	</Card.Header>
    <Card.Content>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head>User</Table.Head>
                    <Table.Head class="hidden sm:table-cell">Start Date</Table.Head>
                    <Table.Head class="hidden md:table-cell">End Date</Table.Head>
                     <Table.Head class="text-right">Type</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <PendingTableRowManager userInitials="LK" userAvatar="https://github.com/shadcn.png" userName="Leon Kennedy" type="Sick" startDate="2025-05-10" endDate="2025-05-13"/>
                <PendingTableRowManager userInitials="LK" userAvatar="https://github.com/shadcn.png" userName="Leon Kennedy" type="Sick" startDate="2025-05-10" endDate="2025-05-13"/>
            </Table.Body>
        </Table.Root>
    </Card.Content>
</Card.Root>