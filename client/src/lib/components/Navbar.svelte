<script lang="ts">
	import { AppBar, Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	const popupUser: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupUser',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	export let user: any;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="text-3xl">Portfolio Management</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if user}
			<span class="mr-1">Welcome back, {`${user.firstName}`}</span>
		{:else}
			<a href="/dashboard">Dashboard</a>
		{/if}
		<button use:popup={popupUser}>
			<Avatar initials="NU" background="bg-primary-500" />
		</button>
	</svelte:fragment>
</AppBar>

<div class="card p-4 w-72 shadow-xl" data-popup="popupUser">
	<nav class="list-nav">
		<ul>
			<li><a href="/auth/login">Login</a></li>
		</ul>
		<ul>
			<li><a href="/auth/signup">Signup</a></li>
		</ul>
		<ul>
			<li><a href="/auth/logout" class="w-full">Logout</a></li>
		</ul>
	</nav>
</div>
