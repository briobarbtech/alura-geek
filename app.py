coso = True
numeros = []
max = 3

mayor = 0
index = 1

while (coso):
    if max == 0:
        coso = False
        break
    entrada = input('Ingrese un mumero: ')
    if entrada == "":
        continue
    entradaEntero = int(entrada)
    numeros.append(entradaEntero)
    max= max -1
    print(numeros)


for i in numeros:
    if i > mayor:
        mayor = i
iguales = []



print("El número mayor es ", mayor)
print(iguales)


