
import re


def is_valid_password():
    password = raw_input("Enter your password: ")
    if (len(password) >= 10 and re.match("^[A-Za-z0-9]*$", password) and re.search(r"[A-Z]+", password)):
        return "Valid password"
    else:
        return "Invalid password"


print is_valid_password()
