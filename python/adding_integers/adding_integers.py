
#Checks if input is an integer

def input_check(num) :
    if num:
        try:
            int(num)
            it_is = True
        except ValueError:
            it_is = False
        return it_is
    else:
        return False

            
#Prompt user for first number
while True:
    first_number = input("Enter first number: ")
    if (input_check(first_number)):
        break
    else :
        print("You need to enter a valid integer")


#Prompt user for second number
while True:
    second_number = input("Enter second number: ")
    if input_check(second_number):
        break
    else :
        print("You need to enter a valid integer")

a = int(first_number)

b = int(second_number)

#Add integers
sum = a + b

#Print sum
print("" + str(a) + " + " + str(b) + " = " + str(sum))