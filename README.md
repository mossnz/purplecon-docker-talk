# Do you know what your containers are made of?

Containers are a great way to run software; you can think about the container as a black box that provides you a service and get on with your life of writing our own business critical software.

Then one day you'll do a review with professional security people, and they'll be like "hey, these docker containers; how much do you trust redis:latest?" and then it's time to embark on a journey of discovery until you get back to Ken Thompson's "Reflections on Trusting Trust" paper from 1984 and throw up your hands ¯\_(ツ)_/¯

We'll talk about building up a system to have confidence in the building and deploying of containers; from pulling public containers to having your own pipeline, and the benefits that brings.

----

## Stage 1

Technical exploration of using Docker.

### Problem we're trying to solve

On the purplecon.nz website, you can have limes.

These limes are stored locally as a cookie ... lime cookies sound weird, but anyway ... so it's really easy to get

```you have 1337 limes. definitely hax but okay```

What if instead of locally, we uploaded the limes to the cloud?

### Okay, so it's a toy problem but sure

After some incredibly brief research, I found that `redis` has a neast `incr` command, so we can go to `try.redis.io` and type `incr limes` until we have as many cloud limes as we want, and `get limes` to found out how many limes that is.

### Let's put those limes in a container

So after finding that `redis` conveniently fits our entirely made up problem, let's see how we can then fit the talk title by using containers.

`https://hub.docker.com/_/redis/` says I can run redis as a container by typing 

```$ docker run --name some-redis -d redis:latest```

into friend computer ... which starts a thing that does nothing immediately obviously useful.

Further down the page, there's 

```$ docker run -it --link some-redis:redis --rm redis redis-cli -h redis -p 6379```

Which brings up a redis cli and now we're cooking with limes.

```
redis:6379> incr limes
(integer) 1
redis:6379> incr limes
(integer) 2
redis:6379> 
```

### What we've done

We've successfully proved that we can use `redis` in `docker` to count limes.

### What we haven't done yet

Friend computer just downloaded and executed code off the internet. It was fast and easy, but can we trust that?

