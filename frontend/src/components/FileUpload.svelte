<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Upload } from "lucide-svelte";
  
    // store the uploaded file (only one file is allowed)
    let file = null;
  
    // handle file selection
    function handleFileChange(event) {
      const uploadedFile = event.target.files[0]; // only take the first file
      if (uploadedFile) {
        // validate file type (PNG or JPG)
        const validTypes = ["image/png", "image/jpeg"];
        if (!validTypes.includes(uploadedFile.type)) {
          alert("Please upload a PNG or JPG file.");
          return;
        }
        // replace the existing file
        file = uploadedFile;
      }
    }
  
    // create a hidden file input reference
    let fileInput;
  
    // trigger file input click when the button is clicked
    function triggerFileInput() {
      fileInput.click();
    }
  
    // remove the file
    function removeFile() {
      file = null;
      fileInput.value = null; // reset the input
    }
</script>
  
<Card.Root>
    <Card.Header>
        <Card.Title>Profile Picture</Card.Title>
        <Card.Description>Upload a PNG or JPG image to personalize your account.</Card.Description>
    </Card.Header>
    <Card.Content>
        <!-- hidden file input -->
        <input
            type="file"
            bind:this={fileInput}
            on:change={handleFileChange}
            accept="image/png,image/jpeg"
            class="hidden"
        />
  
      <!-- click to upload area -->
        <div
            class="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors"
            on:click={triggerFileInput}
            role="button"
            tabindex="0"
            on:keydown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                triggerFileInput();
                }
            }}
        >
        <Upload class="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <p class="text-sm text-gray-400">Click to upload or press Enter</p>
      </div>
  
      <!-- display uploaded file -->
      {#if file}
        <div class="mt-4 space-y-2">
            <h3 class="text-lg font-medium">Uploaded File:</h3>
            <div class="flex items-center justify-between bg-gray-700 p-2 rounded-md">
                <span class="text-sm">{file.name} ({(file.size / 1024).toFixed(2)} KB)</span>
                <Button
                variant="destructive"
                size="sm"
                class="bg-red-500 hover:bg-red-600"
                on:click={removeFile}
                >
                Remove
                </Button>
            </div>
        </div>
      {/if}
    </Card.Content>
    <Card.Footer class="border-t px-6 py-4">
        <Button>Save</Button>
    </Card.Footer>
</Card.Root>