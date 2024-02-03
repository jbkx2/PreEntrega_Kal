let imcs = [];

    function calcularIMC() {
        const alturaInput = document.getElementById('altura');
        const pesoInput = document.getElementById('peso');
        const resultadoDiv = document.getElementById('resultado');

        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);

        if (isNaN(altura) || isNaN(peso)) {
            resultadoDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
            return;
        }

        const imc = peso / ((altura / 100) ** 2);
        imcs.push(imc);

        mostrarResultado(imc);
        actualizarPromedioIMCs();
    }

    function mostrarResultado(imc) {
        const resultadoDiv = document.getElementById('resultado');
        let mensaje = `<p>Su IMC es: ${imc.toFixed(2)}</p>`;

        if (imc < 18.5) {
            mensaje += '<p>Tiene bajo peso.</p>';
        } else if (imc < 25) {
            mensaje += '<p>Tiene un peso normal.</p>';
        } else if (imc < 30) {
            mensaje += '<p>Tiene sobrepeso.</p>';
        } else {
            mensaje += '<p>Tiene obesidad.</p>';
        }

        resultadoDiv.innerHTML = mensaje;
    }

    function actualizarPromedioIMCs() {
        const promedioDiv = document.createElement('div');
        promedioDiv.id = 'promedio';
        const promedio = calcularPromedio(imcs);
        promedioDiv.innerHTML = `<p>Promedio de IMC: ${promedio.toFixed(2)}</p>`;

        const formulario = document.getElementById('formulario');
        formulario.appendChild(promedioDiv);
    }

    function calcularPromedio(array) {
        if (array.length === 0) return 0;

        const suma = array.reduce((total, imc) => total + imc, 0);
        return suma / array.length;
    }