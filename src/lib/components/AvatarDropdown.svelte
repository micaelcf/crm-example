<script lang="ts">
	import {
		Avatar,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		Indicator
	} from 'flowbite-svelte';
	import { scale } from 'svelte/transition';
	let open = false;
</script>

<Avatar
	id="user-drop"
	class="cursor-pointer"
	dot={{ color: 'green' }}
	on:click={() => (open = !open)}
/>
<!-- {#if opened} -->
<!-- <div transition:scale> -->
<!-- <div class=""> -->
<Dropdown {open} class="z-50 px-2 shadow-xl">
	<DropdownHeader>
		<div class="flex items-center space-x-3">
			<Avatar />
			<div>
				<span class="block text-sm"> Bonnie Green </span>
				<span class="block truncate text-sm font-medium"> name@email.com </span>

				<div class="flex items-center space-x-2 text-sm font-medium">
					<Indicator color="green" />
					<span>Online</span>
				</div>
			</div>
		</div>
	</DropdownHeader>
	<DropdownDivider />
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--user] h-5 w-5" />
			<span>Profile</span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--home] h-5 w-5" />
			<span>Dashboard</span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-3">
				<i class="icon-[lucide--credit-card] h-5 w-5" />
				<span> Billing </span>
			</div>
			<span
				class="inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-600 p-3 text-sm font-medium text-white"
			>
				3
			</span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--settings] h-5 w-5" />
			<span>Settings</span>
		</div>
	</DropdownItem>
	<DropdownDivider />
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--dollar-sign] h-5 w-5" />
			<span> Pricing </span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--life-buoy] h-5 w-5" />
			<span> Help </span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--help-circle] h-5 w-5" />
			<span> FAQ </span>
		</div>
	</DropdownItem>
	<DropdownDivider />
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<i class="icon-[lucide--log-out] h-5 w-5" />
			<span> Logout </span>
		</div>
	</DropdownItem>
</Dropdown>
<!-- </div> -->
<!-- </div> -->
<!-- {/if} -->
