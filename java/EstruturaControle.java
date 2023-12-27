package estruturacontrole;

import java.util.Scanner;

public class EstruturaControle {

	public static void main(String[] args) {
		

		Scanner ler = new Scanner(System.in);
		
		String nome, sobrenome;
		int idade;
		
		System.out.println("Sistema Eleitoral");
		
	//Entrada
		
		System.out.print("Digite seu nome: ");
			nome = ler.nextLine();
			
		System.out.print("Digite seu sobrenome: ");
			sobrenome = ler.nextLine();
		
		System.out.printf("Seja bem vindo %s %s. \n", nome, sobrenome);
			
		System.out.print("Por favor, informe sua idade: ");
			idade = ler.nextInt();
		
	//Processamento e saida
			
			if ((idade > 17) && (idade < 70)) {
				System.out.println("Seu voto e obrigatorio!");
		   }else if ((idade > 15) || (idade >= 70)){
				System.out.println("Seu voto e Facultativo!");	
		   }else {
				System.out.println("Voce nao tem idade para votar!");
			}
	} 
	}


