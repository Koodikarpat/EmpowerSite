from datetime import date, timedelta
from random import random
import json

d1 = date(2016, 1, 1)
d2 = date(2016, 12, 31)

delta = d2 - d1
obj = {}
months = {}
month = {}
day = {}
index = 1
index2 = 1
for i in range(delta.days + 1):
    date = d1 + timedelta(days = i)
    if date.day == 1 and len(month) != 0:
        months[index] = month.copy()
        month = {}
        index += 1
        index2 = 1
    day["date"] = "{}".format(date)
    for i in range(24):
        day[i] = round((random()*9 +1),2)
    month[index2] = day.copy()
    index2 += 1

    print (date)
months[index] = month.copy()
with open('data.json', 'w') as outfile:
    json.dump(months, outfile)
