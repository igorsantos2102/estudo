class Imoveis:
    def __init__(self, nome, uf, valor, endereco = '', area = ''):
        self.nome = nome
        self.uf = uf
        self.valor = valor
        self.endereco = endereco
        self.area = area

    def detalhar(self):
        print(self.__dict__)
    
    def calcularImposto(self):
       imposto = self.valor * 0.02
       print('Imposto a pagar:', imposto)
    

class ImovelResidencial(Imoveis):
    pass

# minhaCasa = ImovelResidencial('Solar', 'MG', 400000)
# minhaCasa.detalhar()
# minhaCasa.calcularImposto()



class ImovelComercial(Imoveis):
        
    def calcularImpostoComercial(self):
        impostoComercial = self.valor * 0.05
        print(impostoComercial)


meuComercio = ImovelComercial('Padaria', 'DF', 200000)
meuComercio.detalhar()
meuComercio.calcularImpostoComercial()

