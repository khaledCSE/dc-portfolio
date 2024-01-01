<script lang="ts">
	import { CodeBlock, ProgressRadial } from '@skeletonlabs/skeleton';

	export let data: any;
</script>

<svelte:head>
	<title>Portfolio Management</title>
</svelte:head>

{#if data.resp}
	<div class="my-5 flex gap-3">
		{#each data.resp as project}
			<div class="card p-5 w-[33%]">
				<header class="card-header">
					<h3 class="h3">
						<a href={`/projects/${project._id}`}>{project.name}</a>
					</h3>
				</header>
				<section class="p-4">
					<p>{project.description}</p>
					<div class="mt-5">
						<span>Skills: </span>
						{#each project.skills as skill}
							<a
								href={`/skills/${skill._id}`}
								class="chip variant-ringed-primary text-primary-500 rounded mx-1">{skill.name}</a
							>
						{/each}
					</div>
				</section>
				<!-- <footer class="card-footer flex gap-2 justify-end items-end">
					<button class="btn variant-filled-warning">
						<a href={`/projects/${project._id}`}>Edit Project</a>
					</button>
					<form action={`/projects/delete/${project._id}`} method="get">
						<button type="submit" class="btn variant-filled-error">Delete Project</button>
					</form>
				</footer> -->
			</div>
		{/each}
	</div>
{:else}
	<ProgressRadial
		...
		stroke={100}
		meter="stroke-primary-500"
		track="stroke-primary-500/30"
		value={undefined}
	/>
{/if}
