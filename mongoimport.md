## Get the data
```curl
curl --location --request GET 'https://www.vattenfall.se/api/price/spot/pricearea/2022-04-01/2022-04-01/SN3' > our_data.json
```

## Import the data

```bash
mongoimport --collection=SN3 --jsonArray mongodb+srv://<username>:<password>@mongodb.net/energy_price

```