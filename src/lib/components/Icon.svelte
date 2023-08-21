<script lang="ts">
	import { Home } from 'lucide-svelte';

	export let width: string | number = 'w-6';
	export let height: string | number = 'h-6';

	export let icon = Home;
</script>

<i class="{width} {height} {$$props.class}">
	<svelte:component this={icon} size="100%" />
</i>
