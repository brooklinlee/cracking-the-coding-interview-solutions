# Arrays and Strings

### Hash Tables

Hash tables - AKA Hash Maps - are data structures used for efficient data retrievval. 

Each piece of data is associated with a key, and you can use that key to quickly look up the associated value.

Hash tables have great time complexity for common operations generally - O(1) for insertion, deletion, and retrieval operations

Generally very useful tool for solving coding questions. 

#### Notes from [Data Structures: Hash Tables by HackerRank](https://youtu.be/shs0KM3wKv8?si=qGsP-3Tp6qcjV2Uu) on YouTube

At a high level, hash tables are a key => value lookup 
Given a key, associate a value with it for very very quick lookups

``` javascript
int hashCode(Strings) {
  // some computation
}
```

A string is often  used as the key, but it could be anything

A hash function takes a string, converts it into some sort of integer, and then remaps that integer into an index

string => integer/hash code => index

hash code is not actually the index, you map from the key to the hash code to the index.

A collision is when two things could have the same hash code

#### Notes from [Learn Hash Tables in 13 minutes by Bro Code](https://youtu.be/FsfRsGFHuv4?si=Ce9IzKH-EmlGnERo)

Hashtable - collection of key/value pairs
Entry - what each key/value pair is known as

So how do you know at which index to put a piece of information? 

`key.hashCode() % capacity`

What happens when you have a collision? (A collision is when multiple entries are at the same hashtable index)

Each index is also known as a bucket. 