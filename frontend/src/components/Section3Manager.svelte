<script >
    import PendingTableManager from "./PendingTableManager.svelte";
    import HistoryTableManager from "./HistoryTableManager.svelte";
</script>

<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <PendingTableManager/>      
    <HistoryTableManager/>
  </div>