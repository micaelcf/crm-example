<script lang="ts">
	import { drawerHidden } from '$lib/stores';
	import {
		Drawer,
		Sidebar,
		SidebarBrand,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { page } from '$app/stores';
	import type { SideBarStruct } from '$lib/structs/sidebar';
	import Icon from '../Icon.svelte';
	import logo from '$lib/assets/logo.png';

	let aClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300/60 dark:hover:bg-gray-700 [&>i]:hover:text-primary-600 transition-all duration-500';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-primary-500 dark:bg-primary-600';

	export let activeUrl: string;
	export let struct: SideBarStruct = {
		content: [],
		groups: []
	};

	const handleClick = (ev: MouseEvent) => {
		setTimeout(() => {
			drawerHidden.set(true);
		}, 500);
	};

	const content = struct.content;
	const groupsNames = struct.groups;
</script>

<svelte:window
	on:resize={(ev) => {
		if (matchMedia('(max-width: 640px)')) {
			drawerHidden.set(true);
		}
	}}
/>

<Drawer
	transitionType="fly"
	transitionParams={{
		x: -320,
		duration: 200,
		easing: sineIn
	}}
	width="w-[calc(30vw+10rem)]"
	class=" overflow-y-auto p-0"
	bind:hidden={$drawerHidden}
>
	<Sidebar class="w-full">
		<SidebarWrapper>
			<div class="mb-4 flex items-center">
				<img src={logo} alt="Awesome Company Logo" class="h-12 w-12" />
				<h1 class="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
					Awesome Company
				</h1>
			</div>
			{#each content as group, i}
				<SidebarGroup>
					{#if groupsNames[i]}
						<h3 class="mt-2 font-medium text-black opacity-[.45] dark:text-white">
							{groupsNames[i]}
						</h3>
					{/if}
					{#each group as item}
						{#if !item.subMenu}
							<SidebarItem
								active={activeUrl === item.href}
								{activeClass}
								{aClass}
								label={item.label}
								href={item.href}
								on:click={handleClick}
							>
								<svelte:fragment slot="icon">
									<Icon icon={item.icon} />
								</svelte:fragment>
							</SidebarItem>
						{:else}
							<SidebarDropdownWrapper
								isOpen={$page.url.pathname.includes(item.href)}
								label={item.label}
								btnClass="{aClass} w-full"
							>
								<svelte:fragment slot="icon">
									<Icon icon={item.icon} />
								</svelte:fragment>
								{#each item.subMenu as subItem}
									<SidebarDropdownItem
										active={activeUrl === subItem.href}
										activeClass="{activeClass} pl-11"
										label={subItem.label}
										href={subItem.href}
										on:click={handleClick}
									/>
								{/each}
							</SidebarDropdownWrapper>
						{/if}
					{/each}
				</SidebarGroup>
			{/each}
		</SidebarWrapper>
	</Sidebar>
</Drawer>
