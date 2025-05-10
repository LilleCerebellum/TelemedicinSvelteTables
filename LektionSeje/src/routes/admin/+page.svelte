<script>
    import { createSubscriber } from "svelte/reactivity";

    let userUsername = '';
    let userPassword = '';
    let patientUsername = '';
    let patientPassword = '';


    const createUser = async () => {
	const response = await fetch('/api/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username: userUsername, password: userPassword })
	});
	await response.json();

	if (response.ok) {
		alert('User created');
	} else {
		alert('Error: user not created');
	}

	userUsername = '';
	userPassword = '';
};




    const createPatient = async () => {
	const response = await fetch('/api/patient', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username: patientUsername, password: patientPassword })
	});
	await response.json();

	if (response.ok) {
		alert('Patient created');
	} else {
		alert('Error: patient not created');
	}

	patientUsername = '';
	patientPassword = '';
};
const gotopatientview = async () => {
	goto('/patientView');
}

</script>

    <div>
    <h1 class="text-2x1 font-bold"> Kun for oprettelse af seje læge mennesker med store gonader</h1>
    <input class="input m-2" type="text" bind:value={userUsername} placeholder="Brugernavn" class="input" />
    <input class="input m-2" type="password" bind:value={userPassword} placeholder="password" class="input" />
        <button class="btn btn-primary" onclick={createUser}>Opret bruger</button>
    </div>

    <div>
        <h1 class="text-2x1 font-bold"> PATIENT OPRETTLE, Lille gonader</h1>
        <input class="input m-2" type="text" bind:value={patientUsername} placeholder="Brugernavn" class="input" />
        <input class="input m-2" type="password" bind:value={patientPassword} placeholder="password" class="input" />
        <button class="btn btn-primary" onclick={createPatient}>Opret bruger</button>
    </div>
	<div> <button class="btn btn-primary" onclick={gotopatientview}> Find patient registreringer </button> </div>