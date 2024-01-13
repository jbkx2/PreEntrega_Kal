function realizarOperaciones() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    const numOperaciones = parseInt(prompt("¿Cuántas operaciones deseas realizar?"));

    if (isNaN(numOperaciones) || numOperaciones <= 0) {
        alert("Por favor, ingresa un número válido de operaciones.");
        return;
    }

    for (let i = 0; i < numOperaciones; i++) {
        const operacion = prompt("Selecciona una operación: suma (+), resta (-), multiplicación (x), división (/)");

        switch (operacion) {
            case "+":
                alert(`El resultado de la suma es: ${numero1 + numero2}`);
                break;
            case "-":
                alert(`El resultado de la resta es: ${numero1 - numero2}`);
                break;
            case "x":
                alert(`El resultado de la multiplicación es: ${numero1 * numero2}`);
                break;
            case "/":
                if (numero2 === 0) {
                    alert("No puedes dividir por cero.");
                } else {
                    alert(`El resultado de la división es: ${numero1 / numero2}`);
                }
                break;
            default:
                alert("Operación no válida.");
        }
    }
}