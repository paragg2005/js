let array = []

function create()
{
    let input = document.getElementById('create').value
    array = input.split(",").map(item => item.trim()) 
    document.getElementById('array').innerHTML = `Array Created : [${array}]`
}

function remove()
{
    let element = document.getElementById('element').value
    array = array.filter(item => item !== element)
    document.getElementById("remove").innerHTML = `After removing ${element}, Updated Array: [${array}]`
    
}

function check()
{
    let number = document.getElementById('number').value
    let exists = array.includes(number)
    document.getElementById('check').innerHTML = exists
    ? `The "${number}" EXISTS in array`
    : `The "${number}" NOT EXISTS in array`
}

function empty()
{
    array = []
    document.getElementById('empty').innerHTML = `Array is now Empty, array = [${array}]` 
}