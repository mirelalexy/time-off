<script>
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
  
    export let request;
</script>
  
<Table.Row>
    <Table.Cell>
      <p class="font-medium">{request.title}</p>
    </Table.Cell>
    <Table.Cell>{request.type}</Table.Cell>
    <Table.Cell>{request.startDate}</Table.Cell>
    <Table.Cell>{request.endDate}</Table.Cell>
    <Table.Cell class="hidden md:table-cell">
      <div class="flex flex-row items-center gap-4">
        <Avatar.Root class="w-8 h-8">
          <Avatar.Image src={request.managerAvatar} alt={request.managerName} class="w-8 h-8"/>
          <Avatar.Fallback class="w-8 h-8">{request.managerInitials}</Avatar.Fallback>
        </Avatar.Root>
        <p>{request.managerName}</p>
      </div>
    </Table.Cell>
    <Table.Cell class="hidden lg:table-cell">
      <p>{request.reason}</p>
    </Table.Cell>
    <Table.Cell class="text-right">
      <Badge class="text-xs" variant="outline">{request.status}</Badge>
    </Table.Cell>
</Table.Row>