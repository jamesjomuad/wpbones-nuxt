<template>
  <div class="p-6 space-y-8">
    <UAlert
      icon="heroicons:information-circle"
      title="Nuxt UI Components"
      description="All components below are from @nuxt/ui v2, auto-imported and rendered inside a Shadow DOM for full style isolation from the WordPress admin."
    />

    <div>
      <h2 class="text-2xl font-bold mb-1">Component Showcase</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400">Every basic Nuxt UI component demonstrated with working controls.</p>
    </div>

    <UDivider />

    <div class="flex items-center gap-2 flex-wrap">
      <UBadge variant="solid" color="primary">solid</UBadge>
      <UBadge variant="outline" color="primary">outline</UBadge>
      <UBadge variant="soft" color="primary">soft</UBadge>
      <UBadge variant="subtle" color="primary">subtle</UBadge>
      <UBadge variant="solid" color="red">error</UBadge>
      <UBadge variant="solid" color="amber">warning</UBadge>
      <UBadge variant="solid" color="green">success</UBadge>
    </div>

    <div class="flex items-center gap-2 flex-wrap">
      <UButton label="Primary" color="primary" />
      <UButton label="Secondary" color="secondary" />
      <UButton label="Gray" color="gray" />
      <UButton label="Red" color="red" />
      <UButton label="Amber" color="amber" />
      <UButton label="Green" color="green" />
    </div>

    <div class="flex items-center gap-2 flex-wrap">
      <UButton label="xs" size="xs" color="primary" />
      <UButton label="sm" size="sm" color="primary" />
      <UButton label="md" size="md" color="primary" />
      <UButton label="lg" size="lg" color="primary" />
      <UButton label="xl" size="xl" color="primary" />
    </div>

    <div class="flex items-center gap-2 flex-wrap">
      <UButton label="solid" variant="solid" color="primary" />
      <UButton label="outline" variant="outline" color="primary" />
      <UButton label="soft" variant="soft" color="primary" />
      <UButton label="subtle" variant="subtle" color="primary" />
      <UButton label="ghost" variant="ghost" color="primary" />
      <UButton label="link" variant="link" color="primary" />
    </div>

    <div class="flex items-center gap-2 flex-wrap">
      <UButton icon="heroicons:cog-6-tooth" label="With Icon" color="primary" />
      <UButton icon="heroicons:arrow-down-tray" label="Loading" loading color="primary" />
      <UButton icon="heroicons:trash" label="Danger" color="red" />
      <UButton icon="heroicons:check" label="Disabled" disabled color="primary" />
      <UButton icon="heroicons:plus" square color="primary" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="heroicons:credit-card" class="text-primary" />
            <span class="font-semibold">Default Card</span>
          </div>
        </template>
        <p class="text-sm text-gray-500 dark:text-gray-400">This is a default UCard with header, body, and footer sections.</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton label="Cancel" color="gray" variant="ghost" size="sm" />
            <UButton label="Save" color="primary" size="sm" />
          </div>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="heroicons:view-columns" class="text-primary" />
            <span class="font-semibold">Avatar Card</span>
          </div>
        </template>
        <div class="flex flex-col items-center text-center gap-2 py-4">
          <UAvatar src="https://github.com/nuxt.png" size="xl" alt="Nuxt" />
          <div>
            <p class="font-medium">UAvatar</p>
            <p class="text-xs text-gray-400">With image, size="xl"</p>
          </div>
          <div class="flex gap-2 mt-2">
            <UAvatar icon="heroicons:user" size="sm" />
            <UAvatar text="AB" size="sm" color="primary" />
            <UAvatar text="CD" size="sm" color="red" />
            <UAvatar text="EF" size="sm" color="green" />
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="heroicons:chat-bubble-left-right" class="text-primary" />
            <span class="font-semibold">Chip &amp; Meter</span>
          </div>
        </template>
        <div class="space-y-4 py-2">
          <div class="flex gap-4">
            <UChip size="xl">
              <UAvatar src="https://github.com/nuxt.png" size="lg" />
            </UChip>
            <UChip color="red" size="xl">
              <UAvatar icon="heroicons:user" size="lg" />
            </UChip>
          </div>
          <UMeter :value="75" :max="100" />
          <UMeter :value="45" :max="100" color="amber" />
          <UMeter :value="20" :max="100" color="red" />
        </div>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:command-line" class="text-primary" />
          <span class="font-semibold">Form Controls</span>
        </div>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <UInput label="Text Input" placeholder="UInput with label" />
          <UTextarea label="Textarea" placeholder="Multi-line text input" />
          <USelect
            label="Select"
            :options="['Option A', 'Option B', 'Option C']"
            placeholder="Pick one..."
          />
          <UInputMenu
            label="Input Menu"
            :options="['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']"
            placeholder="Search and select..."
          />
          <USelectMenu
            label="Select Menu"
            :options="['Item 1', 'Item 2', 'Item 3']"
            placeholder="Choose..."
          />
        </div>

        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium mb-2">Checkbox</p>
            <UCheckbox label="Accept terms and conditions" />
            <UCheckbox label="Subscribe to newsletter" />
            <UCheckbox label="Enable dark mode" disabled />
          </div>

          <div>
            <p class="text-sm font-medium mb-2">Radio Group</p>
            <URadioGroup
              :options="[
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
              ]"
            />
          </div>

          <div>
            <p class="text-sm font-medium mb-2">Toggle</p>
            <UToggle label="Enable notifications" />
            <UToggle label="Disabled toggle" disabled class="mt-2" />
          </div>

          <div>
            <p class="text-sm font-medium mb-2">Range</p>
            <URange :min="0" :max="100" :step="1" />
          </div>
        </div>
      </div>
    </UCard>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="heroicons:chat-bubble-left-right" class="text-primary" />
            <span class="font-semibold">Alerts &amp; Notifications</span>
          </div>
        </template>
        <div class="space-y-2">
          <UAlert icon="heroicons:information-circle" title="Info" description="Informational alert." color="info" />
          <UAlert icon="heroicons:check-circle" title="Success" description="Operation completed." color="green" />
          <UAlert icon="heroicons:exclamation-triangle" title="Warning" description="Check your input." color="amber" />
          <UAlert icon="heroicons:x-circle" title="Error" description="Something went wrong." color="red" />
          <UAlert icon="heroicons:chat-bubble-left-right" title="Neutral" description="Alert without semantic color." color="gray" />
        </div>
        <template #footer>
          <UButton label="Show Notification" color="primary" size="sm" @click="showNotification" />
        </template>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="heroicons:command-line" class="text-primary" />
            <span class="font-semibold">Keyboard &amp; Misc</span>
          </div>
        </template>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium mb-2">UKbd</p>
            <div class="flex gap-1 flex-wrap items-center">
              <UKbd>Ctrl</UKbd> <span class="text-gray-400">+</span>
              <UKbd>C</UKbd>
              <span class="mx-2 text-gray-400">|</span>
              <UKbd>⌘</UKbd> <span class="text-gray-400">+</span>
              <UKbd>Shift</UKbd> <span class="text-gray-400">+</span>
              <UKbd>P</UKbd>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium mb-2">Tooltip</p>
            <UTooltip text="This is a tooltip">
              <UButton label="Hover me" color="gray" variant="outline" />
            </UTooltip>
          </div>
          <div>
            <p class="text-sm font-medium mb-2">Popover</p>
            <UPopover>
              <UButton label="Open popover" color="gray" variant="outline" />
              <template #content>
                <div class="p-4 space-y-2 min-w-48">
                  <p class="text-sm font-medium">Popover Title</p>
                  <p class="text-xs text-gray-400">This content renders inside a popover overlay.</p>
                </div>
              </template>
            </UPopover>
          </div>
          <div>
            <p class="text-sm font-medium mb-2">Progress</p>
            <UProgress :value="65" />
            <p class="text-xs text-gray-400 mt-1">65% complete</p>
          </div>
          <div>
            <p class="text-sm font-medium mb-2">Skeleton</p>
            <div class="space-y-2">
              <USkeleton class="h-4 w-48" />
              <USkeleton class="h-4 w-36" />
              <USkeleton class="h-4 w-56" />
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:list-bullet" class="text-primary" />
          <span class="font-semibold">Tabs</span>
        </div>
      </template>
      <UTabs
        :items="['Tab One', 'Tab Two', 'Tab Three']"
        @change="tabChanged = $event"
      >
        <template #item="{ item }">
          <p class="py-4 text-sm text-gray-500 dark:text-gray-400">
            Content of "{{ item }}" tab.
          </p>
        </template>
      </UTabs>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:chevron-up-down" class="text-primary" />
          <span class="font-semibold">Accordion</span>
        </div>
      </template>
      <UAccordion
        :items="[
          { label: 'Section 1', slot: 'section1' },
          { label: 'Section 2', slot: 'section2' },
          { label: 'Section 3', slot: 'section3' },
        ]"
      >
        <template #section1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Details about section one.</p>
        </template>
        <template #section2>
          <p class="text-sm text-gray-500 dark:text-gray-400">Details about section two.</p>
        </template>
        <template #section3>
          <p class="text-sm text-gray-500 dark:text-gray-400">Details about section three.</p>
        </template>
      </UAccordion>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:chevron-right" class="text-primary" />
          <span class="font-semibold">Breadcrumb</span>
        </div>
      </template>
      <UBreadcrumb
        :items="[
          { label: 'Home', to: '#/' },
          { label: 'Components', to: '#/components' },
          { label: 'Nuxt UI' },
        ]"
      />
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:table-cells" class="text-primary" />
          <span class="font-semibold">Table</span>
        </div>
      </template>
      <UTable
        :columns="[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
        ]"
        :rows="[
          { name: 'John Doe', role: 'Developer', status: 'Active' },
          { name: 'Jane Smith', role: 'Designer', status: 'Active' },
          { name: 'Bob Johnson', role: 'Manager', status: 'Inactive' },
        ]"
      />
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:rectangle-stack" class="text-primary" />
          <span class="font-semibold">Modal, Slideover &amp; Dropdown</span>
        </div>
      </template>
      <div class="flex gap-2 flex-wrap">
        <UButton label="Open Modal" color="primary" @click="modalOpen = true" />
        <UButton label="Open Slideover" color="gray" variant="outline" @click="slideoverOpen = true" />
        <UDropdown :items="dropdownItems">
          <UButton label="Dropdown" color="gray" variant="outline" />
        </UDropdown>
      </div>

      <UModal v-model="modalOpen">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <span class="font-semibold">Modal Dialog</span>
              <UButton icon="heroicons:x-mark" square color="gray" variant="ghost" @click="modalOpen = false" />
            </div>
          </template>
          <p class="text-sm text-gray-500 dark:text-gray-400">This modal uses UModal with an inner UCard. Press Escape or click X to dismiss.</p>
        </UCard>
      </UModal>

      <USlideover v-model="slideoverOpen">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <span class="font-semibold">Slideover Panel</span>
              <UButton icon="heroicons:x-mark" square color="gray" variant="ghost" @click="slideoverOpen = false" />
            </div>
          </template>
          <p class="text-sm text-gray-500 dark:text-gray-400">Slideover slides in from the right side of the screen.</p>
        </UCard>
      </USlideover>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="heroicons:numbered-list" class="text-primary" />
          <span class="font-semibold">Pagination</span>
        </div>
      </template>
      <UPagination
        v-model="currentPage"
        :page-count="10"
        :total="50"
      />
    </UCard>
  </div>

  <UNotifications />
</template>

<script setup lang="ts">
const modalOpen = ref(false)
const slideoverOpen = ref(false)
const currentPage = ref(1)
const tabChanged = ref(0)

const dropdownItems = [
  [
    { label: 'Profile', icon: 'heroicons:user' },
    { label: 'Settings', icon: 'heroicons:cog-6-tooth' },
  ],
  [
    { label: 'Logout', icon: 'heroicons:arrow-left-on-rectangle' },
  ],
]

function showNotification() {
  useNotification().add({
    title: 'Notification',
    description: 'This is a sample notification from Nuxt UI.',
    icon: 'heroicons:check-circle',
    color: 'green',
  })
}
</script>
