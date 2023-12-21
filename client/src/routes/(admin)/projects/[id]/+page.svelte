<script lang="ts">
	import Multiselect from 'svelte-multiselect';

	export let data: any;

	const { projects, skills } = data;

	let mappedSkills = skills.map((sk: any) => sk.name);
	let mappedExistingSkills = projects.skills.map((sk: any) => sk.name);
</script>

<div class="card p-4 max-w-2xl my-5">
	<form method="post">
		<h1 class="text-center text-2xl">Edit a Project</h1>

		<input type="text" name="projectId" value={projects._id} hidden />

		<label class="label my-1">
			<span>Name</span>
			<input class="input" type="text" value={projects.name} name="projectName" required />
		</label>

		<label class="label my-1">
			<span>Description</span>
			<textarea
				class="textarea"
				value={projects.description}
				name="projectDescription"
				rows="3"
				required
			/>
		</label>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label my-1">
			<span>Skills</span>
			<Multiselect
				options={mappedSkills}
				selected={mappedExistingSkills}
				let:idx
				let:option
				name="skills"
				required
			/>
		</label>

		<label class="label my-1">
			<span>Tech Stack (Comma Separated)</span>
			<input
				class="input"
				name="techStack"
				value={projects.techStack.join(',')}
				placeholder="node,express,react"
				required
			/>
		</label>

		<button type="submit" class="btn variant-filled my-2">Update Project</button>

		<!-- <a href="/auth/signup" class="my-2">Don't have an account? | Signup</a> -->
	</form>
</div>
