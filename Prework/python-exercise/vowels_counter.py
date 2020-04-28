
def count_of_vowels(args):
    vowels = ['a','e','i','o','u','y']
    result = 0
    args = args.lower()
    for letter in args:
        for vowel in vowels:
            if (letter == vowel):
                result += 1
    return result

print(count_of_vowels("Propulsion Academy"))