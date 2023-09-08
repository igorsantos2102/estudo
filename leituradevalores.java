package leitura_valores;


import java.util.Scanner;

public class leituradevalores {

	public static void main(String[] args) {
		
		Scanner ler = new Scanner(System.in);
		String nome;
		int n1;
		int n2;
		
	
		System.out.print("Digite seu nome:");	
			nome = ler.nextLine();
		
		
		System.out.print("Olá " + nome + ", digite um numero: ");
			n1 = ler.nextInt();
			
		System.out.print("Digite outro numero: ");
			n2 = ler.nextInt();
			
		
			int soma = n1 + n2;
		System.out.printf("A soma dos numeros é %d", soma);
		
		
		
		
		
	}

}
