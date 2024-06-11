from abc import ABC, abstractmethod

class Imoveis(ABC):
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

    @abstractmethod
    def aluguelSugerido(self):
        pass

class ImovelResidencial(Imoveis):
    pass

# minhaCasa = ImovelResidencial('Solar', 'MG', 400000)
# minhaCasa.detalhar()
# minhaCasa.calcularImposto()



# class ImovelComercial(Imoveis):
        
#     # def calcularImpostoComercial(self):
#     #     impostoComercial = self.valor * 0.05
#     #     print(impostoComercial)


class ImovelRural(Imoveis):
    def aluguelSugerido(self):
        self.aluguel = self.valor * 0.015
        print(self.aluguel)

fazenda = ImovelRural('Amanhecer', 'GO', 300000)
fazenda.detalhar()
fazenda.aluguelSugerido()

# meuComercio = ImovelComercial('Padaria', 'DF', 200000)
# meuComercio.detalhar()
# meuComercio.calcularImpostoComercial()

