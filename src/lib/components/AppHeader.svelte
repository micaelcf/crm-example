<script lang="ts">
	import {
		Avatar,
		Button,
		DarkMode,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		Img,
		Indicator,
		Input,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Popover,
		Search
	} from 'flowbite-svelte';
	import { scale, slide } from 'svelte/transition';
	import AvatarDropdown from './AvatarDropdown.svelte';

	let searchValue = '';
	// const defaultClass = 'flex item-center font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
</script>

<Navbar fluid>
	<NavBrand href="/">
		<Img src="http://placebeard.it/640x640" class="mr-3 h-10" alt="Awesome Company Logo" />
		<span
			class="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:block"
		>
			Awesome Company
		</span>
	</NavBrand>
	<div class="mx-32 hidden w-auto flex-grow sm:block">
		<Input bind:value={searchValue} placeholder="Search">
			<i slot="left" class="icon-[lucide--search] h-6 w-6" />
			<div slot="right">
				{#if searchValue !== ''}
					<div transition:scale>
						<Button
							outline
							class="!p-1"
							on:click={() => {
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
		<Button pill class="block h-fit w-fit px-2 pb-1 pt-2 sm:hidden">
			<i class="icon-[lucide--search] h-6 w-6" />
		</Button>
		<DarkMode />
		<AvatarDropdown />
	</div>
</Navbar>
