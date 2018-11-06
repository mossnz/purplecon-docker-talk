# Do you know what your containers are made of?

Containers are a great way to run software; you can think about the container as a black box that provides you a service and get on with your life of writing our own business critical software.

Then one day you'll do a review with professional security people, and they'll be like "hey, these docker containers; how much do you trust redis:latest?" and then it's time to embark on a journey of discovery until you get back to Ken Thompson's "Reflections on Trusting Trust" paper from 1984 and throw up your hands ¯\_(ツ)_/¯

We'll talk about building up a system to have confidence in the building and deploying of containers; from pulling public containers to having your own pipeline, and the benefits that brings.

----

## Stage 3

Limes as a service, in containers

### Last time on cloud limes

In Stage 2, we created a little Javascript server to interact with limes.

In order to run this, we needed to get a Docker container for `redis` going, then sort out running a Node app.

### Put a container on it

Let's containerise the Node app, and use Docker Compose to have it easily bought up and down next to the `redis` service.

### Ahoy there

I'm using [ahoy](https://github.com/ahoy-cli/ahoy) to easily run commands.

You may want to get this if you're trying to follow along at home, otherwise the commands are all in `.ahoy.yml` in reasonably readable formatting.

### What we have now

Now, to run the lime service, we need to first build the Node app into a container tagged `limes:local` and then run 

```docker-compose up -d```

to fully upload to the containerised lime zone. 