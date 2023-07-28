<script lang="ts">
	import ThemeChanger from '$lib/Components/ThemeChanger.svelte';
	import '../app.postcss';
	import { colorScheme, SvelteUIProvider, useSvelteUITheme } from '@svelteuidev/core';
	import type { ProviderStyles, SvelteUITheme } from '@svelteuidev/core';
	const somethin = useSvelteUITheme();
	somethin.colors.primary.value = '#3728b5';
	console.log(somethin.colors.primary.value);
</script>

<SvelteUIProvider theme={somethin} withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
	<ThemeChanger />
	<slot />
</SvelteUIProvider>
