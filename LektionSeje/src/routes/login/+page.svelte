<script>
    import { goto } from '$app/navigation';

	let username = $state('');
    let password = $state('');

    const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            goto('/admin');
        } else {
            alert('Login fejlet!');
        }
    };

    const loginPatient = async () => {
        const response = await fetch('/api/Patientlogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            goto('/painRegister');
        } else {
            alert('Login fejlet!');
        }
    };
    brugernavn = "";
    password = "";

</script>
<input bind:value={username} type="text" placeholder="username" />
<input bind:value={password} type="password" placeholder="password" />
<button onclick={login}>Login Læge</button>

<input bind:value={username} type="text" placeholder="username" />
<input bind:value={password} type="password" placeholder="password" />
<button onclick={loginPatient}>Login Patient</button>
