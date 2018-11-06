# Do you know what your containers are made of?

Containers are a great way to run software; you can think about the container as a black box that provides you a service and get on with your life of writing our own business critical software.

Then one day you'll do a review with professional security people, and they'll be like "hey, these docker containers; how much do you trust redis:latest?" and then it's time to embark on a journey of discovery until you get back to Ken Thompson's "Reflections on Trusting Trust" paper from 1984 and throw up your hands ¯\_(ツ)_/¯

We'll talk about building up a system to have confidence in the building and deploying of containers; from pulling public containers to having your own pipeline, and the benefits that brings.

----

## Stage 2

Limes as a service

### Last time on cloud limes

In Stage 1, we ran `redis` in a docker container, connected to it with `redis-ci` and proved we could increment limes. 

### What's next

What I really want though, is a cloud lime service. I want to count limes without having to know about how `redis` works; it's just a service in a box after all.

### Let's reach for friend Javascript

And develop a small service that sits next to `redis` and lets us count limes. 

Let's work on a `REST` service because `PUT` limes in the cloud and then `GET` to know how many limes there are.

### A little help from Express

Now we have a simple service

```
GET /limes
{limes: "0"}
```
```
PUT /limes
{limes: 1}
```
```
DELETE /limes
{limes: 0}
```
```
POST /limes
Cannot POST /limes/
```

### Getting it to work

With this, we've had to change our `docker run` slightly, so the locally hosted server gets to talk to redis;

```docker run -p 6379:6379 -d redis:latest```

### What we've done

Now we can interact with limes via a REST service.

Next step, put the REST service in a container, next to the `redis` container. 



