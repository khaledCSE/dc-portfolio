<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '../../lib/components/Navbar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="w-full min-h-full p-10">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
