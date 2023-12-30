<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';


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

	let menuOpen = false;
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>
<FirebaseApp {firestore}>

	<!-- App Shell -->
	<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 md:hidden" slotPageFooter="bg-slate-800 w-full text-center p-4 text-white">
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					
					<a href="/"><strong class="text-xl uppercase">SPRF-BD</strong></a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a class="bg-initial px-4" href="/About">
						About
					</a>
					<a class="bg-initial px-4" href="/Research">
						Research
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
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://discord.gg/EXqV7W8MtY"
						target="_blank"
						rel="noreferrer"
					>
						Facebook
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://twitter.com/SkeletonUI"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<nav class="list-nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</nav>
		</svelte:fragment>
		<div class="p-4 md:px-28">
			<slot />
		</div>
		<svelte:fragment slot="pageFooter">
			© 2024 The Social Policy Research Foundation - Bangladesh
		</svelte:fragment>
	</AppShell>
</FirebaseApp>