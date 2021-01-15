inputs = list(map(int,input().split()))
num = inputs[0]
i =1
while(i<=inputs[1]):
    newNum = num%10
    if(newNum!=0):
        num-=1
    else:
        num=num/10
    i+=1

print(int (num))
