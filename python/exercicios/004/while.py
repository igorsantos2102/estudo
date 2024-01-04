# i = 1

# while i < 11:
#     print(f"3 x {i} = {3*i}")
#     # i = i + 1
#     i += 1

continuar = True

while continuar:

    numero = int(input("Qual tabuada deseja saber? "))

    for i in range(1, 11):
        print(f"{numero} x {i} = {numero*i}")

        continuar = input('Deseja continuar? (s/n)')
        continuar = True if continuar == 's' else False
