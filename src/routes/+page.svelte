<script>
	import { blur, fade } from 'svelte/transition';
	import { questions, initialAffection } from '$lib/recruitment';
	import Logo from '$lib/components/Logo.svelte';

	let affection = $state(null);
	let currentQuestionIdx = $state(0);
	reset();

	function reset() {
		affection = { ...initialAffection };
		currentQuestionIdx = 0;
	}

	function nextQuestion(answer) {
		if (answer) {
			let option = questions[currentQuestionIdx].house;
			affection[option]++;
		}
		currentQuestionIdx++;
	}

	function evaluateAffection() {
		return Object.keys(affection).reduce((a, b) => (affection[a] > affection[b] ? a : b));
	}
</script>

<main id="main">
	<div class="stack">
		<div class="logo">
			<Logo width={128} />
		</div>
		{#each questions as question, i (i)}
			{#if i === currentQuestionIdx}
				<div class="stack-item" transition:blur={{ duration: 500 }}>
					<h2 class="item-text">{question.question}</h2>
					<div class="row">
						<button
							type="button"
							class="col mx-2 btn btn-success"
							onclick={() => nextQuestion(true)}>Igen</button
						>
						<button
							type="button"
							class="col mx-2 btn btn-danger"
							onclick={() => nextQuestion(false)}>Nem</button
						>
					</div>
				</div>
			{/if}
		{/each}
		{#if currentQuestionIdx >= questions.length}
			<div class="stack-item" transition:fade>
				<h2 class="item-text">A te területed: {evaluateAffection()}</h2>
				<div class="row">
					<button type="button" class="col mx-2 btn btn-primary" onclick={reset}
						>Megcsinálom újra!</button
					>
				</div>
			</div>
		{/if}
	</div>
</main>

<style>
	/* General layout adjustments */
	.stack {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 100%;
		position: relative;
		padding: 2rem;
		background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
	}

	/* Logo positioning */
	.logo {
		position: fixed;
		top: 4rem;
		display: flex;
		align-self: flex-start;
	}

	/* Card-style question block */
	.stack-item {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
		padding: 2rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
		text-align: center;
		animation: fadeInUp 0.5s ease-in-out;
		border: 1px solid #d1d5db;
	}

	/* Typography improvements */
	h2.item-text {
		font-size: 1.8rem;
		font-weight: 600;
		color: #1f2937;
		margin-bottom: 1.5rem;
		line-height: 1.4;
	}

	/* Responsive button layout */
	.row {
		display: flex;
		gap: 12px;
		justify-content: center;
		width: 100%;
	}

	/* Stylish buttons */
	button {
		font-size: 1rem;
		font-weight: 500;
		padding: 12px 24px;
		border-radius: 10px;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	button:hover {
		transform: scale(1.05);
	}

	.btn-success {
		background-color: #10b981;
		color: white;
	}

	.btn-success:hover {
		background-color: #059669;
	}

	.btn-danger {
		background-color: #ef4444;
		color: white;
	}

	.btn-danger:hover {
		background-color: #dc2626;
	}

	.btn-primary {
		background-color: #3b82f6;
		color: white;
	}

	.btn-primary:hover {
		background-color: #2563eb;
	}

	/* Mobile-friendly tweaks */
	@media (max-width: 480px) {
		.stack-item {
			padding: 1.5rem;
		}
		h2.item-text {
			font-size: 1.5rem;
		}
		.row {
			flex-direction: column;
		}
		button {
			width: 100%;
		}
	}
</style>
