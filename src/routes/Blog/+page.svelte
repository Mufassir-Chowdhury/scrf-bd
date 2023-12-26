<script>
    export let data;
</script>

<div class="text-4xl font-semibold pb-4">Blog</div>
<div class="grid grid-cols-3 gap-y-6 justify-items-center">
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

</div>
