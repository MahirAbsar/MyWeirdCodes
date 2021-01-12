sum_str = list(map(int,input().split("+")))

sum_str.sort()
result = ""
for i in range(0,len(sum_str)):
    result = result+str(sum_str[i])
    if(i!=len(sum_str)-1):
        result+="+"

print(result)
