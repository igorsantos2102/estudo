class Imoveis():
    def __init__(self, nome, uf, valor, endereco = '', area = ''):
        self._nome = nome
        self.uf = uf
        self.valor = valor
        self.endereco = endereco
        self.area = area

    def detalhar(self):
        print(self.__dict__)


    @property
    def nome(self):
        return self._nome
    
    @nome.setter
    def nome(self, nome):
        self._nome = nome

    

    # def getNome(self):
    #     return print(self.nome)
    
    # def setNome(self, nome):
    #     self.nome = nome




casa = Imoveis('Amanhecer', 'MG', '20000')

casa.nome = 'Amanhecer do Horizonte'

casa.detalhar()


# casa.setNome('Amanhecer do Horizonte')

# casa.getNome()