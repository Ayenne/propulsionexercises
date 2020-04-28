def prime_number(n):
    result = []
    for num in range(0, n + 1):
        if num > 1:
            for i in range(2, num):
                if (num % i) == 0:
                    break
            else:
                result.append(num)
    return result

print(prime_number(23))