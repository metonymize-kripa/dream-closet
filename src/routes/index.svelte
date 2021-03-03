<script>
	import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import _ from 'underscore';
	let closet = '👕 👔 🎽 👟  ';
	
	let div;
	let autoscroll;
	
	beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

	//const eliza = new Eliza();
	//let comments = [{ author: 'eliza', text: eliza.getInitial() }];
	let comments = [{ author: 'amoire', text: closet}];

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;
			
			if (closet.includes("🎉 🙌")) {
				closet = ' '
			}

			comments = comments.concat({
				author: 'user',
				text
			});

			event.target.value = '';

			//const reply = eliza.transform(text);
			closet = closet + (_.sample(['👞','🥾','👖','🩳','🎁'],_.sample([1,2,3]))).join(' ')+' ';
			if ( text.toLowerCase() === 'empty' ) {
				closet = ' ';
			}
			
			setTimeout(() => {
				comments = comments.concat({
					author: 'amoire',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					comments = comments.filter(comment => !comment.placeholder).concat({
						author: 'amoire',
						//text: reply
						text: closet
					});
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
			
			if (closet.includes('🎁')) {
				closet = closet + "🎉 🙌 You found it!"
			}
		}
	}
</script>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 90%;
	}

	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}

	article {
		margin: 0.5em 0;
		font-size:larger;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}

	.amoire span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
		font-size:larger;
	}

	.user span {
		background-color: #0074D9;
		color: white;
		border-radius: 1em 1em 0 1em;
	}
</style>

<div class="chat">
	<h1>🎁 Amoire Club 💭</h1>
	
		<p>Type "empty" to reset the armoire, enter ↩️ to play ...</p>

	<div class="scrollable" bind:this={div}>
		{#each comments as comment}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>

	<input on:keydown={handleKeydown}>
</div>
