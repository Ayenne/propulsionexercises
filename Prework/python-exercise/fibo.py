def fibonacci(num = input ("Fibonacci: ")):
    if num == 0:
        return 0
    elif num == "":
        return "Error: you must supply which Fibonacci number to compute."
    elif num == 1:
        return 1
    else:
        return fibonacci(num - 1) + fibonacci(num - 2)

print(fibonacci())
