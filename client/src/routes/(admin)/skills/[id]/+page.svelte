<script lang="ts">
	export let data: any;
</script>

{#if data}
	<!-- <div class="min-h-[60vh] flex justify-center items-center"> -->
	<div class="card p-4 max-w-2xl my-5">
		<form method="post">
			<h1 class="text-center text-2xl">Edit Skill</h1>

			<input type="text" name="skillId" value={data.skill._id} hidden />

			<label class="label my-1">
				<span>Name</span>
				<input class="input" type="text" name="skillName" value={data.skill.name} required />
			</label>

			<label class="label my-1">
				<span>Description</span>
				<textarea
					class="input"
					value={data.skill.description}
					name="skillDescription"
					rows="3"
					required
				/>
			</label>

			<button type="submit" class="btn variant-filled my-2">Update Skill</button>

			<!-- <a href="/auth/signup" class="my-2">Don't have an account? | Signup</a> -->
		</form>
	</div>
	<!-- </div> -->
{/if}
