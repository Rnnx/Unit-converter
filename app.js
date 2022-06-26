const numInput = document.querySelector('#unit-input')
const convertBtn = document.querySelector('#convert-btn')
const txtLength = document.querySelector('#length-txt')
const txtVolume = document.querySelector('#volume-txt')
const txtMass = document.querySelector('#mass-txt')

convertBtn.addEventListener('click', function() {
    txtLength.textContent = convertLength(numInput.value)
    txtVolume.textContent = convertVolume(numInput.value)
    txtMass.textContent = convertMass(numInput.value)

    numInput.value = null
})

function convertLength(num) {
    return `${num} meters = ${(num*3.281).toFixed(3)} feet | ${num} feet = ${(num/3.281).toFixed(3)} meters`
}

function convertVolume(num) {
    return `${num} liters = ${(num*0.264).toFixed(3)} gallons | ${num} gallons = ${(num/0.264).toFixed(3)} liters`
}

function convertMass(num) {
    return `${num} kilos = ${(num*2.204).toFixed(3)} pounds | ${num} pounds = ${(num/2.204).toFixed(3)} kilos`
}