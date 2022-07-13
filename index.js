document.getElementById('main-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const currentEvent = document.getElementById('event-type').value
    console.log('currentEvent: ', currentEvent)
    const url = `https://api.unsplash.com/search/photos/?query=${currentEvent}&per_page=30&client_id=YOUR-API-KEY`
    
    e.target.style.display = 'none';

    document.getElementById('event-name').textContent = document.getElementById('event-type').value + ' card'


    document.getElementById('card-greeting').textContent = document.getElementById('new-greeting').value

    document.getElementById('card-message').textContent = document.getElementById('old-message').value

    const random1 = Math.ceil(Math.random() * 30)
    const random2 = Math.ceil(Math.random() * 30)

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log('API result: ', data.results[4].urls);
            document.getElementById('card-photo').src = data.results[random1].urls.small
            document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.results[random2].urls.regular})`;

        })
         
    document.getElementById('main-header').style.color = 'azure';
    document.getElementById('main-card-container').style.display = 'flex';

})

document.getElementById('go-back').addEventListener('click', () => {

    document.getElementById('main-card-container').style.display = 'none'
    document.getElementById('main-form').style.display = 'flex'
    document.getElementById('new-greeting').value = ''
    document.getElementById('old-message').value = ''
    document.body.style.backgroundImage = 'none'
    document.getElementById('main-header').style.color = 'black';
    
})
