# Lost in Prisma

Hi there, visitor! :wave:

Lost in Prisma is a very much Work In Progress (the name of the project included), created by me and intended to be (eventually) used by me.

Since this is an on-going side project, I could not wait for it to be complete before making it public, as, well, it may never be. However, please feel free to browse around and see what I have done so far.

## Current status of the project (and name dropping technologies)

The first version of the backend is somewhat complete.
The backend consists of a **NestJS server** and a **MongoDB database**. The backend can be run in **Docker**.

The repository also has a minimalistic **CI pipeline** running in **GitHub Actions**: at every push or pull request, **Prettier** is run for all code files and **Jest** unit tests for backend.

A **NextJS frontend** is currently in progress.

## Purpose of this project

Once complete, the project will provide a web UI for saving user's own recipes, including their ingredients and the ingredient categories - meaning the aisles and sections in the grocery store they are located in.

The ingredients and their locations and the locations' ordering can of course be customized, so that the ordering of the categories matches the user's favourite store.

The basic use of the application would be as follows:

1. The user adds any new recipes in the UI (optional step)
2. The user adds recipes they want to cook to their shopping list
3. The shopping list shows all the necessary ingredients for the recipes the user is going to make, in the correct order of the categories in the store. This way the user can just absent-mindedly walk thgourh the grocery store, gathering the necessary ingredients in order.

## Motivation

The motivation for this project includes:

- Pure hatred towards grocery shopping and continuously deciding what to cook
- My cheap nature, aka the dislike towards using commercial tools such as a delivery for my shopping :money_with_wings:
- The combination of the two above, which means that I need an efficient way to browse through my recipes, add them to my shopping list with just one click, and then browse through the store quickly feeling mildly content

On the less nihilistic side of things, this project is also motivated by

- The need for a safe space to test out any new technologies :hammer:
- A way to showcase at least a subset of my skills publicly :sparkles:
