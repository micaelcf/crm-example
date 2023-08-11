<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import { Drawer, Img } from 'flowbite-svelte';
	import '../app.postcss';
	import { drawerHidden } from '$lib/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="bg-white dark:bg-gray-800">
	<div class="sticky top-0 z-20">
		<AppHeader />
	</div>
	<div class="flex">
		<AppSidebar {data} />
		<div class="min-h-[calc(100vh-60px)] w-full">
			<slot />
		</div>
	</div>
</div>
