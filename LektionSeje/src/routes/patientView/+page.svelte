<script>
	let patientUsername = $state('');
	let painEntries = $state([]);


	const fetchPainValues = async () => {
		const response = await fetch('/api/dataView', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ patientUsername })
		});

		const data = await response.json();
		if (response.ok) {
			painEntries = data;
		} else {
			alert('Patient not found or error occurred');
		}
	};
</script>

<h1>Se dine patienters smerte vurderinger</h1>
<input type="text" bind:value={patientUsername} placeholder="Patient brugernavn" />
<button onclick={fetchPainValues}>Hent data</button>

{#if painEntries.length}
	<ul>
		{#each painEntries as entry}
			<li>
				<b>{entry.painValue}</b> – {entry.log} – {new Date(entry.createdAt).toLocaleString()}
			</li>
		{/each}
	</ul>
{/if}
