<script lang="ts">
	import CardChart from '$lib/components/Dashboard/CardChart.svelte';
	import { charts } from '$lib/structs/dashboard';
</script>

<div class="flex flex-wrap justify-start gap-5 p-5">
	{#each charts as chartOptions}
		<CardChart options={chartOptions} />
	{/each}
</div>
