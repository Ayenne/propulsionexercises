def factorial(n):
    result = 1
    print "0! = 1"
    for i in range(1, n + 1):
        result = result * i
        print ("%s! = %s" % (i, result))

factorial(5)

