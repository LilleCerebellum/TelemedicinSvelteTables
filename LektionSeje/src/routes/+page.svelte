<script>
	import { goto } from "$app/navigation";

    let brugernavn = $state("");
    let password = $state("");

    const loginButton = () => {
        if (brugernavn === "Morten" && password === "Morten") {
            goto('/admin')

        } else if (brugernavn === "Rasmus" && password === "Rasmus") {
            window.open("https://maps.app.goo.gl/qcViKmE1Rud1AVjr9")
        }
        
        else { alert("nuhuh") } 
    }
</script>

<input class="input m-2" til bind:value={brugernavn} placeholder="Brugernavn">
<input class="input m-2" til bind:value={password} placeholder="Password">
<button class="btn btn-primary m-2" onclick={loginButton}> Login </button>

