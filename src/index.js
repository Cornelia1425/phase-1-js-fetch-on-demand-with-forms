const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event)=>{
        event.preventDefault()
        const input = document.querySelector('input#searchByID')
        console.log(event)
        console.log(input.value)

    fetch(`http://localhost:3002/movies/${input.value}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            //here we store and present in html
            const title = document.querySelector('section#movieDetails h4')
            title.innerText = data.title
            const summary = document.querySelector('section#movieDetails p')
            summary.innerText = data.summary
        })  
    })
}

document.addEventListener('DOMContentLoaded', init);

