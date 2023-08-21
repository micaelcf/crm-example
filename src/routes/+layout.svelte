<script lang="ts">
	import AppHeader from '$lib/components/Layout/AppHeader.svelte';
	import AppSidebar from '$lib/components/Layout/AppSidebar.svelte';
	import { Drawer, Img } from 'flowbite-svelte';
	import '../app.postcss';
	import { drawerHidden } from '$lib/stores';
	import { onMount } from 'svelte';

	let clientWidth: number = 0;
</script>

<div class="bg-white dark:bg-gray-800">
	<div class="sticky top-0 z-20 bg-blue-500">
		<AppHeader />
	</div>
	<div class="flex">
		<div bind:clientWidth class="fixed left-0 top-[60px] z-50">
			<AppSidebar />
		</div>
		<div
			style="margin-left: {clientWidth}px;"
			class="min-h-[calc(100vh-60px)] w-full border-l border-t border-gray-200 text-black dark:border-gray-700 dark:text-white"
		>
			<slot />
		</div>
	</div>
</div>
