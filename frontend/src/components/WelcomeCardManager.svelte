<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import MoveRight from "lucide-svelte/icons/move-right";
    import { link } from "svelte-spa-router";

    export let fullname;
</script>
  
<Card.Root>
    <Card.Content class="p-6 flex flex-row">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-2">
            <p>Welcome back,</p>
            <p class="font-bold text-3xl">{fullname}</p>
            <p>Ready to help?</p>
        </div>
        <div class="flex flex-row">
            <a use:link href="/managerportal/pending" class="flex flex-row gap-2 items-center">
                <span class="text-sm">See pending requests</span>
                <MoveRight class="h-4 w-4"/>
            </a>
        </div>
      </div>
    </Card.Content>
</Card.Root>