const cardBox = document.querySelector('.card-box')
const cardItems = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.modal-wrapper')
const btn = document.querySelector('button')

let cards = ['image-1.jpg', 'image-2.jpeg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-6.jpg', 'image-7.jpg', 'image-8.avif', 'image-1.jpg', 'image-2.jpeg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-6.jpg', 'image-7.jpg', 'image-8.avif']

let new_cards = cards.sort(() => (Math.random() > .5) ? 2 : -1)

btn.onclick = () => window.location.reload()

cardItems.forEach((element, index) => {
    element.querySelector('.back').style.backgroundImage = `url(./images/${new_cards[index]})`

    element.onclick = () => {
        element.classList.add('active')

        setTimeout(() => {
            if (document.querySelectorAll('.active').length > 1) {
                if (document.querySelectorAll('.active')[0].querySelector('.back').style.backgroundImage === document.querySelectorAll('.active')[1].querySelector('.back').style.backgroundImage) {
                    document.querySelectorAll('.active')[0].classList.add('match')
                    document.querySelectorAll('.active')[1].classList.add('match')

                    if(document.querySelectorAll('.match').length === new_cards.length){
                        modal.classList.add('open')
                        modalWrapper.classList.add('open')
                    }
                }
                else {
                    cardItems.forEach(item => {
                        item.classList.remove('active')
                    })
                }
            }
        }, 500);
    }
});

