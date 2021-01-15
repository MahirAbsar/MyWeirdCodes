inputs = list(map(int,input().split()))

for i in range(1,inputs[2]+1):
    cost = inputs[0] * i
    left = inputs[1] - cost
    inputs[1] = left

if left>0:
    left = 0
    print(left)
else:
    print(abs(left))
