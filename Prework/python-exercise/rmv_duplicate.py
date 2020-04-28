def unique_array(numbers):
    return list(dict.fromkeys(numbers))


print(unique_array([0, 3, -2, 4, 3, 2]))
print(unique_array([10, 22, 10, 20, 11, 22]))