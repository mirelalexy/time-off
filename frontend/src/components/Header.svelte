<script>
  import { link, push, location } from "svelte-spa-router";
  import CircleUser from "lucide-svelte/icons/circle-user";
  import Menu from "lucide-svelte/icons/menu";
  import Search from "lucide-svelte/icons/search";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import LogoSmall from "./LogoSmall.svelte";

  // normalize the href to match $location
  function normalizePath(path) {
    return path.replace(/^#/, '');
  }
</script>
  
<header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <LogoSmall/>
        <a use:link href="#/employeeportal/dashboard" 
        class={$location === normalizePath('#/employeeportal/dashboard')
        ? 'text-foreground whitespace-nowrap'
        : 'text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap'}
        >
          Dashboard
        </a>
        <a use:link href="#/employeeportal/new" 
        class={$location === normalizePath('#/employeeportal/new')
        ? 'text-foreground whitespace-nowrap'
        : 'text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap'}
        >
          New Request
        </a>
        <a use:link href="/employeeportal/special" 
        class={$location === normalizePath('#/employeeportal/special')
        ? 'text-foreground whitespace-nowrap'
        : 'text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap'}
        >
          Special Days
        </a>
      </nav>
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
            builders={[builder]}
          >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <LogoSmall/>
            <a use:link href="#/employeeportal/dashboard"
            class={$location === normalizePath('#/employeeportal/dashboard')
            ? 'text-foreground whitespace-nowrap'
            : 'text-muted-foreground hover:text-foreground'}
            >
              Dashboard
            </a>
            <a use:link href="#/employeeportal/new" 
            class={$location === normalizePath('#/employeeportal/new')
            ? 'text-foreground whitespace-nowrap'
            : 'text-muted-foreground hover:text-foreground'}
            > 
              New Request 
            </a>
            <a use:link href="/employeeportal/special"
            class={$location === normalizePath('#/employeeportal/special')
            ? 'text-foreground whitespace-nowrap'
            : 'text-muted-foreground hover:text-foreground'}
            > 
              Special Days 
            </a>
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              builders={[builder]}
              variant="secondary"
              size="icon"
              class="rounded-full"
            >
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item on:click={() => push('/employeeportal/settings')}>Settings</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item on:click={() => push('/')}>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
</header>