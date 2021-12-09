##Storage

There is a short example demonstrating two type of storage. The first one is 
persistent (a file representing a database) and another one is memory. RAM 
might be used by a database like Redis. It definitely surpasses in r/w speed on 
the other hand if there is a blackout all data would be eliminated all at once.
We may keep insensitive data like session Tokens. Another type of storage is 
a traditional database which is unarguably slower than Redis, but it can be 
used as a data accumulator for storing the data in a long term.