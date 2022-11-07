const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        //  先全部移除  移除之后再打开点了的这个
        contents.forEach(content => content.classList.remove('show'))

        listItems.forEach(item => item.classList.remove('active'))

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

