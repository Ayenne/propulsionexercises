def find(number):
    if number < 10:
        return 0
    new_number = 1
    while (number > 0):
        new_number = new_number * (number % 10)
        number = number / 10

    return find(new_number) + 1



print(find(57)) # 3
print(find(5923)) # 2
print(find(90)) # 1
print(find(7)) # 0
print(find(999)) # 4