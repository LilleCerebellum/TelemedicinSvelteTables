<script>
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
</script>
<input bind:value={username} type="text" placeholder="indtastemail" />
<input bind:value={password} type="password" placeholder="password" />
<button onclick={login}>Login</button>

