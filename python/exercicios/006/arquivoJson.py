import json

pessoas = [
    {'nome' : 'Igor', 'telefone' : '(31) 988997766', 'endereco' : 'ABC'},
    {'nome' : 'Maria', 'telefone' : '(31) 977889955', 'endereco' : 'EDF'},
    {'nome' : 'Joao', 'telefone' : '(31) 977664433', 'endereco' : 'GHI'}
]

with open('pessoas.json', 'w') as arquivo:
    json.dump(pessoas, arquivo, indent=4)