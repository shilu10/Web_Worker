const b1 = document.querySelector('.first')

const b2 = document.querySelector(".dummy")

const text = document.querySelector(".answer")


const worker = new Worker("web_worker.js")
console.log(worker)

b1.addEventListener("click", async() => {
    let answer = 0
    worker.postMessage(answer);

    worker.onmessage = async(event) => {
        const answer_from_woker = await event.data
        console.log(answer_from_woker)
        text.innerHTML = answer_from_woker + "This is the result from Web Worker";
    }
    
})
b2.addEventListener("click", () => {
    text.innerHTML = "Dummy button"
})