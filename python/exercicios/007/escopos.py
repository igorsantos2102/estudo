n3 = 7 #escopo global

def soma(n1,n2):
    n4 = 9 #escopo local, so funciona dentro da função
    print('Funcao soma: n1:', n1)
    print('Funcao soma: n2:', n2)

soma(5,8)