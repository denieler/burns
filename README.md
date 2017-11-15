# Count Burns
The Count Montgomery Burns. GraphQL Burns server for Bittrex terminal.

![Count Montgomery Burns](https://github.com/denieler/burns/raw/master/images/Charles_Montgomery_Burns.png)

Example graphQL query:
```
{
  getData(fromDate: "1510033200000", toDate: "1510033602390", currency: "BTC") {
    date
    open
    high
    low
    close
    volume
  }
}
```
