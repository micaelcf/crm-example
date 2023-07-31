<script lang="ts">
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';

	type SidebarMenu = {
		label: string;
		icon?: string;
		href?: string;
		subMenu?: {
			label: string;
			href: string;
		}[];
	}[];

	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	let aClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 [&>i]:hover:text-primary-600 transition-all duration-500';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 shadow-lg';

	const sidebarMenu: SidebarMenu = [
		{
			label: 'Dashboard',
			href: '/',
			icon: 'icon-[lucide--home]'
		},
		{
			label: 'E-commerce',
			href: '/e-commerce',
			icon: 'icon-[lucide--dollar-sign]',
			subMenu: [
				{
					label: 'Products',
					href: '/e-commerce/products'
				},
				{
					label: 'Billing',
					href: '/e-commerce/billing'
				},
				{
					label: 'Invoice',
					href: '/e-commerce/invoice'
				}
			]
		},
		// {
		// 	label: 'Kanban',
		// 	href: '/kanban',
		// 	icon: 'icon-[lucide--kanban-square]'
		// },
		// {
		// 	label: 'Inbox',
		// 	href: '/inbox',
		// 	icon: 'icon-[lucide--inbox]'
		// },
		{
			label: 'Users',
			href: '/users',
			icon: 'icon-[lucide--user]'
		},
		{
			label: 'Login',
			href: '/login',
			icon: 'icon-[lucide--log-in]'
		},
		{
			label: "Don't have an account? Sign up",
			href: '/signup'
		}
	];
	const denis = sidebarMenu;
</script>

<Sidebar>
	<SidebarWrapper>
		<SidebarGroup>
			{#each sidebarMenu as item}
				{#if !item.subMenu}
					<!-- content here -->
					<SidebarItem {activeClass} {aClass} label={item.label} href={item.href}>
						<svelte:fragment slot="icon">
							<i class="{item.icon} h-6 w-6" />
						</svelte:fragment>
					</SidebarItem>
				{:else}
					<SidebarDropdownWrapper
						label={item.label}
						btnClass="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 [&>i]:hover:text-primary-600"
					>
						<svelte:fragment slot="icon">
							<i class="{item.icon} h-6 w-6" />
						</svelte:fragment>
						{#each item.subMenu as subItem}
							<SidebarDropdownItem label={subItem.label} href={subItem.href} />
						{/each}
					</SidebarDropdownWrapper>
				{/if}
			{/each}
			<!-- <SidebarItem {activeClass} {aClass} label="Dashboard">
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--home] h-6 w-6" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarDropdownWrapper
				label="E-commerce"
				btnClass="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 [&>i]:hover:text-primary-600"
			>
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--dollar-sign] h-6 w-6" />
				</svelte:fragment>
				<SidebarDropdownItem label="Products" />
				<SidebarDropdownItem label="Billing" />
				<SidebarDropdownItem label="Invoice" />
			</SidebarDropdownWrapper>
			<SidebarItem {aClass} label="Kanban" {spanClass}>
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--kanban-square] h-6 w-6" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
						>Pro</span
					>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem {aClass} label="Inbox" {spanClass}>
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--inbox] h-6 w-6" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
						>3</span
					>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem {aClass} label="Users">
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--user] h-6 w-6" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem {aClass} label="Sign In">
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--log-in] h-6 w-6" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem {aClass} label="Sign Up">
				<svelte:fragment slot="icon">
					<i class="icon-[lucide--log-out] h-6 w-6" />
				</svelte:fragment>
			</SidebarItem> -->
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
