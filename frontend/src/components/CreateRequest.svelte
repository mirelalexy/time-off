<script>
    import Header from "./Header.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import DataRangePicker from "./DataRangePicker.svelte";
  
    // form data
    let manager = "First Last";
    let reason = "Who knows";
    let leaveType = "";

    // handle select change
    function handleSelectChange(event) {
        leaveType = event.detail.value;
    }
</script>
  
<div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex flex-1 items-center justify-center p-4 md:p-8">
        <div class="max-w-lg w-full space-y-6">
        <Card.Root>
          <Card.Header>
            <Card.Title>New Request</Card.Title>
            <Card.Description>Want some time off? Let your manager know.</Card.Description>
          </Card.Header>
          <Card.Content>
            <div class="grid gap-6">
              <div class="grid gap-3">
                <Label for="name">Manager*</Label>
                <Input
                  id="name"
                  type="text"
                  class="w-full"
                  bind:value={manager}
                />
              </div>
              <div class="grid gap-3">
                <Label for="reason">Reason</Label>
                <Textarea
                  id="reason"
                  bind:value={reason}
                  class="min-h-32"
                />
              </div>
              <div class="grid gap-3">
                <Label for="status">Status*</Label>
                <Select.Root on:change={handleSelectChange}>
                  <Select.Trigger id="type" aria-label="Select type">
                    <Select.Value placeholder="Select type" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="sick" label="Sick">Sick</Select.Item>
                    <Select.Item value="vacation" label="Vacation">Vacation</Select.Item>
                    <Select.Item value="unpaid" label="Unpaid">Unpaid</Select.Item>
                    <Select.Item value="parental" label="Parental">Parental</Select.Item>
                    <Select.Item value="bereavement" label="Bereavement">Bereavement</Select.Item>
                    <Select.Item value="personal" label="Personal">Personal</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <div class="grid gap-3">
                <Label for="category">Period*</Label>
                <DataRangePicker />
              </div>
              <div class="flex justify-center">
                <Button variant="default">
                  Submit
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card.Root>
        </div>
    </main>
</div>