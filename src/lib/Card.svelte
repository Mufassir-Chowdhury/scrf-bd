<script>
	import { DateTime } from "luxon";

    /**
	 * @type {any}
	 */
     export let link;
    /**
	 * @type {any}
	 */
     export let image = "";
    /**
	 * @type {any}
	 */
     export let title;
    /**
	 * @type {any}
	 */
     export let author;
    /**
	 * @type {any}
	 */
     export let date;

    const lines = image ? "line-clamp-3" : "line-clamp-6";
</script>

<a href={link} class="card border-t-4 border-t-orange-600 h-[450px] flex flex-col justify-between  divide-y divide-slate-600">
    <div>
        {#if image}
            <div class="aspect-video w-full max-h-56 ">
                <img class="w-full h-full" src={image} alt="">
            </div>
        {/if}
        <div>
            <h4 class="p-4 h4 {lines}">{title}</h4>
        </div>

    </div>
    <div class="p-4 flex flex-col gap-3 justify-between ">
        <div class="flex flex-col gap-1">
            <p>{author}</p>
            <p class=" font-light">{DateTime.fromMillis(date.seconds * 1000).toLocaleString(DateTime.DATE_FULL)}</p>
            <button type="button" class="btn variant-filled">Read Paper</button>
        </div>
    </div>
</a>