
<script>
    
    let painNum = $state('');
    let log = $state('');

    const insertPainVal = async () => {
	const response = await fetch('/api/pain', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ painValue: Number(painNum), log })
	});
	await response.json();

	if (response.ok) {
		alert('Smerte indmeldt');
	} else {
		alert('Error: smerte ikke indemldt');
	}

	painNum = '';
    log = '';
}


</script>

<h1>Indstat din smerte fra 0 til 5</h1>
<input type="number" bind:value={painNum} min="0" max="5" placeholder="0-5" />
<input type="text" bind:value={log} placeholder="Beskriv din smerte" />
<button class="btn btn-primary" onclick={insertPainVal}> Indsend smerte vurdering</button>
