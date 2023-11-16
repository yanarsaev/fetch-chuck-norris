const list = document.getElementById('list')

const getJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await res.json()
    list.textContent = joke.value
}

document.getElementById('btnAdd').addEventListener('click', getJoke)

