def get_size_of_longest_sequence_of_zeros(number):
    number = bin(number)
    result = 0
    counter = 0
    for i in range(2,len(number)):
        if (number[i] == '0'):
            counter += 1
        else:
            if counter > result:
                result = counter
            counter = 0
    if counter > result:
        result = counter
    return result


print(get_size_of_longest_sequence_of_zeros(7)) # binary representation: 111 - 0
print(get_size_of_longest_sequence_of_zeros(8)) # binary representation: 1000 - 3
print(get_size_of_longest_sequence_of_zeros(457)) # binary representation: 111001001 - longest 2
print(get_size_of_longest_sequence_of_zeros(40)) # binary representation: 101000 - longest 3
print(get_size_of_longest_sequence_of_zeros(12546)) # binary representation: 11000100000010 - longest 6