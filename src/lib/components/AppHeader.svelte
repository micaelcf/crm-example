<script lang="ts">
	import { Button, DarkMode, Img, Input, NavBrand, Navbar } from 'flowbite-svelte';
	import { scale } from 'svelte/transition';
	import AvatarDropdown from './AvatarDropdown.svelte';
	import { drawerHidden } from '$lib/stores';
	import { updated } from '$app/stores';

	let searchValue = '';
	// const defaultClass = 'flex item-center font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
</script>

<Navbar navDivClass="flex flex-nowrap min-w-full justify-between">
	<Button
		outline
		color="none"
		class="black p-2 sm:hidden"
		on:click={(ev) => {
			drawerHidden.set(false);
		}}
	>
		<i class="icon-[lucide--menu] h-6 w-6" />
	</Button>

	<NavBrand href="/" class="hidden items-center sm:flex">
		<Img src="http://placebeard.it/640x640" class="mr-3 h-10" alt="Awesome Company Logo" />
		<span
			class="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:block"
		>
			Awesome Company
		</span>
	</NavBrand>
	<div class="hidden w-full max-w-xs sm:block">
		<Input bind:value={searchValue} placeholder="Search">
			<i slot="left" class="icon-[lucide--search] h-6 w-6" />
			<div slot="right">
				{#if searchValue !== ''}
					<div transition:scale>
						<Button
							outline
							class="!p-1"
							on:click={(ev) => {
								searchValue = '';
							}}
						>
							<i class="icon-[lucide--x] h-6 w-6" />
						</Button>
					</div>
				{/if}
			</div>
		</Input>
	</div>

	<div class="flex items-center gap-3">
		<DarkMode />
		<AvatarDropdown />
	</div>
</Navbar>
