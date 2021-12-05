It's an elementary app with a hash table storing a user as a key and the last 
time the user requested a page as a value. If an abusive behaviour is identified 
meaning the user keeps sending the same request in less than a second the server 
returns the 429 status.

In real projects a hash table might be substituted with Redis. Although the 
strategies to set rate limits might be implemented far more complex than in 
the example.