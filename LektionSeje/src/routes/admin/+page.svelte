<script>
    import { createSubscriber } from "svelte/reactivity";

    let username = $state('user');
    let password = $state('password');


    const createUser = async ( ) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password})
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
</script>

<h1 class="text-2x1 font-bold"> Kun for seje mennesker, jeg er sej med store gonader</h1>
<div>
    <input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
</div>
<div>
    <input type="text" bind:value={password} placeholder="password" class="input" />
</div>
<div>
    <button class="btn btn-primary" onclick={createUser}>Opret bruger</button>
</div>
