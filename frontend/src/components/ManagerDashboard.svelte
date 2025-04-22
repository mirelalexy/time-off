<script>
    import HeaderManager from "./HeaderManager.svelte";
    import Section1Manager from "./Section1Manager.svelte";
    import Section2Manager from "./Section2Manager.svelte";
    import Section3Manager from "./Section3Manager.svelte";
</script>
  
<div class="flex min-h-screen w-full flex-col">
    <HeaderManager/>
    <main class="bg-muted/40 flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Section1Manager/>
        <Section2Manager/>
        <Section3Manager/>
    </main>
</div>