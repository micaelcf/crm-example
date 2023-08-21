<script lang="ts">
	import { Button, DarkMode, Img, Input, NavBrand, Navbar } from 'flowbite-svelte';
	import { scale } from 'svelte/transition';
	import AvatarDropdown from './AvatarDropdown.svelte';
	import { drawerHidden } from '$lib/stores';
	import { updated } from '$app/stores';
	import { Bell, Menu, Search, X } from 'lucide-svelte';
	import Icon from '../Icon.svelte';
	import logo from '$lib/assets/logo.png';

	let searchValue = '';
	// const defaultClass = 'flex item-center font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
</script>

<Navbar
	class="w-full bg-slate-50 px-2 py-2.5 dark:bg-gray-800 sm:px-4"
	classNavDiv="flex min-w-full flex-nowrap justify-between "
>
	<Button
		outline
		color="none"
		class="p-2 sm:hidden"
		on:click={(ev) => {
			drawerHidden.set(false);
		}}
	>
		<Icon icon={Menu} />
	</Button>

	<NavBrand href="/" class="hidden items-center sm:flex">
		<Img src={logo} class="mr-3 h-12" alt="Awesome Company Logo" />
		<h1 class="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:block">
			Awesome Company
		</h1>
	</NavBrand>
	<div class="hidden w-full max-w-xs sm:block">
		<Input bind:value={searchValue} placeholder="Search">
			<svelte:fragment slot="left">
				<Icon icon={Search} />
			</svelte:fragment>
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
							<i class="h-6 w-6">
								<X size="100%" />
							</i>
						</Button>
					</div>
				{/if}
			</div>
		</Input>
	</div>

	<div class="flex items-center gap-3">
		<DarkMode />
		<Button outline color="light" class="p-2">
			<Icon icon={Bell} />
		</Button>
		<AvatarDropdown />
	</div>
</Navbar>
