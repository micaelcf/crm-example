<script lang="ts">
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import MobileDrawer from './MobileDrawer.svelte';
	import { sideBarStruct } from '$lib/structs/sidebar';
	import Icon from '../Icon.svelte';

	let aClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300/60 dark:hover:bg-gray-700 [&>i]:hover:text-primary-600 transition-all duration-500';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-primary-500 dark:bg-primary-600';

	$: activeUrl = $page.url.pathname;
	const content = sideBarStruct.content;
	const groupsNames = sideBarStruct.groups;
</script>

<div
	class="hidden min-h-screen w-[calc(10vw+10rem)] min-w-max max-w-[18rem] overflow-y-auto bg-gray-50 dark:bg-gray-800 sm:block"
>
	<Sidebar class="w-full">
		<SidebarWrapper>
			{#each content as group, i}
				<SidebarGroup>
					{#if groupsNames[i]}
						<h3 class="mt-2 font-medium text-black opacity-[.45] dark:text-white">
							{groupsNames[i]}
						</h3>
					{/if}
					{#each group as item}
						{@const icon = item.icon ? 'icon-[lucide--' + item.icon + ']' : 'icon-[lucide--dot]'}
						{#if !item.subMenu}
							<!-- content here -->
							<SidebarItem
								active={activeUrl === item.href}
								{activeClass}
								{aClass}
								label={item.label}
								href={item.href}
							>
								<svelte:fragment slot="icon">
									<Icon icon={item.icon} />
								</svelte:fragment>
							</SidebarItem>
						{:else}
							<SidebarDropdownWrapper label={item.label} btnClass="{aClass} w-full">
								<svelte:fragment slot="icon">
									<Icon icon={item.icon} />
									<!-- <i class="h-6 w-6">
										<svelte:component this={item.icon} size="100%" />
									</i> -->
								</svelte:fragment>
								{#each item.subMenu as subItem}
									<SidebarDropdownItem
										active={activeUrl === subItem.href}
										activeClass="{activeClass} pl-11"
										label={subItem.label}
										href={subItem.href}
									/>
								{/each}
							</SidebarDropdownWrapper>
						{/if}
					{/each}
				</SidebarGroup>
			{/each}
		</SidebarWrapper>
	</Sidebar>
</div>
<MobileDrawer struct={sideBarStruct} {activeUrl} />
