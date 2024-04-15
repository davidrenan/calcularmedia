function calcularMedia() {
    // Obter os números do input e dividir em um array
    const numerosStr = document.getElementById("numerosInput").value;
    const numeros = numerosStr.split(',').map(numero => parseFloat(numero));
  
    // Verificar se há números válidos
    if (numeros.some(isNaN)) {
      document.getElementById("resultado").innerText = "Por favor, insira apenas números válidos.";
      return;
    }
  
    // Verificar se o array está vazio
    if (numeros.length === 0) {
      document.getElementById("resultado").innerText = "Por favor, insira pelo menos um número.";
      return;
    }
  
    // Calcular a média
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;
  
    // Exibir o resultado
    document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
  }
  