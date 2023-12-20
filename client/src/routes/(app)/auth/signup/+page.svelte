<script lang="ts">
	import Fa from 'svelte-fa';
	import { faWarning } from '@fortawesome/free-solid-svg-icons';

	interface IError {
		success: boolean;
		message: string;
	}
	let error: IError | undefined = undefined;
</script>

<div class="min-h-[60vh] flex justify-center items-center">
	<div class="card p-4 max-w-md m-auto">
		{#if error}
			<div class="alert variant-outline-error">
				<div>
					<Fa icon={faWarning} />
				</div>
				<div class="alert-message">
					<p>{error.message}</p>
				</div>
			</div>
		{/if}
		<form method="post">
			<h1 class="text-center text-2xl">Signup</h1>

			<label class="label my-1">
				<span>First Name</span>
				<input class="input" type="text" name="firstName" placeholder="Enter first name" required />
			</label>

			<label class="label my-1">
				<span>Last Name</span>
				<input class="input" type="text" name="lastName" placeholder="Enter last name" required />
			</label>

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

			<button type="submit" class="btn variant-filled my-2 w-full">Signup</button>

			<a href="/auth/login" class="my-2">Already have an account? | Login</a>
		</form>
	</div>
</div>
