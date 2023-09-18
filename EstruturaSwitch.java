package estrutura_switch;

import java.util.Scanner;

public class EstruturaSwitch {

	public static void main(String[] args) {
		
		Scanner ler = new Scanner(System.in);
		
		int n1 ,n2 ,res = 0;
		String op = "";
		
		
	//Entrada
		
		System.out.print("Digite um numero: ");
		n1 = ler.nextInt();
		
		System.out.print("Digite outro numero: ");
		n2 = ler.nextInt();
		
		System.out.print("Qual Operacao deseja realizar: + ou x ? ");
		op = ler.next();
		
	
	//Processamento e saida
		
		switch(op) {
			case "+":
				res = n1 + n2;
			break;
			case "x":
				res = n1 * n2;
			break;
			
		default:
			System.out.print("Operacao invalida");			
		}
		
		System.out.print(res);
		 
		
					
	}

}
