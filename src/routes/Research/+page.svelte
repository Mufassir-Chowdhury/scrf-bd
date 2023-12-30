<script>
	import { DateTime } from "luxon";
	import { Collection } from "sveltefire";
</script>

<div class="text-4xl font-semibold pb-4">Research</div>

<Collection ref="research" let:data={papers} let:count>
    <dl class="list-nav">
        {#each papers as paper}
        <a class="block" href="https://www.sciencedirect.com/science/article/pii/S2666915323002238">
            <div class="flex items-center gap-3">
                <span class="badge bg-primary-500 rounded-full text-xl w-10 h-10">📓</span>
                <span class="flex-auto">
                    <dt class="font-bold">{paper.title}</dt>
                    <dd>
                        <span class="font-semibold">Authors:</span>
                        {paper.author}
                        <span class="font-semibold">Published: {DateTime.fromMillis(paper.date.seconds * 1000).toFormat('LLLL yyyy')}</span>
                        {paper.doi} </dd>
                </span>
            </div>
        </a>
        {/each}
    </dl>
</Collection>