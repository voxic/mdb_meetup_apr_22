# MongoDB Meetup
### April 2022

## Introduction

Nobody has missed the increasing energy prices. With the help of data we can plan our consumption and save money.

This guide will go over how you can fetch energy price data and store that in MongoDB Atlas Cluster, it will guide you through the process of creating live charts to visualize and gain insights from that data using MongoDB Atlas Charts.

### What we will build
![Screenshot](snap.png)
During this session we will create a dashboard using MongoDB Atlas Charts showing energy price over time and insights around the price.   
We will also use the Atlas Chart embedding option to embed our chart in a web-application.

## Prerequisites

* MongoDB Atlas cluster
    *  Free [Sign up](https://www.mongodb.com/cloud/atlas/register2)

* Data
    * Data will be fetched using the following URL:  
    `https://www.vattenfall.se/api/price/spot/pricearea/<yyyy-mm-dd>/<yyyy-mm-dd>/SN3`  
    This will fetch data between dates and price area SN3.


## Steps

### 1. Get the data
- Using [Python](GET_DATA_PYTHON.py)
- Using [Nodejs](GET_DATA_NODEJS.js)

### 2. Import data to MongoDB Atlas
- Using [mongoimport](mongoimport.md)
- Using [Compass](importdata_compass.md)
- Using [Python](GET_DATA_PYTHON.py)
- Using [Nodejs](GET_DATA_NODEJS.js)


### 3. Explore the data
- Using Compass
- Using Atlas

### 4. MongoDB Atlas Charts
- Data sources
- Data sources pipeline
- Dashboard/Charts   

["Getting started with Charts"](https://www.mongodb.com/docs/charts/)

### 5. Putting it all together
- Charts EmbedSDK

["Embed your charts"](https://www.mongodb.com/docs/charts/embedding-charts/)