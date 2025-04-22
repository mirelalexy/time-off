<script>
    import ListFilter from "lucide-svelte/icons/list-filter";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import PendingRowManager from "../components/PendingRowManager.svelte";
  import HeaderManager from "../components/HeaderManager.svelte";
  
    // sample data
    let requests = [
      {
        id: 1,
        employeeAvatar: "https://github.com/shadcn.png",
        employeeName: "Leon Kennedy",
        employeeInitials: "LK",
        type: "Sick",
        startDate: "2025-05-10",
        endDate: "2025-05-13",
        reason: "I have a cold",
        status: "Approved",
        submitDate: "2025-04-01",
      },
      {
        id: 2,
        employeeAvatar: "https://github.com/shadcn.png",
        employeeName: "Ada Wong",
        employeeInitials: "AW",
        type: "Vacation",
        startDate: "2025-06-01",
        endDate: "2025-06-05",
        reason: "Family trip",
        status: "Rejected",
        submitDate: "2025-04-02",
      },
      {
        id: 3,
        employeeAvatar: "https://github.com/shadcn.png",
        employeeName: "Claire Redfield",
        employeeInitials: "CR",
        type: "Personal",
        startDate: "2025-04-15",
        endDate: "2025-04-16",
        reason: "Personal matter",
        status: "Approved",
        submitDate: "2025-04-03",
      },
      ...Array.from({ length: 99 }, (_, i) => ({
        id: i + 4,
        employeeAvatar: "https://github.com/shadcn.png",
        employeeName: ["Jill Valentine", "Chris Redfield", "Rebecca Chambers"][i % 3],
        employeeInitials: ["JV", "CR", "RC"][i % 3],
        type: ["Sick", "Vacation", "Personal"][Math.floor(Math.random() * 3)],
        startDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        endDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        reason: "Sample reason " + (i + 4),
        status: ["Approved", "Rejected"][Math.floor(Math.random() * 2)],
        submitDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      })),
    ];
  
    // tab filtering state (all, approved, rejected)
    let selectedTab = 'all';
    $: filteredRequests = requests.filter(request => {
      if (selectedTab === 'all') return true;
      return request.status.toLowerCase() === selectedTab;
    });
  
    // sorting state (Filter By)
    let sortByEmployeeNameAsc = false;
    let sortByEmployeeNameDesc = false;
    let sortByTypeAsc = false;
    let sortByTypeDesc = false;
    let sortByStartDateAsc = false;
    let sortByStartDateDesc = false;
  
    // ensure only one sort option is active at a time
    function resetOtherSorts(currentSort) {
      if (currentSort !== 'employeeNameAsc') sortByEmployeeNameAsc = false;
      if (currentSort !== 'employeeNameDesc') sortByEmployeeNameDesc = false;
      if (currentSort !== 'typeAsc') sortByTypeAsc = false;
      if (currentSort !== 'typeDesc') sortByTypeDesc = false;
      if (currentSort !== 'startDateAsc') sortByStartDateAsc = false;
      if (currentSort !== 'startDateDesc') sortByStartDateDesc = false;
    }
  
    // apply sorting to the entire filtered dataset
    $: sortedRequests = [...filteredRequests].sort((a, b) => {
      if (sortByEmployeeNameAsc) {
        return a.employeeName.localeCompare(b.employeeName);
      }
      if (sortByEmployeeNameDesc) {
        return b.employeeName.localeCompare(a.employeeName);
      }
      if (sortByTypeAsc) {
        return a.type.localeCompare(b.type);
      }
      if (sortByTypeDesc) {
        return b.type.localeCompare(a.type);
      }
      if (sortByStartDateAsc) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      }
      if (sortByStartDateDesc) {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }
      // default: sort by submitDate (descending, latest to earliest)
      return new Date(b.submitDate).getTime() - new Date(a.submitDate).getTime();
    });
  
    // pagination state (applied after sorting)
    const itemsPerPage = 6;
    let currentPage = 1;
    $: totalPages = Math.ceil(sortedRequests.length / itemsPerPage);
    $: startIndex = (currentPage - 1) * itemsPerPage;
    $: endIndex = Math.min(startIndex + itemsPerPage, sortedRequests.length);
    $: paginatedRequests = sortedRequests.slice(startIndex, endIndex);
  
    // pagination controls
    function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
      }
    }
  
    // determine which page numbers to display
    $: visiblePages = (() => {
      const maxVisible = 5; // maximum number of page buttons to show
      const pages = [];
  
      if (totalPages <= maxVisible) {
        // if total pages are less than or equal to maxVisible, show all
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // always show the first page
        pages.push(1);
  
        // calculate the range around the current page
        const sideRange = Math.floor((maxVisible - 3) / 2); // pages to show on each side of current (minus first, last, and current)
        let start = Math.max(2, currentPage - sideRange);
        let end = Math.min(totalPages - 1, currentPage + sideRange);
  
        // adjust start and end to ensure we show enough pages
        if (currentPage - sideRange < 2) {
          end = Math.min(totalPages - 1, 2 + (maxVisible - 3));
        }
        if (currentPage + sideRange > totalPages - 1) {
          start = Math.max(2, totalPages - (maxVisible - 2));
        }
  
        // add ellipsis after the first page if needed
        if (start > 2) {
          pages.push('...');
        }
  
        // add the middle pages
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
  
        // add ellipsis before the last page if needed
        if (end < totalPages - 1) {
          pages.push('...');
        }
  
        // always show the last page
        if (totalPages > 1) {
          pages.push(totalPages);
        }
      }
  
      return pages;
    })();
</script>
  
<div class="flex min-h-screen w-full flex-col">
    <HeaderManager/>
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
                    Filter By
                  </span>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Label>Sort by</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByEmployeeNameAsc}
                  onCheckedChange={() => resetOtherSorts('employeeNameAsc')}
                >
                  Name (Asc)
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByEmployeeNameDesc}
                  onCheckedChange={() => resetOtherSorts('employeeNameDesc')}
                >
                  Name (Desc)
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByTypeAsc}
                  onCheckedChange={() => resetOtherSorts('typeAsc')}
                >
                  Type (Asc)
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByTypeDesc}
                  onCheckedChange={() => resetOtherSorts('typeDesc')}
                >
                  Type (Desc)
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByStartDateAsc}
                  onCheckedChange={() => resetOtherSorts('startDateAsc')}
                >
                  Start Date (Asc)
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  bind:checked={sortByStartDateDesc}
                  onCheckedChange={() => resetOtherSorts('startDateDesc')}
                >
                  Start Date (Desc)
                </DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
          <Card.Root>
            <Card.Header>
              <Card.Title>Pending</Card.Title>
              <Card.Description>
                Approve or reject leave requests.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.Head>Employee</Table.Head>
                    <Table.Head>Type</Table.Head>
                    <Table.Head>Start Date</Table.Head>
                    <Table.Head>End Date</Table.Head>
                    <Table.Head class="hidden lg:table-cell">Reason</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#each paginatedRequests as request (request.id)}
                    <PendingRowManager {request} />
                  {/each}
                </Table.Body>
              </Table.Root>
            </Card.Content>
            <Card.Footer class="flex justify-between items-center">
              <div class="text-muted-foreground text-xs">
                Showing <strong>{startIndex + 1}-{endIndex}</strong> of <strong>{sortedRequests.length}</strong> requests
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
                {#each visiblePages as page}
                  {#if page === '...'}
                    <span class="flex items-center px-2">...</span>
                  {:else}
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      on:click={() => goToPage(page)}
                    >
                      {page}
                    </Button>
                  {/if}
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
    </main>
</div>