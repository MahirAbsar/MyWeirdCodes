word = input()
countLowerCase = 0
countUpperCase = 0
for i in word:
    if(i.islower()):
        countLowerCase+=1
    else:
        countUpperCase+=1
if countLowerCase> len(word)/2 or countLowerCase==countUpperCase:
    print(word.lower())
elif countUpperCase> len(word)/2:
    print(word.upper())
