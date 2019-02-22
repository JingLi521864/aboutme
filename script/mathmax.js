window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')

    if (localStorage.getItem('first')) {
        document.getElementById('first').value = parseInt(localStorage.hour)
        console.log(`  Stored num1 = ${localStorage.hour}`)
    }
    if (localStorage.getItem('second')) {
        document.getElementById('second').value = parseInt(localStorage.wage)
        console.log(`  Stored num2 = ${localStorage.wage}`)
    }
    console.log('  Finished initialization')
})

function mathMax(first, second) {
    first = Number(document.getElementById("first").value)

    second = Number(document.getElementById("second").value)

    value = Math.max(first, second);

    document.getElementById("value").innerHTML = Math.max(first, second);
}

document.getElementById('wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    localStorage.removeItem('first')
    localStorage.removeItem('second')
    console.log('  Finished wiper click handler - localStorage entries removed')
})