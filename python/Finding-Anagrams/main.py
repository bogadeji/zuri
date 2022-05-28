# Check if two words are anagrams 
# Example:
# find_anagrams("hello", "check") --> False
# find_anagrams("below", "elbow") --> True


def find_anagram(word, anagram):
    # [assignment] Add your code here
    if len(word) == len(anagram):
        word_sorted = sorted(word)
        anagram_sorted = sorted(anagram)
        if word_sorted == anagram_sorted:
            return True
    
    return False

    
print(find_anagram("below", "elbow"))

