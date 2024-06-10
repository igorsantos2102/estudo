class Produto:
    
    def __init__(self, nome = '', valor = '', qtd = 0, marca = '', modelo = ''):
        self.nome = nome
        self.valor = valor
        self.qtd = qtd
        self.marca = marca
        self.modelo = modelo

    def comprar(self, quatidade):
        self.qtd += quatidade
        
    def vender (self, quatidade):

        if(self.qtd < quatidade):
            print('Estoque Insuficiente')
        else:
            self.qtd -= quatidade



produto0 = Produto('Celular', 2500, 100, 'Samsung', 'S23')
produto0.comprar(10)
produto0.vender(5)


produto1 = Produto('Notebook', 3800, 50, 'Acer', 'Nitro')

print(produto0.__dict__)
print(produto1.__dict__)