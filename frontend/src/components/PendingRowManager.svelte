<script>
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import Ellipsis from "lucide-svelte/icons/ellipsis";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  
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
    <Table.Cell>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
                <Button
                    builders={[builder]}
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                >
                    <Ellipsis class="h-4 w-4" />
                    <span class="sr-only">Toggle menu</span>
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
                <DropdownMenu.Label>Actions</DropdownMenu.Label>
                <DropdownMenu.Item>Approve</DropdownMenu.Item>
                <DropdownMenu.Item>Reject</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Table.Cell>
</Table.Row>