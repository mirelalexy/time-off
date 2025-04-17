<script>
    import * as Table from "$lib/components/ui/table/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
  </script>
  
<Table.Row>
    <Table.Cell>
        <p class="font-medium">Leave Request #1</p>
    </Table.Cell>
    <Table.Cell class="hidden sm:table-cell">Sick</Table.Cell>
    <Table.Cell class="hidden md:table-cell">2025-05-10</Table.Cell>
    <Table.Cell class="hidden md:table-cell">2025-05-13</Table.Cell>
    <Table.Cell class="hidden md:table-cell">
        <div class="flex flex-row items-center gap-4">
            <Avatar.Root>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <p>Leon Kennedy</p>
        </div>
    </Table.Cell>
    <Table.Cell class="text-right">
      <Badge class="text-xs" variant="outline">Approved</Badge>
    </Table.Cell>
</Table.Row>