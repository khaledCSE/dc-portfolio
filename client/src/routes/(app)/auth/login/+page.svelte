<div class="min-h-[60vh] flex justify-center items-center">
	<div class="card p-4 max-w-md m-auto">
		<form method="post">
			<h1 class="text-center text-2xl">Login</h1>

			<label class="label my-1">
				<span>Email</span>
				<input class="input" type="email" name="email" placeholder="Enter email" required />
			</label>

			<label class="label my-1">
				<span>Password</span>
				<input
					class="input"
					type="password"
					name="password"
					placeholder="Enter password"
					required
				/>
			</label>

			<button type="submit" class="btn variant-filled my-2 w-full">Login</button>

			<a href="/auth/signup" class="my-2">Don't have an account? | Signup</a>
		</form>
	</div>
</div>
