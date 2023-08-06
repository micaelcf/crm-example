<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import '../app.postcss';
</script>

<div class="bg-white dark:bg-gray-800">
	<div class="sticky top-0 z-20">
		<AppHeader />
	</div>
	<div class="flex">
		<AppSidebar />
		<div class="min-h-[calc(100vh-60px)] w-full">
			<slot />
		</div>
	</div>
</div>
