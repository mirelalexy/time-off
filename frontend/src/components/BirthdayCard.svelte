<script >
    import * as Card from "$lib/components/ui/card/index.js";

    export let employee;
    export let birthday;
</script>
  
<Card.Root>
    <Card.Header>
        <p class="text-2xl font-semibold">It's {employee} birthday soon!</p>
        <p>Planning something?</p>
    </Card.Header>
    <Card.Content class="p-6 flex flex-row justify-center">
        <div class="flex justify-center items-center w-24 h-24 bg-orange-500 rounded-lg">
            <span class="text-[60px] font-bold text-white">{birthday}</span> <!-- fix span not in the middle of div because of line height -->
        </div>
    </Card.Content>
</Card.Root>