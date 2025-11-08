const form = document.querySelector("#enquire-info");

async function onSubmit() {
    const queryString = new URLSearchParams(new FormData(form)).toString();
    try {
        const response = await fetch("/enquire", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: queryString
        })
        console.log("response", response)
        form.reset()
    } catch (e) {
        console.error(e)
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    onSubmit();
})
