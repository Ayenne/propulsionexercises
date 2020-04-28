import math
def sort_it(theArray):
    odd = []
    even = []
    for num in theArray:
        if (math.floor(num) % 2 == 0):
            even.append(num)
        else:
            odd.append(num)
    odd.sort()
    even.sort(reverse = True)
    result = odd + even
    return result


print(sort_it([1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(sort_it([26.66, 24.01, 52.00, 2.10, 44.15, 1.02, 11.15]))