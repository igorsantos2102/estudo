while True:
  nome = input('Digite seu nome completo: ')
  ano_nascimento = input('Digite seu ano de nascimento: ')

  if ano_nascimento.isdigit():
    ano_nascimento = int(ano_nascimento)
    if ano_nascimento >= 1922 and ano_nascimento <= 2021:
      idade = 2022 - ano_nascimento
      print(f'Olá, {nome}. Você tem {idade} anos.')
      break
    else:
      print('O ano de nascimento deve estar entre 1922 e 2021.')
  else:
    print('O ano de nascimento deve ser um número.')