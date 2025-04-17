<script >
    import * as Table from "$lib/components/ui/table/index.js";

    export let requestNumber;
    export let type;
    export let startDate;
    export let endDate;
</script>

<Table.Row>
    <Table.Cell>
        <p class="font-medium">Leave Request #{requestNumber}</p>
    </Table.Cell>
    <Table.Cell class="hidden sm:table-cell">{type}</Table.Cell>
    <Table.Cell class="hidden md:table-cell">{startDate}</Table.Cell>
    <Table.Cell class="text-right">{endDate}</Table.Cell>
</Table.Row>