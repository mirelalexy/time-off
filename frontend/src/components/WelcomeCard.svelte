<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import MoveRight from "lucide-svelte/icons/move-right";

    export let fullname;
</script>
  
<Card.Root>
    <Card.Content class="p-6 flex flex-row">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-2">
            <p>Welcome back,</p>
            <p class="font-bold text-3xl">{fullname}</p>
            <p>Need some time off?</p>
        </div>
        <div class="flex flex-row">
            <a href=/## class="flex flex-row gap-2 items-center">
                <span class="text-sm">Submit new request</span>
                <MoveRight class="h-4 w-4"/>
            </a>
        </div>
      </div>
    </Card.Content>
</Card.Root>