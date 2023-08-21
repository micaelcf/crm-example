<script lang="ts">
	import { Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import Icon from '../Icon.svelte';
	import Chart from './Chart.svelte';
	import { ChevronDown } from 'lucide-svelte';
	import type { ApexOptions } from 'apexcharts';

	export let options: ApexOptions = {
		chart: {
			height: '100%',
			//@ts-ignore
			maxWidth: '100%',
			type: 'area' as 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'New users',
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: '#1A56DB'
			}
		],
		xaxis: {
			categories: [
				'01 February',
				'02 February',
				'03 February',
				'04 February',
				'05 February',
				'06 February',
				'07 February'
			],
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	};
</script>

<Card class="h-fit">
	<slot name="header">
		<div class="flex justify-between">
			<div>
				<h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">32.4k</h5>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
			</div>
			<div
				class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
			>
				12%
				<Icon icon={ChevronDown} class="ml-1" />
			</div>
		</div>
	</slot>
	<Chart {options} />
	<slot name="footer">
		<div
			class="grid h-fit grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
		>
			<div class="flex items-center justify-between pt-5">
				<Button
					class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
				>
					Last 7 days
					<Icon icon={ChevronDown} class="m-2.5 ml-1.5" />
				</Button>
				<Dropdown class="w-40" offset={-6}>
					<DropdownItem>Yesterday</DropdownItem>
					<DropdownItem>Today</DropdownItem>
					<DropdownItem>Last 7 days</DropdownItem>
					<DropdownItem>Last 30 days</DropdownItem>
					<DropdownItem>Last 90 days</DropdownItem>
				</Dropdown>
				<A
					href="/"
					class="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700"
				>
					Users Report
					<Icon icon={ChevronDown} class="ml-1.5" />
				</A>
			</div>
		</div>
	</slot>
</Card>
