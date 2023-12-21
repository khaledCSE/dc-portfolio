<script lang="ts">
	export let data: any;
</script>

<h1 class="h1 my-2">Welcome Back!</h1>

<div class="flex gap-5 w-full min-h-[20vh] mb-5">
	<div class="flex-grow bg-amber-600 rounded-lg p-4 flex flex-col justify-center items-center">
		<h1 class="h1">{data.data.count.users}</h1>
		<h3 class="h3">Users Registered</h3>
	</div>
	<div class="flex-grow bg-emerald-800 rounded-lg p-4 flex flex-col justify-center items-center">
		<h1 class="h1">{data.data.count.skills}</h1>
		<h3 class="h3">Skills Added</h3>
	</div>
	<div class="flex-grow bg-purple-600 rounded-lg p-4 flex flex-col justify-center items-center">
		<h1 class="h1">{data.data.count.projects}</h1>
		<h3 class="h3">Projects Registered</h3>
	</div>
</div>

<div class="flex justify-between">
	<div class="card w-[48%] p-4">
		<h3 class="h3 mb-3">Skills</h3>
		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Skill</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{#each data.data.skills as row, i}
						<tr>
							<td>{i + 1}</td>
							<td>{row.name}</td>
							<td>{row.description}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<div class="card w-[48%] p-4">
		<h3 class="h3 mb-3">Projects</h3>
		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Skill</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{#each data.data.projects as row, i}
						<tr>
							<td>{i + 1}</td>
							<td>{row.name}</td>
							<td>{row.description}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
