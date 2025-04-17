<script >
    import Header from "./Header.svelte";
    import Section1 from "./Section1.svelte";
    import Section2 from "./Section2.svelte";
    import Section3 from "./Section3.svelte";
</script>
  
<div class="flex min-h-screen w-full flex-col">
    <Header/>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Section1/>
        <Section2/>
        <Section3/>
    </main>
</div>
  