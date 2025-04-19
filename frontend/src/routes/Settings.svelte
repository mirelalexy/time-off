<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import Header from "../components/Header.svelte";
    import { Label } from "$lib/components/ui/label/index.js";
    import FileUpload from "../components/FileUpload.svelte";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="bg-muted/40 flex flex-1 items-center justify-center p-4 md:p-8">
      <div class="max-w-lg w-full space-y-6">
        <Card.Root>
          <Card.Header>
            <Card.Title>Personal Information</Card.Title>
            <Card.Description>
              Update your name to ensure your profile reflects accurate personal details. Changes may require HR approval.
            </Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-4">
              <div class="grid gap-3">
                  <Label for="status">First Name</Label>
                  <form>
                      <Input placeholder="Alexandra" />
                  </form>
                  <p class="text-muted-foreground text-sm">You can update your first name once per month. <span class="font-semibold">Last updated: [MM-DD-YYYY]</span></p>
              </div>
              <div class="grid gap-3">
                  <Label for="status">Last Name</Label>
                  <form>
                      <Input placeholder="Tomescu" />
                  </form>
                  <p class="text-muted-foreground text-sm">You can update your last name once per month. <span class="font-semibold">Last updated: [MM-DD-YYYY]</span></p>
              </div>
          </Card.Content>
          <Card.Footer class="border-t px-6 py-4">
            <Button>Save</Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Email Address</Card.Title>
            <Card.Description>
              Your email address is linked to your account and cannot be modified directly.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <form class="flex flex-col gap-4">
              <Input disabled type="email" placeholder="email" value="email@example.com" />
            </form>
          </Card.Content>
        </Card.Root>
        <FileUpload/>

        <Card.Root>
          <Card.Header>
            <Card.Title>Function</Card.Title>
            <Card.Description>
              Your position is assigned by HR and cannot be modified here.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <form class="flex flex-col gap-4">
              <Input disabled placeholder="Software Engineer" value="Software Engineer"/>
            </form>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Change Password</Card.Title>
            <Card.Description>
              Update your password.
            </Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-4">
              <div class="grid gap-3">
                  <Label for="status">Current Password</Label>
                  <form>
                      <Input type="password"/>
                  </form>
              </div>
              <div class="grid gap-3">
                  <Label for="status">New Password</Label>
                  <form>
                      <Input type="password"/>
                  </form>
              </div>
          </Card.Content>
          <Card.Footer class="border-t px-6 py-4">
            <Button>Save</Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>FAQ</Card.Title>
            <Card.Description>
              Get answers to common questions about your account and notifications. For further assistance, contact HR and IT support.
            </Card.Description>
          </Card.Header>
          <Card.Content>
              <Accordion.Root>
                  <Accordion.Item value="item-1">
                    <Accordion.Trigger>Why can't I disable email notifications?</Accordion.Trigger>
                    <Accordion.Content>
                      Email notifications are required to keep you updated on leave requests, approvals, and account changes. Ensure your email address is correct and check your spam folder if you don't see emails.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item value="item-2">
                      <Accordion.Trigger>What should I do if my email address is incorrect?</Accordion.Trigger>
                      <Accordion.Content>
                        Contact IT support to update your email to ensure you receive notifications.
                      </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3">
                      <Accordion.Trigger>Can I change how often I receive notifications?</Accordion.Trigger>
                      <Accordion.Content>
                        Email notifications for critical actions like leave approvals are mandatory and cannot be adjusted. Contact HR if you have concerns about notification frequency.
                      </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
          </Card.Content>
        </Card.Root>
      </div>
  </main>
</div>