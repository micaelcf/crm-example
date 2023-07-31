<script lang="ts">
	import {
		Avatar,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';

	// const defaultClass = 'flex item-center font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
</script>

<Navbar fluid>
	<NavBrand href="/">
		<img src="http://placebeard.it/640x640" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Awesome Company
		</span>
	</NavBrand>
	<div>
		<Avatar id="user-drop" class="cursor-pointer" dot={{ color: 'green' }} />
		<Dropdown class="z-50 shadow-xl" triggeredBy="#user-drop">
			<DropdownHeader>
				<span class="block text-sm"> Bonnie Green </span>
				<span class="block truncate text-sm font-medium"> name@email.com </span>
			</DropdownHeader>
			<DropdownItem>
				<div class="flex items-center space-x-3">
					<i class="icon-[lucide--home] h-5 w-5" />
					<span>Dashboard</span>
				</div>
			</DropdownItem>
			<DropdownItem>
				<div class="flex items-center space-x-3">
					<i class="icon-[lucide--settings] h-5 w-5" />
					<span>Settings</span>
				</div>
			</DropdownItem>
			<DropdownItem>
				<div class="flex items-center space-x-3">
					<i class="icon-[lucide--circle-dollar-sign] h-5 w-5" />
					<span> Earnings </span>
				</div>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
	</div>
</Navbar>
