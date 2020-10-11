# SECTION
# Removing duplicate characters from a string

# ORDER DOESN'T MATTER
foo = 'iieeiddkk'
result = "".join(set(foo))
print(result)

# ORDER DOES MATTER
foobar = 'hello'
result = "".join(dict.fromkeys(foobar))
print(result)