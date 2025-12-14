const form = document.querySelector("#enquire-info");

async function onSubmit() {
    const data = JSON.stringify(Object.fromEntries(new FormData(form)))

    const ackElem = document.getElementById("acknowledgement")
    ackElem.style.display = "block"
    setTimeout(() => {
        if(ackElem && ackElem.style && ackElem.style.display) {
            ackElem.style.display = "none"
        }
    }, 3000)

    try {
        const response = await fetch("https://formsubmit.co/ajax/d0ddb6224e25de5049d4306cd64eaa5f", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: data
        })
    } catch (e) {
        console.error(e)
    }
    form.reset()
}

form.addEventListener("submit", event => {
    event.preventDefault();
    onSubmit();
})
