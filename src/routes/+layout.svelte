<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores();

	const drawerStore = getDrawerStore();
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';

	const firebaseConfig = {
		apiKey: "AIzaSyAw9-SSj6Pnu1P5pvq6GnukOX_1vC7EdfQ",
		authDomain: 'scrf-bd.firebaseapp.com',
		projectId: 'scrf-bd',
		storageBucket: 'scrf-bd.appspot.com',
		messagingSenderId: '327629050530',
		appId: '1:327629050530:web:1b75d53fdd606e5c447dfb',
		measurementId: 'G-Y0HH5CQFTT'
	};

	let app = initializeApp(firebaseConfig);
	let firestore = getFirestore(app);

	function drawerOpen() {
		drawerStore.open({ position: 'left', width: 'half'});
	}
	function drawerClose() {
		drawerStore.close();
	}
</script>
<FirebaseApp {firestore}>
	<Drawer>
		<div class="p-4">
			<a href="/">
				<img src="favicon.png" alt="" class="h-16 w-16">
			</a>
		</div>
		<div class="p-4 flex flex-col justify-between gap-6 ">
			<a class="bg-initial px-4" href="/">
				Home
			</a>
			<a class="bg-initial px-4" href="/About">
				About
			</a>
			<a class="bg-initial px-4" href="/Research">
				Research
			</a>
			<a class="bg-initial px-4" href="/Project">
				Projects
			</a>
			<a class="bg-initial px-4" href="/People">
				People
			</a>
			<a class="bg-initial px-4" href="/Blog">
				Blog
			</a>
			<a class="bg-initial px-4" href="/More">
				More
			</a>
			<LightSwitch />
		</div>
	</Drawer>
	<!-- App Shell -->
	<AppShell slotSidebarRight="bg-surface-500/5 w-56 p-4 md:hidden" slotPageFooter="bg-slate-800 w-full text-center p-4 text-white">
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					
					<a href="/">
						<img src="favicon.png" alt="" class="h-16 w-16">
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<div class="flex-row justify-between gap-2 lg:gap-4 hidden md:flex">
						<a class="bg-initial px-4" href="/">
							Home
						</a>
						<a class="bg-initial px-4" href="/About">
							About
						</a>
						<a class="bg-initial px-4" href="/Research">
							Research
						</a>
						<a class="bg-initial px-4" href="/Project">
							Projects
						</a>
						<a class="bg-initial px-4" href="/People">
							People
						</a>
						<a class="bg-initial px-4" href="/Blog">
							Blog
						</a>
						<a class="bg-initial px-4" href="/More">
							More
						</a>
						<LightSwitch />
					</div>
					<div class="flex md:hidden mx-10">
						<button
							type="button"
							class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							on:click={() => drawerOpen()}
						>
							<span class="sr-only">Open main menu</span>
							<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="Menu / Menu_Alt_01">
									<path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
							</svg>
						</button>
					</div>
					
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>

		<!-- <svelte:fragment slot="sidebarRight">
			<nav class="list-nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</nav>
		</svelte:fragment> -->
		<div class="p-4 md:px-28">
			<slot />
		</div>
		<svelte:fragment slot="pageFooter">
			© 2024 The Center for Social Policy and Justice
		</svelte:fragment>
	</AppShell>
</FirebaseApp>