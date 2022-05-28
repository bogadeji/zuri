# Read text from a file, and count the occurence of words in that text
# Example:
# count_words("The cake is done. It is a big cake!") 
# --> {"cake":2, "big":1, "is":2, "the":1, "a":1, "it":1}

def read_file_content(filename):
    # [assignment] Add your code here 
    with open(filename) as f:
        text = f.read()
        print(text)
        return text


def count_words():
    text = read_file_content("./story.txt")
    # [assignment] Add your code here

    word_array = text.split()
    word_object = {}
    for word in word_array:
        if word in word_object:
            word_object[word] += 1
        else :
            word_object[word] = 1
    print(word_object)
    return word_object
    # return {"as": 10, "would": 20}

count_words()