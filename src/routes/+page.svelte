<script>
	export let data;
</script>

<div class="text-center">
	<h1 class="h1">
		<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Social policy</span>
	</h1>
	<h1 class="h1">
		<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"> and Justice </span>
	</h1>
	<h1 class="h1">
		<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Foundation</span>
	</h1>
</div>
<p class="py-4">
	The Social Policy Research Foundation - Bangladesh (SPRF-BD) is proposed to be established as a non-profit organization dedicated to advancing research, analysis, and advocacy in the field of social policy, exclusively focusing on the unique challenges and opportunities within Bangladesh. This proposal outlines the key components, objectives, and strategies for the establishment and operation of SPRF-BD. 
</p>

<div class="text-4xl font-semibold pb-4 pt-8">Recent publications</div>
<div class="grid grid-cols-3 justify-items-center items-center">
	{#each data.props.papers as paper}
		<a href={paper.link} class="card border-t-4 border-t-orange-600 w-80 h-96">
			<div class="h-full p-4 gap-3 flex flex-col justify-between divide-y divide-slate-600">
				<h4 class="h4">{paper.title}</h4>
				<div class=" flex flex-col gap-1">
					<p>{paper.authors}</p>
					<p class=" font-light">{paper.published}</p>
					<button type="button" class="btn variant-filled">Read Paper</button>
				</div>
			</div>
		</a>
	{/each}
    
	<a href="/Research">
		<button class="btn variant-filled">
			Read Other Research Papers

		</button>
		<div>
		</div>
	</a>

</div>

<div class="text-4xl font-semibold pb-4 pt-8">Blog</div>
<div class="grid grid-cols-3 gap-y-6 justify-items-center items-center">
    {#each data.props.blogs as blog}
        <a href={blog.slug} class="card border-t-4 border-t-orange-600 w-80 h-96">
            <img class=" h-2/5 w-full" src={blog.image} alt="">
            <div class="p-4 flex flex-col gap-3 justify-between h-3/5">
                <div>
                    <h4 class="h4 line-clamp-3">{blog.title}</h4>
                </div>
                <div class="flex flex-col gap-1">
                    <p>{blog.author}</p>
                    <p class=" font-light">{blog.date}</p>
                    <button type="button" class="btn variant-filled">Read Paper</button>
                </div>
            </div>
        </a>
    {/each}
	<a href="/Blog">
		<button class="btn variant-filled">
			Read Other Blogs

		</button>
		<div>
		</div>
	</a>
</div>
<div class="text-4xl font-semibold pb-4 pt-8">News</div>
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
