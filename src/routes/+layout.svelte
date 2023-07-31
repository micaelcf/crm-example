<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import '../app.postcss';
</script>

<div>
	<AppHeader />
	<div class="flex">
		<AppSidebar />
		<div>
			<slot />
		</div>
	</div>
</div>
