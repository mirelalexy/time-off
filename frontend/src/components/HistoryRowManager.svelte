<script>
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
  
    export let request;
</script>
  
<Table.Row>
    <Table.Cell class="font-medium">
      <div class="flex items-center gap-3">
        <Avatar.Root class="h-8 w-8">
          <Avatar.Image src={request.employeeAvatar} alt={request.employeeName} />
          <Avatar.Fallback>{request.employeeInitials}</Avatar.Fallback>
        </Avatar.Root>
        <span>{request.employeeName}</span>
      </div>
    </Table.Cell>
    <Table.Cell>{request.type}</Table.Cell>
    <Table.Cell>{request.startDate}</Table.Cell>
    <Table.Cell>{request.endDate}</Table.Cell>
    <Table.Cell class="hidden lg:table-cell">{request.reason}</Table.Cell>
    <Table.Cell class="text-right">
      <Badge variant="outline">{request.status}</Badge>
    </Table.Cell>
</Table.Row>