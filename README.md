# Do you know what your containers are made of?

Containers are a great way to run software; you can think about the container as a black box that provides you a service and get on with your life of writing our own business critical software.

Then one day you'll do a review with professional security people, and they'll be like "hey, these docker containers; how much do you trust redis:latest?" and then it's time to embark on a journey of discovery until you get back to Ken Thompson's "Reflections on Trusting Trust" paper from 1984 and throw up your hands ¯\_(ツ)_/¯

We'll talk about building up a system to have confidence in the building and deploying of containers; from pulling public containers to having your own pipeline, and the benefits that brings.

----

This repository is split into different branches that show working along the way;

### Stage 1

A technical investigation of a problem (counting limes), and if Redis would fulfill the purpose.

### Stage 2

Writing some Javascript to be a REST based service to count limes

### Stage 3

Putting the REST based service into containers, with Docker Compose.