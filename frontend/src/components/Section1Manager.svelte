<script>
    import InformationCard from './InformationCard.svelte';
    import FileClock from "lucide-svelte/icons/file-clock";
    import FileCheck from "lucide-svelte/icons/file-check";
    import FileX from "lucide-svelte/icons/file-x";
    import User from "lucide-svelte/icons/user";
</script>

<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    <InformationCard title="Pending Requests" number="0" icon={FileClock}/>
    <InformationCard title="Approved Requests" number="0" icon={FileCheck}/>
    <InformationCard title="Rejected Requests" number="0" icon={FileX}/>
    <InformationCard title="Assigned Employees" number="0" icon={User}/>
</div>