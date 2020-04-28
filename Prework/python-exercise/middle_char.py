def get_middle_character(args):
    if (len(args) % 2 == 0):
        return [args[(len(args) / 2) - 1], args[(len(args) / 2)]]
    else:
        return args[(len(args) / 2)]


print(get_middle_character("Propulsion"))
