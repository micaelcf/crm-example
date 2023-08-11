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
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';

	import type { LayoutServerData } from '../../routes/$types';
	import { page } from '$app/stores';

	let aClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300/60 dark:hover:bg-gray-700 [&>i]:hover:text-primary-600 transition-all duration-500';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-primary-500 dark:bg-primary-600';

	export let activeUrl: string;
	export let data: LayoutServerData;

	const handleClick = (ev: MouseEvent) => {
		setTimeout(() => {
			drawerHidden.set(true);
		}, 500);
	};

	const struct = data.struct.content;
	const groupsNames = data.struct.groups;
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
	class="z-50 overflow-y-auto p-0"
	bind:hidden={$drawerHidden}
>
	<Sidebar class="w-full">
		<SidebarWrapper>
			{#each struct as group, i}
				<SidebarGroup>
					{#if groupsNames[i]}
						<h3 class="mt-2 font-medium text-black opacity-[.45] dark:text-white">
							{groupsNames[i]}
						</h3>
					{/if}
					{#each group as item}
						{@const icon = item.icon ? 'icon-[lucide--' + item.icon + ']' : 'icon-[lucide--dot]'}
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
									<i class="{icon} h-6 w-6" />
								</svelte:fragment>
							</SidebarItem>
						{:else}
							<SidebarDropdownWrapper
								isOpen={$page.url.pathname.includes(item.href)}
								label={item.label}
								btnClass="{aClass} w-full"
							>
								<svelte:fragment slot="icon">
									<i class="{icon} h-6 w-6" />
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
