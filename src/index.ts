const promptSync = require("prompt-sync");
import { somar, subtrair, multiplicar, dividir } from "./calc";

function main() {
  const prompt = promptSync();

  let continuar = "s";
  while (continuar.toLowerCase() === "s") {
    console.log("Escolha a operação:");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");

    const opcao = prompt("Digite o número da operação desejada: ");
    const a = Number(prompt("Digite o primeiro número: "));
    const b = Number(prompt("Digite o segundo número: "));

    let resultado: number;

    switch (opcao) {
      case "1":
        resultado = somar(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "2":
        resultado = subtrair(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "3":
        resultado = multiplicar(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "4":
        try {
          resultado = dividir(a, b);
          console.log(`Resultado: ${resultado}`);
        } catch (e: any) {
          console.log(`Erro: ${e.message}`);
        }
        break;
      default:
        console.log("Opção inválida.");
    }

    continuar = prompt("Deseja fazer outra operação? (s/n): ");
    console.log(); // Linha em branco para separar as execuções
  }
  console.log("Calculadora encerrada.");
}

main();
