countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
def makesentence(a,b,c,d,e,f):
    return a+","+ b +","+ c +","+ d +","+ e +", and"+ f +"are north European countries"

print(reduce(makesentence,countries))
countries = ['Estonia', 'Finland']
print(reduce(lambda a,b:a+","+b+","+"are north European countries",countries))