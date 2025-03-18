const btn = document.getElementById("addDiv")

var number = 0;

btn.addEventListener("click", () => {
    let div = document.createElement('div')
    let p = document.createElement('div')
    let remove = document.createElement('div')

    p.innerHTML = number
    remove.innerHTML = '-'

    div.append(p)
    div.append(remove)

    div.classList.add('newDiv')
    remove.classList.add('remove')

    remove.addEventListener("click", () => {
        div.remove()

        if(document.querySelector('.newDiv') == null){
            number = 0
        }
    })

    document.body.appendChild(div)
    number++
})

console.log("yoo")
