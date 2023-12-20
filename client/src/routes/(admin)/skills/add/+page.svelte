<div class="card p-4 max-w-2xl my-5">
	<form method="post">
		<h1 class="text-center text-2xl">Add a Skill</h1>

		<label class="label my-1">
			<span>Name</span>
			<input class="input" type="text" name="skillName" required />
		</label>

		<label class="label my-1">
			<span>Description</span>
			<textarea class="input" name="skillDescription" rows="3" required />
		</label>

		<button type="submit" class="btn variant-filled my-2">Add Skill</button>

		<!-- <a href="/auth/signup" class="my-2">Don't have an account? | Signup</a> -->
	</form>
</div>
