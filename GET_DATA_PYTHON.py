import http.client
import pymongo
import json
import datetime

conn = http.client.HTTPSConnection("www.vattenfall.se")
payload = ''
conn.request("GET", "/api/price/spot/pricearea/2022-04-01/2022-04-01/SN3", payload)
res = conn.getresponse()
data = res.read()

ourData = json.loads(data.decode("utf-8"))

for entry in ourData:
    entry['TimeStamp'] = datetime.datetime.strptime(entry['TimeStamp'],'%Y-%m-%dT%H:%M:%S')
    print(entry)

client = pymongo.MongoClient("mongodb+srv://<username>:<password>@mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.energy_price
db.SN3.insert_many(ourData)