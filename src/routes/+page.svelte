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
<div class="w-full flex justify-center my-8 card">

	<div id="mc_embed_shell">
		<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
	<style type="text/css">
		  #mc_embed_signup{ false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
		  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
			 We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
	</style>
	<div id="mc_embed_signup">
	  <form action="https://cspjustice.us13.list-manage.com/subscribe/post?u=0f0ea524c9cb862ca6bd7f73d&amp;id=305be8850e&amp;f_id=008c8de4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
		  <div id="mc_embed_signup_scroll"><h2>Subscribe to our mailing list to get latest posts directly to your email.</h2>
			  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
			  <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required={true} value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
		  <div id="mce-responses" class="clear foot">
			  <div class="response" id="mce-error-response" style="display: none;"></div>
			  <div class="response" id="mce-success-response" style="display: none;"></div>
		  </div>
	  <div style="position: absolute; left: -5000px;" aria-hidden="true">
		  /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
		  <input type="text" name="b_0f0ea524c9cb862ca6bd7f73d_305be8850e" tabindex="-1" value="">
	  </div>
		  <div class="optionalParent">
			  <div class="clear foot">
				  <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
			  </div>
		  </div>
	  </div>
	</form>
	</div>
	<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
</div>


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
