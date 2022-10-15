const submit = document.getElementById('submit');
const endContainer = document.querySelector('.end-container');
const startContainer = document.querySelector('.start-container');
const rating = document.getElementById('rating');
const values = document.querySelectorAll('.circle');
    
    //hides start container when submit clicked
    submit.addEventListener('click', function() {
        endContainer.classList.remove('hidden');
        startContainer.classList.add('hidden');
    })

    //selects individual rating number on click
    values.forEach((rate) => {
        rate.addEventListener('click', function() {
            //pushes rating into span with id=rating
            rating.innerHTML = rate.innerHTML;
        })
    })