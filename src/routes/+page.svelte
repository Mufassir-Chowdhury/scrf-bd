<script>
	import Card from '$lib/Card.svelte';
	import { collection, query, orderBy, limit } from 'firebase/firestore';
	import { Collection, getFirebaseContext } from 'sveltefire';
	
	export let data;

	const { firestore } = getFirebaseContext();
</script>

<div class="text-center">
	<h1 class="h1">
		<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Center for</span>
	</h1>
	<h1 class="h1">
		<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"> Social Policy </span>
	</h1>
	<h1 class="h1">
		<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">and justice</span>
	</h1>
</div>
<p class="py-4">
	The Center for Social Policy and Justice (CSP-Justice) is proposed to be established as a non-profit organization dedicated to advancing research, analysis, and advocacy in the field of social policy, exclusively focusing on the unique challenges and opportunities within Bangladesh. This proposal outlines the key components, objectives, and strategies for the establishment and operation of CSP-Justice. 
</p>

{#if firestore}
	<Collection ref={query(collection(firestore, "research"), orderBy("date", "desc"), limit(2))} let:data={papers} let:count>
		<div class="header">Recent publications</div>
		<div class="card-grid">
			{#each papers as paper}
				<Card link={paper.link}  title={paper.title} author={paper.author} date={paper.date} />
			{/each}
			<a href="/Research" class="w-full md:col-span-2 lg:col-span-1">
				<button class="btn variant-filled my-8 w-full ">
					Read Other Research Papers
				</button>
			</a>
		</div>
	</Collection>
		
	<Collection ref={query(collection(firestore, "blogs"), orderBy("date", "desc"), limit(2))} let:data={blogs} let:count>
		<div class="header">Blog</div>
		<div class="card-grid">
			{#each blogs as blog}
				<Card link={blog.slug} image={blog.image} title={blog.title} author={blog.author} date={blog.date} />
			{/each}
			<a href="/Blog" class="w-full md:col-span-2 lg:col-span-1">
				<button class="btn variant-filled  my-8 w-full ">
					Read Other Blogs

				</button>
			</a>
		</div>
	</Collection>
{/if}

<div class="header">News</div>
<div>
    {#each data.props.blogs as blog}
        <a href={blog.slug} class="card border-t-4 border-t-orange-600 w-80 h-96">
            <div class="p-4 flex flex-col gap-3 justify-between ">
                <div>
                    <h3 class="h3 line-clamp-3">{blog.title}</h3>
                </div>
                <div class="flex flex-col gap-1">
                    <p>{blog.author}</p>
                </div>
				<div class="w-full flex flex-col items-end gap-3">
					<p class=" font-light">{blog.date}</p>
					<button type="button" class="btn variant-filled">Read Paper</button>
				</div>
            </div>
        </a>
    {/each}
	<a class="w-full flex justify-center py-4" href="/More">
		<button class="btn variant-filled">
			See Other News

		</button>
		<div>
		</div>
	</a>
</div>
