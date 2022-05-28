def welcome():
    print('''
        Hi there!!!! What calculations would you like to run today?
    ''')

def calculate():
    operation = input('''
    Please type in the math operation you would like to complete:
    + for addition
    - for subtraction
    * for multiplication
    / for division
    mod for modulo
    ''')

    #Define all operations
    def addition(a, b):
        return a + b
    def subtraction(a, b):
        return a - b
    def multiplication(a, b):
        return a * b
    def division(a, b):
        return a / b
    def modulo(a, b):
        return a % b

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

    #Convert inputs to integers
    first_number = int(first_number)

    second_number = int(second_number)


    #Check operations, if valid run operation and return answer, else, run again
    if operation == '+':
        operation_result = addition(first_number, second_number)
        print( str(first_number) + " + " + str(second_number) + " = " + str(operation_result))
    elif operation == '-':
        operation_result = subtraction(first_number, second_number)
        print( str(first_number) + " - " + str(second_number) + " = " + str(operation_result))
    elif operation == '*':
        operation_result = multiplication(first_number, second_number)
        print( str(first_number) + " X " + str(second_number) + " = " + str(operation_result))
    elif operation == '/':
        operation_result = division(first_number, second_number)
        print( str(first_number) + " / " + str(second_number) + " = " + str(operation_result))
    elif operation == 'mod':
        operation_result = modulo(first_number, second_number)
        print( str(first_number) + " mod " + str(second_number) + " = " + str(operation_result))
    else:
        print("Please pick from the list of specified operations")

    run_calculator_again()


def run_calculator_again():
    run_again = input('''
        Would you like to run another calculation?
        Enter Y for YES and N for NO
    ''')

    if run_again.upper() == 'Y':
        calculate()
    elif run_again.upper() == 'N':
        print('''
            I hate to see you go...
            Hope to see you sometime sooon...
            Toodles!!!
        ''')
    else:
        run_calculator_again()


welcome()
calculate()
