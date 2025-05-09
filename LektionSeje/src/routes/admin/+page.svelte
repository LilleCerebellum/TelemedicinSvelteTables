<script>
    import { createSubscriber } from "svelte/reactivity";

    let username = $state('');
    let password = $state('');


    const createUser = async ( ) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        await response.json();
        if (response.ok) {
            alert('User created')
        } else {
            alert('error: user note created')
        }
        username = '';
        password = '';
    };



    const createPatient = async () => {
	const response = await fetch('/api/patient', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	});
	await response.json();

	if (response.ok) {
		alert('Patient created');
	} else {
		alert('Error: patient not created');
	}

	username = '';
	password = '';
};


</script>

    <div>
    <h1 class="text-2x1 font-bold"> Kun for oprettelse af seje læge mennesker med store gonader</h1>
        <input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
        <input type="password" bind:value={password} placeholder="password" class="input" />
        <button class="btn btn-primary" onclick={createUser}>Opret bruger</button>
    </div>

    <div>
        <h1 class="text-2x1 font-bold"> PATIENT OPRETTLE, Lille gonader</h1>
        <input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
        <input type="password" bind:value={password} placeholder="password" class="input" />
        <button class="btn btn-primary" onclick={createPatient}>Opret bruger</button>
    </div>