<script>
	import Card from "$lib/Card.svelte";
	import { Collection } from "sveltefire";
</script>

<div class="header">Blog</div>
<Collection ref="blogs" let:data={blogs} let:count>
    <div class="card-grid">
        {#each blogs as blog}
            <Card link={blog.slug} image={blog.image} title={blog.title} author={blog.author} date={blog.date} />
        {/each}
    </div>
</Collection>