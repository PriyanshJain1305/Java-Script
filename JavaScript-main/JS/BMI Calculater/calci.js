const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // Result showing

        results.innerHTML = `<span>${bmi}</span>`

        const message = document.querySelector('.message')
        const show = document.querySelector('.show')
        if (bmi > 18.6 && bmi < 25) {
            show.innerText = "Normal Range";
        }
        else if (bmi > 25) {
            show.innerText = "over weight";
        }
        else {
            show.innerText = "under weight";
        }
    }
})