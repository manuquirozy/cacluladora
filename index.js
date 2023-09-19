const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const operaciones = ['sumar', 'restar', 'multiplicar', 'dividir'];

const resultado = document.getElementById('resultado');

operaciones.map((operacion) => {
  const boton = document.getElementById(operacion);
  boton.addEventListener('click', () => {
    const a = parseInt(num1.value);
    const b = parseInt(num2.value);
    if (isNaN(a) || isNaN(b)) {
      resultado.innerHTML = 'Ingrese ambos números';
      return;
    }
    switch (operacion) {
      case 'sumar':
        resultado.innerHTML = `La suma es igual a ${a + b}`;
        break;
      case 'restar':
        resultado.innerHTML = `La resta es igual a ${a - b}`;
        break;
      case 'multiplicar':
        resultado.innerHTML = `La multiplicación es igual a ${a * b}`;
        break;
      case 'dividir':
        resultado.innerHTML = `La división es igual a ${a / b}`;
        break;
    }
  });
});