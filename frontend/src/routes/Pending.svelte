<script>
    import ListFilter from "lucide-svelte/icons/list-filter";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import Header from "../components/Header.svelte";
    import PendingRow from "../components/PendingRow.svelte";
  
    // sample data
    let requests = [
      { id: 1, title: "Leave Request #1", type: "Sick", startDate: "2025-05-20", endDate: "2025-05-23", managerAvatar: "https://github.com/shadcn.png", managerName: "Leon Kennedy", managerInitials: "LK", reason: "I have a cold, need to rest." },
      { id: 2, title: "Leave Request #2", type: "Vacation", startDate: "2025-06-10", endDate: "2025-06-15", managerAvatar: "https://github.com/shadcn.png", managerName: "Ada Wong", managerInitials: "AW", reason: "Family vacation to the beach." },
      { id: 3, title: "Leave Request #3", type: "Personal", startDate: "2025-04-25", endDate: "2025-04-26", managerAvatar: "https://github.com/shadcn.png", managerName: "Claire Redfield", managerInitials: "CR", reason: "Personal matter to attend to." },
      ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 4,
        title: `Leave Request #${i + 4}`,
        type: ["Sick", "Vacation", "Personal"][Math.floor(Math.random() * 3)],
        startDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        endDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        managerAvatar: "https://github.com/shadcn.png",
        managerName: "Leon Kennedy",
        managerInitials: "LK",
        reason: "Sample reason " + (i + 4),
      })),
    ];
  
    // sorting state (Filter By)
    let sortBy = '';
  
    $: sortedRequests = [...requests].sort((a, b) => {
      if (sortBy === 'type') {
        return a.type.localeCompare(b.type);
      }
      if (sortBy === 'startDate') {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      }
      return 0; // default: no sorting
    });
</script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Header />
    <main class="bg-muted/40 flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="flex items-center">
        <div class="ml-auto flex items-center gap-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <Button
                builders={[builder]}
                variant="outline"
                size="sm"
                class="h-8 gap-1"
              >
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Label>Sort by</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.CheckboxItem
                checked={sortBy === 'type'}
                onCheckedChange={(checked) => { sortBy = checked ? 'type' : ''; }}
              >
                Type
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                checked={sortBy === 'startDate'}
                onCheckedChange={(checked) => { sortBy = checked ? 'startDate' : ''; }}
              >
                Start Date
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <Card.Root>
        <Card.Header>
          <Card.Title>Pending</Card.Title>
          <Card.Description>
            View all information on your pending requests.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Leave Request</Table.Head>
                <Table.Head>Type</Table.Head>
                <Table.Head>Start Date</Table.Head>
                <Table.Head>End Date</Table.Head>
                <Table.Head class="hidden md:table-cell">
                  Manager
                </Table.Head>
                <Table.Head class="hidden lg:table-cell">
                  Reason
                </Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each sortedRequests as request (request.id)}
                <PendingRow {request} />
              {/each}
            </Table.Body>
          </Table.Root>
        </Card.Content>
        <Card.Footer>
          <div class="text-muted-foreground text-xs">
            Showing <strong>{requests.length}</strong> pending requests
          </div>
        </Card.Footer>
      </Card.Root>
    </main>
</div>