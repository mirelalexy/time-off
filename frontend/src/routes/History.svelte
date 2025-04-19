<script>
    import ListFilter from "lucide-svelte/icons/list-filter";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import Header from "../components/Header.svelte";
    import HistoryRow from "../components/HistoryRow.svelte";

    // sample data to test if it works (will replace with real data later)
    let requests = [
        { id: 1, title: "Leave Request #1", type: "Sick", startDate: "2025-05-10", endDate: "2025-05-13", managerAvatar: "https://github.com/shadcn.png", managerName: "Leon Kennedy", managerInitials: "LK", reason: "I have a cold", status: "Approved" },
        { id: 2, title: "Leave Request #2", type: "Vacation", startDate: "2025-06-01", endDate: "2025-06-05", managerAvatar: "https://github.com/shadcn.png", managerName: "Ada Wong", managerInitials: "AW", reason: "Family trip", status: "Rejected" },
        { id: 3, title: "Leave Request #3", type: "Personal", startDate: "2025-04-15", endDate: "2025-04-16", managerAvatar: "https://github.com/shadcn.png", managerName: "Claire Redfield", managerInitials: "CR", reason: "Personal matter", status: "Approved" },
        // add more sample data (32 total requests to test)
        ...Array.from({ length: 29 }, (_, i) => ({
        id: i + 4,
        title: `Leave Request #${i + 4}`,
        type: ["Sick", "Vacation", "Personal"][Math.floor(Math.random() * 3)],
        startDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        endDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        managerAvatar: "https://github.com/shadcn.png",
        managerName: "Leon Kennedy",
        managerInitials: "LK",
        reason: "Sample reason " + (i + 4),
        status: ["Approved", "Rejected"][Math.floor(Math.random() * 2)],
        })),
    ];

    // pagination state
    const itemsPerPage = 8;
    let currentPage = 1;
    $: totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
    $: startIndex = (currentPage - 1) * itemsPerPage;
    $: endIndex = Math.min(startIndex + itemsPerPage, filteredRequests.length);
    $: paginatedRequests = filteredRequests.slice(startIndex, endIndex);

    // tab filtering state (all, approved, rejected)
    let selectedTab = 'all';
    $: filteredRequests = requests.filter(request => {
        if (selectedTab === 'all') return true;
        return request.status.toLowerCase() === selectedTab;
    });

    // sorting state (filter By)
    let sortByType = false;
    let sortByStartDate = false;

    $: sortedRequests = [...paginatedRequests].sort((a, b) => {
        if (sortByType) {
        return a.type.localeCompare(b.type);
        }
        if (sortByStartDate) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        }
        return 0; // default: no sorting
    });

    // pagination controls
    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
        currentPage = page;
        }
    }
</script>

<div class="flex min-h-screen w-full flex-col">
    <Header />
    <main class="bg-muted/40 flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Tabs.Root value={selectedTab} onValueChange={(value) => { selectedTab = value; currentPage = 1; }}>
        <div class="flex items-center">
          <Tabs.List>
            <Tabs.Trigger value="all">All</Tabs.Trigger>
            <Tabs.Trigger value="approved">Approved</Tabs.Trigger>
            <Tabs.Trigger value="rejected">Rejected</Tabs.Trigger>
          </Tabs.List>
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
                  bind:checked={sortByType}
                  onCheckedChange={() => { sortByStartDate = false; }}
                >
                  Type
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByStartDate}
                  onCheckedChange={() => { sortByType = false; }}
                >
                  Start Date
                </DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
        <Tabs.Content value="all">
          <Card.Root>
            <Card.Header>
              <Card.Title>History</Card.Title>
              <Card.Description>
                See all information on your past requests.
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
                    <Table.Head class="text-right">
                      Status
                    </Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#each sortedRequests as request (request.id)}
                    <HistoryRow {request} />
                  {/each}
                </Table.Body>
              </Table.Root>
            </Card.Content>
            <Card.Footer class="flex justify-between items-center">
              <div class="text-muted-foreground text-xs">
                Showing <strong>{startIndex + 1}-{endIndex}</strong> of <strong>{filteredRequests.length}</strong> requests
              </div>
              <div class="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {#each Array(totalPages) as _, i}
                  <Button
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    on:click={() => goToPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                {/each}
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
        
        <!-- Approved Tab -->
      <Tabs.Content value="approved">
        <Card.Root>
          <Card.Header>
            <Card.Title>Approved Requests</Card.Title>
            <Card.Description>
              View all your approved leave requests.
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
                  <Table.Head class="text-right">
                    Status
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#each sortedRequests as request (request.id)}
                  <HistoryRow {request} />
                {/each}
              </Table.Body>
            </Table.Root>
          </Card.Content>
          <Card.Footer class="flex justify-between items-center">
            <div class="text-muted-foreground text-xs">
              Showing <strong>{startIndex + 1}-{endIndex}</strong> of <strong>{filteredRequests.length}</strong> approved requests
            </div>
            <div class="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                on:click={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {#each Array(totalPages) as _, i}
                <Button
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  on:click={() => goToPage(i + 1)}
                >
                  {i + 1}
                </Button>
              {/each}
              <Button
                variant="outline"
                size="sm"
                on:click={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
        
        <!-- Rejected Tab -->
      <Tabs.Content value="rejected">
        <Card.Root>
          <Card.Header>
            <Card.Title>Rejected Requests</Card.Title>
            <Card.Description>
              View all your rejected leave requests.
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
                  <Table.Head class="text-right">
                    Status
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#each sortedRequests as request (request.id)}
                  <HistoryRow {request} />
                {/each}
              </Table.Body>
            </Table.Root>
          </Card.Content>
          <Card.Footer class="flex justify-between items-center">
            <div class="text-muted-foreground text-xs">
              Showing <strong>{startIndex + 1}-{endIndex}</strong> of <strong>{filteredRequests.length}</strong> rejected requests
            </div>
            <div class="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                on:click={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {#each Array(totalPages) as _, i}
                <Button
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  on:click={() => goToPage(i + 1)}
                >
                  {i + 1}
                </Button>
              {/each}
              <Button
                variant="outline"
                size="sm"
                on:click={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      </Tabs.Root>
    </main>
</div>