lista_produtos = ['máscaras faciais', 'batons',
                  'esmaltes', 'perfumes', 'loções',
                  'xampus', 'sabonetes', 'delineadores'] 

lista_produtos[1], lista_produtos[4] = 'rímel' , 'cremes hidratantes'
lista_produtos.pop() 

for i in range(len(lista_produtos)):
    print(f"Temos {lista_produtos[i]} à venda!")