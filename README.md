# Do you know what your containers are made of?

Containers are a great way to run software; you can think about the container as a black box that provides you a service and get on with your life of writing our own business critical software.

Then one day you'll do a review with professional security people, and they'll be like "hey, these docker containers; how much do you trust redis:latest?" and then it's time to embark on a journey of discovery until you get back to Ken Thompson's "Reflections on Trusting Trust" paper from 1984 and throw up your hands ¯\_(ツ)_/¯

We'll talk about building up a system to have confidence in the building and deploying of containers; from pulling public containers to having your own pipeline, and the benefits that brings.

----

## Stage 4

Limes as a service, in the cloud

### Last time on cloud limes

In Stage 3, we put our Node app into a Docker container, so we could nicely run `docker-compose up` to bring up our limes.

### Let's upload that fully to the cloud zone

Which is all great fun, but so far we've been entirely working on my local machine.

Let's get into some continuous integration.

### Please welcome CircleCI

I quite like [CircleCI](https://circleci.com/) for creating CI pipelines;

Because everything is defined in code, and I can `git push` my way to a new and improved pipeline.

Several different providers offer this service; this is just me using tools I'm familiar with for this demonstration.

Ultimately any pipeline we create will be wrapping around `docker` commands.

### Let's use quay.io

When you build docker containers, and want to share them with the world, a docker registry is where you want to `docker push` to.

I recommend [Quay.io](https://quay.io) for this, because they incorporate [Clair](https://github.com/coreos/clair) for vulnerability scanning, so you don't have to set that up yourself.

### What we have now

One Christmas tree of me pushing commits later (see the CI History at https://circleci.com/gh/mossnz/workflows/purplecon-docker/tree/stage4)

There's a Docker Image pushed up into quay.io 

And a vulnerability scanning report of 

https://quay.io/repository/mossnz/purplecon-limes/manifest/sha256:86f73df6d48ffa61b957bff133c3faafc3e24b250e3dc681f1e56e0c26091e35?tab=vulnerabilities

Which contains quite a few issues, because our image is straight up using `node:8` as a base. 

Next time on cloud limes; let's look at how the CI Pipeline helps us to move forwards.