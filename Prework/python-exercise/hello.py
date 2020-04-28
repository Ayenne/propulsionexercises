def hello():
    s = raw_input("Enter your name: ")
    if (s == ""):
        return "Hello, Unknown!"
    else:
        return "Hello, " + s + "!"


print hello()

