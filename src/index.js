const init = () => {
  const inputForm = document.querySelector("form")
  const input = document.querySelector("#searchByID")


  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    console.log(e.target.children[1].value)
    console.log(input.value)
    fetch(`http://localhost:3000/movies/${input.value}`).then(resp => resp.json()).then(data => {
        const title = document.querySelector("#movieDetails h4")
        const summary = document.querySelector("#movieDetails p")
        title.textContent = data.title
        summary.textContent = data.summary
    })
    
  })
}

document.addEventListener('DOMContentLoaded', init);