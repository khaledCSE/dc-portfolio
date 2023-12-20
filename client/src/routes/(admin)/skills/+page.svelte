<script lang="ts">
	export let data: any;
</script>

<h3 class="h3 mb-2">All Skills</h3>
<div class="mb-2 flex justify-end">
	<button class="btn variant-filled-primary">
		<a href="/skills/add">Add a Skill</a>
	</button>
</div>

{#if data}
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>#</th>
					<th>Skill</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each data.skills as row, i}
					<tr>
						<td>{i + 1}</td>
						<td>{row.name}</td>
						<td>{row.description}</td>
						<td>
							<button class="btn variant-glass-warning">
								<a href={`/skills/${row._id}`}>Edit Skill</a>
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<th colspan="3">Total Skills: {data.skills.length}</th>
					<!-- <td>{data.skills.length}</td> -->
				</tr>
			</tfoot>
		</table>
	</div>
{/if}
