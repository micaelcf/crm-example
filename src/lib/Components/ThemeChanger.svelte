<script lang="ts">
	import { colorScheme, Switch } from '@svelteuidev/core';

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
	}
</script>

<Switch on:change={toggleTheme} />
