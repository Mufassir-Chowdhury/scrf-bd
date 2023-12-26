<script>
    export let data;
</script>

<div class="text-4xl font-semibold pb-4">Research</div>

<dl class="list-nav">
    {#each data.props.papers as paper}
    <a class="block" href="https://www.sciencedirect.com/science/article/pii/S2666915323002238">
        <div class="flex items-center gap-3">
            <span class="badge bg-primary-500 rounded-full text-xl w-10 h-10">📓</span>
            <span class="flex-auto">
                <dt class="font-bold">{paper.title}</dt>
                <dd>
                    <span class="font-semibold">Authors:</span>
                    {paper.authors}
                    <span class="font-semibold">Published: {paper.published}</span>
                    {paper.doi} </dd>
            </span>
        </div>
    </a>
    {/each}
</dl>
