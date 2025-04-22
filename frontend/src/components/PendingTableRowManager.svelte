<script >
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    export let type;
    export let startDate;
    export let endDate;
    export let userName;
    export let userAvatar;
    export let userInitials;
</script>

<Table.Row>
    <Table.Cell>
        <div class="flex flex-row items-center gap-4">
            <Avatar.Root class="w-8 h-8">
              <Avatar.Image src={userAvatar} alt={userName} class="w-8 h-8"/>
              <Avatar.Fallback class="w-8 h-8">{userInitials}</Avatar.Fallback>
            </Avatar.Root>
            <p>{userName}</p>
        </div>
    </Table.Cell>
    <Table.Cell class="hidden sm:table-cell">{startDate}</Table.Cell>
    <Table.Cell class="hidden md:table-cell">{endDate}</Table.Cell>
    <Table.Cell class="text-right">{type}</Table.Cell>
</Table.Row>