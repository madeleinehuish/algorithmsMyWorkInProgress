#steps
def steps(n):
    for i in range(1, n + 1):
        for j in range(i):
            print('*', end = " ")
        print('')

#pyramid
def pyramid(n):
    for i in range(n, 0, -1):
        for j in range(n - i):
            print(' ', end = " ")
        for j in range(2 * i - 1):
            print('*', end = " ")
        print('')

print('')
steps(10)
print('')
pyramid(10)
