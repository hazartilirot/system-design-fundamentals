### Publisher-Subscriber Pattern in System Design. 

Each publisher and subscriber is responsible for a specific TOPIC_ID which is 
passed as an environment variable. Once it subscribed it listen to the topic.
If there is a message the subscriber shows it straightaway.

Prior to running a subscriber or publisher the following command must be 
executed `npm install` in a console. After finishing the process run the 
server `npm run server`

Split a new window with PowerShell into multiple smaller windows.

As an example:
Run two subscribers in separate windows which would be following stock prices
`($env:TOPIC_ID="stock_prices") ; node subscriber.mjs`
and in the third window initiate another subscriber following the news alerts
`($env:TOPIC_ID="news_alerts") ; node subscriber.mjs`

There are two different publisher that have to be run. One is responsible 
for stock prices topic and the other news alerts
`1..1000 |ForEach-Object { Start-Sleep 1; "New Price" } | node publisher.mjs 
($env:NAME="STOCK_BROKER") && ($env:TOPIC_ID="stock_prices")`

`1..1000 |ForEach-Object { Start-Sleep 1; "Breaking News" } | node publisher.
mjs ($env:NAME="NEWS_STATION") && ($env:TOPIC_ID="news_alerts")`