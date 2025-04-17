<script>
    import InformationCard from './InformationCard.svelte';
    import FileClock from "lucide-svelte/icons/file-clock";
    import File from "lucide-svelte/icons/file";
    import Sun from "lucide-svelte/icons/sun";
    import CloudRain from "lucide-svelte/icons/cloud-rain";
</script>

<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    <InformationCard title="Pending Requests" number="0" icon={FileClock}/>
    <InformationCard title="Past Requests" number="0" icon={File}/>
    <InformationCard title="Vacation Days Left" number="0" icon={Sun}/>
    <InformationCard title="Past Vacation Days" number="0" icon={CloudRain}/>
</div>