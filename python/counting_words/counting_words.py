#Prompt user for word
user_word = input("Enter a text: ")

#Calculate word length
word_length = len(user_word.split())

#Print word length
if (word_length > 1 or word_length < 1) :
    print("That text has " +str(word_length) + " words")
else:
    print("That text has " +str(word_length) + " word")
