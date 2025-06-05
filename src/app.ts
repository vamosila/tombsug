const doc = {
    sideInput: document.getElementById('side') as HTMLInputElement,
    angleInput: document.getElementById('angle') as HTMLInputElement,
    radiusInput: document.getElementById('radius') as HTMLInputElement,
    calcButton: document.getElementById('calcButton') as HTMLButtonElement
}

doc.calcButton.addEventListener('click', (event) => {
    event.preventDefault()
    startSolution()
})

function startSolution() {
    const side = Number(doc.sideInput.value)
    const angle = Number(doc.angleInput.value)
    const result = calcRadius(side, angle)
    doc.radiusInput.value = String(result)
}

function calcRadius(side: number, angle: number):number {
    const rad = angle * Math.PI / 180.0
    const result = 1.0/2.0*side*Math.sin(rad)
    return result
}