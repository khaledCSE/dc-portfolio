<script lang="ts">
	import { AppShell, Modal, initializeStores } from '@skeletonlabs/skeleton';
	import Navbar from '../../lib/components/Navbar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Sidebar from '../../lib/components/Sidebar.svelte';

	initializeStores();

	export let user: any;
</script>

<Modal />

<!-- <AppShell>...</AppShell> -->
<AppShell slotSidebarLeft="w-52 bg-surface-600/100">
	<svelte:fragment slot="header">
		<Navbar {user} />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
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
