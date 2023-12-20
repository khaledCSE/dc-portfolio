<script lang="ts">
	export let data;
</script>

<h1 class="h3 mb-2">Users</h1>

<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
			</tr>
		</thead>
		<tbody>
			{#each data.users as row, i}
				<tr>
					<td>{i + 1}</td>
					<td>{row.firstName}</td>
					<td>{row.lastName}</td>
					<td>{row.email}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Total Users</th>
				<td>{data.users.length}</td>
			</tr>
		</tfoot>
	</table>
</div>
