<script lang="ts">
	import { sineOut } from 'svelte/easing';
	import type { EasingFunction, TransitionConfig } from 'svelte/transition';
	import {
		Avatar,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		Indicator
	} from 'flowbite-svelte';
	import {
		CreditCard,
		DollarSign,
		HelpCircle,
		LifeBuoy,
		LogOut,
		Settings,
		User
	} from 'lucide-svelte';
	import Icon from '../Icon.svelte';
	import { scale } from 'svelte/transition';
	let open = false;

	const scale_down: (node: HTMLElement, params: {}) => TransitionConfig = (node, params) => {
		return {
			delay: 0,
			duration: 200,
			easing: sineOut,
			css: (t, u) => `transform-origin: top right; transform: scale(${t});`
		};
	};
</script>

<Avatar
	id="user-drop"
	class="cursor-pointer"
	dot={{ color: 'green' }}
	on:click={() => (open = !open)}
/>
<Dropdown transition={scale_down} {open} class="z-50 origin-top-right px-2 shadow-xl">
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
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<Icon icon={User} width="w-5" height="h-5" />
			<span>Profile</span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-3">
				<Icon icon={CreditCard} width="w-5" height="h-5" />
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
			<Icon icon={Settings} width="w-5" height="h-5" />
			<span>Settings</span>
		</div>
	</DropdownItem>
	<DropdownDivider />
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<Icon icon={DollarSign} width="w-5" height="h-5" />
			<span> Pricing </span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<Icon icon={LifeBuoy} width="w-5" height="h-5" />
			<span> Help </span>
		</div>
	</DropdownItem>
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<Icon icon={HelpCircle} width="w-5" height="h-5" />
			<span> FAQ </span>
		</div>
	</DropdownItem>
	<DropdownDivider />
	<DropdownItem>
		<div class="flex items-center space-x-3">
			<Icon icon={LogOut} width="w-5" height="h-5" />
			<span> Logout </span>
		</div>
	</DropdownItem>
</Dropdown>
