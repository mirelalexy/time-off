<script>
    import ListFilter from "lucide-svelte/icons/list-filter";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
  import HeaderManager from "../components/HeaderManager.svelte";
  
    // sample data for Birthdays
    let birthdays = [
      { id: 1, date: "2025-01-15", name: "Leon Kennedy", avatar: "https://github.com/shadcn.png", initials: "LK" },
      { id: 2, date: "2025-03-22", name: "Ada Wong", avatar: "https://github.com/shadcn.png", initials: "AW" },
      { id: 3, date: "2025-05-10", name: "Claire Redfield", avatar: "https://github.com/shadcn.png", initials: "CR" },
      ...Array.from({ length: 7 }, (_, i) => ({
        id: i + 4,
        date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        name: ["Jill Valentine", "Chris Redfield", "Rebecca Chambers"][Math.floor(Math.random() * 3)],
        avatar: "https://github.com/shadcn.png",
        initials: ["JV", "CR", "RC"][Math.floor(Math.random() * 3)],
      })),
    ];
  
    // sample data for Holidays
    let holidays = [
      { id: 1, date: "2025-01-01", name: "New Year's Day" },
      { id: 2, date: "2025-07-04", name: "Independence Day" },
      { id: 3, date: "2025-12-25", name: "Christmas Day" },
      ...Array.from({ length: 7 }, (_, i) => ({
        id: i + 4,
        date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        name: ["Labor Day", "Thanksgiving", "Memorial Day"][Math.floor(Math.random() * 3)],
      })),
    ];
  
    // pagination state for Birthdays
    const itemsPerPage = 6;
    let birthdaysPage = 1;
  
    // pagination state for Holidays
    let holidaysPage = 1;
  
    // sorting state for Birthdays
    let birthdaysSortBy = 'date'; // default: sort by date
    let birthdaysSortDirection = 'asc'; // default: ascending
    $: sortedBirthdaysAll = [...birthdays].sort((a, b) => {
      let result = 0;
      if (birthdaysSortBy === 'date') {
        result = new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (birthdaysSortBy === 'name') {
        result = a.name.localeCompare(b.name);
      }
      return birthdaysSortDirection === 'asc' ? result : -result;
    });
  
    // sorting state for Holidays
    let holidaysSortBy = 'date';
    let holidaysSortDirection = 'asc';
    $: sortedHolidaysAll = [...holidays].sort((a, b) => {
      let result = 0;
      if (holidaysSortBy === 'date') {
        result = new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (holidaysSortBy === 'name') {
        result = a.name.localeCompare(b.name);
      }
      return holidaysSortDirection === 'asc' ? result : -result;
    });
  
    // pagination for Birthdays (applied after sorting)
    $: birthdaysTotalPages = Math.ceil(sortedBirthdaysAll.length / itemsPerPage);
    $: birthdaysStartIndex = (birthdaysPage - 1) * itemsPerPage;
    $: birthdaysEndIndex = Math.min(birthdaysStartIndex + itemsPerPage, sortedBirthdaysAll.length);
    $: paginatedBirthdays = sortedBirthdaysAll.slice(birthdaysStartIndex, birthdaysEndIndex);
  
    // pagination for Holidays (applied after sorting)
    $: holidaysTotalPages = Math.ceil(sortedHolidaysAll.length / itemsPerPage);
    $: holidaysStartIndex = (holidaysPage - 1) * itemsPerPage;
    $: holidaysEndIndex = Math.min(holidaysStartIndex + itemsPerPage, sortedHolidaysAll.length);
    $: paginatedHolidays = sortedHolidaysAll.slice(holidaysStartIndex, holidaysEndIndex);
  
    // pagination controls
    function goToBirthdaysPage(page) {
      if (page >= 1 && page <= birthdaysTotalPages) {
        birthdaysPage = page;
      }
    }
  
    function goToHolidaysPage(page) {
      if (page >= 1 && page <= holidaysTotalPages) {
        holidaysPage = page;
      }
    }
</script>
  
<div class="flex min-h-screen w-full flex-col">
    <HeaderManager/>
    <main class="bg-muted/40 flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="flex flex-row gap-4">
        <!-- Birthdays Section -->
        <div class="flex-1 space-y-4">
          <div class="flex items-center">
            <h2 class="text-xl font-semibold">Birthdays</h2>
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
                    checked={birthdaysSortBy === 'date'}
                    onCheckedChange={(checked) => { birthdaysSortBy = checked ? 'date' : ''; }}
                  >
                    Date
                  </DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem
                    checked={birthdaysSortBy === 'name'}
                    onCheckedChange={(checked) => { birthdaysSortBy = checked ? 'name' : ''; }}
                  >
                    Celebrating
                  </DropdownMenu.CheckboxItem>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem
                    checked={birthdaysSortDirection === 'asc'}
                    onCheckedChange={(checked) => { birthdaysSortDirection = checked ? 'asc' : 'desc'; }}
                  >
                    Ascending
                  </DropdownMenu.CheckboxItem>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
          <Card.Root>
            <Card.Header>
              <Card.Title>Birthdays</Card.Title>
              <Card.Description>
                Upcoming birthdays for your team.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.Head>Date</Table.Head>
                    <Table.Head>Celebrating</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#each paginatedBirthdays as birthday (birthday.id)}
                    <Table.Row>
                      <Table.Cell>{birthday.date}</Table.Cell>
                      <Table.Cell>
                        <div class="flex flex-row items-center gap-4">
                          <Avatar.Root class="w-8 h-8">
                            <Avatar.Image src={birthday.avatar} alt={birthday.name} class="w-8 h-8"/>
                            <Avatar.Fallback class="w-8 h-8">{birthday.initials}</Avatar.Fallback>
                          </Avatar.Root>
                          <p>{birthday.name}</p>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  {/each}
                </Table.Body>
              </Table.Root>
            </Card.Content>
            <Card.Footer class="flex justify-between items-center">
              <div class="text-muted-foreground text-xs">
                Showing <strong>{birthdaysStartIndex + 1}-{birthdaysEndIndex}</strong> of <strong>{birthdays.length}</strong> birthdays
              </div>
              <div class="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToBirthdaysPage(birthdaysPage - 1)}
                  disabled={birthdaysPage === 1}
                >
                  Previous
                </Button>
                {#each Array(birthdaysTotalPages) as _, i}
                  <Button
                    variant={birthdaysPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    on:click={() => goToBirthdaysPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                {/each}
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToBirthdaysPage(birthdaysPage + 1)}
                  disabled={birthdaysPage === birthdaysTotalPages}
                >
                  Next
                </Button>
              </div>
            </Card.Footer>
          </Card.Root>
        </div>
  
        <!-- Holidays Section -->
        <div class="flex-1 space-y-4">
          <div class="flex items-center">
            <h2 class="text-xl font-semibold">Holidays</h2>
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
                    checked={holidaysSortBy === 'date'}
                    onCheckedChange={(checked) => { holidaysSortBy = checked ? 'date' : ''; }}
                  >
                    Date
                  </DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem
                    checked={holidaysSortBy === 'name'}
                    onCheckedChange={(checked) => { holidaysSortBy = checked ? 'name' : ''; }}
                  >
                    Name
                  </DropdownMenu.CheckboxItem>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem
                    checked={holidaysSortDirection === 'asc'}
                    onCheckedChange={(checked) => { holidaysSortDirection = checked ? 'asc' : 'desc'; }}
                  >
                    Ascending
                  </DropdownMenu.CheckboxItem>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
          <Card.Root>
            <Card.Header>
              <Card.Title>Holidays</Card.Title>
              <Card.Description>
                Company holidays for the year.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.Head>Date</Table.Head>
                    <Table.Head>Name</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#each paginatedHolidays as holiday (holiday.id)}
                    <Table.Row>
                      <Table.Cell>{holiday.date}</Table.Cell>
                      <Table.Cell>{holiday.name}</Table.Cell>
                    </Table.Row>
                  {/each}
                </Table.Body>
              </Table.Root>
            </Card.Content>
            <Card.Footer class="flex justify-between items-center">
              <div class="text-muted-foreground text-xs">
                Showing <strong>{holidaysStartIndex + 1}-{holidaysEndIndex}</strong> of <strong>{holidays.length}</strong> holidays
              </div>
              <div class="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToHolidaysPage(holidaysPage - 1)}
                  disabled={holidaysPage === 1}
                >
                  Previous
                </Button>
                {#each Array(holidaysTotalPages) as _, i}
                  <Button
                    variant={holidaysPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    on:click={() => goToHolidaysPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                {/each}
                <Button
                  variant="outline"
                  size="sm"
                  on:click={() => goToHolidaysPage(holidaysPage + 1)}
                  disabled={holidaysPage === holidaysTotalPages}
                >
                  Next
                </Button>
              </div>
            </Card.Footer>
          </Card.Root>
        </div>
      </div>
    </main>
</div>