<script lang="ts">
	import { page } from '$app/stores';

	let selected = $page.url.pathname.slice(1);
</script>

<nav class="list-nav p-4">
	<ul>
		<li class={selected === 'dashboard' ? 'bg-surface-800/100 rounded-full' : ''}>
			<a href="/dashboard" on:click={() => (selected = 'dashboard')}>Dashboard</a>
		</li>
	</ul>
	<ul>
		<li class={selected === 'users' ? 'bg-surface-800/100 rounded-full' : ''}>
			<a href="/users" on:click={() => (selected = 'users')}>Users</a>
		</li>
	</ul>
	<ul>
		<li class={selected === 'skills' ? 'bg-surface-800/100 rounded-full' : ''}>
			<a href="/skills" on:click={() => (selected = 'skills')}>Skills</a>
		</li>
	</ul>
	<ul>
		<li class={selected === 'projects' ? 'bg-surface-800/100 rounded-full' : ''}>
			<a href="/projects" on:click={() => (selected = 'projects')}>Projects</a>
		</li>
	</ul>
</nav>
