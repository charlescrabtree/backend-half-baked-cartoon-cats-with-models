# Cartoon Cats

## Demo

[Cartoon Cats with Models](https://alchemy-cartoon-cats-models.herokuapp.com/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-half-baked-cartoon-cats-with-models) to get started.

### Learning Objectives

- Connect an Express app to a Postgres database and return data from that database as JSON
- Move controller logic involving data into a Model
- Create a Model class to manage database operations using Javascript
- Deploy a Postgres powered Express app

### Description

We're moving beyond hard-coded data! You're going to deploy your first app powered by a Postgres database. This is the same data as you used in the previous Cartoon Cats deliverable, except now you will be retrieving that data from your database.

You have been given SQL to seed your database. Seed your database using `npm run setup-db`. You also need to remember to seed your data on production.

You should refactor the cats controller to use models and your database instead of hard-coded data.

### Acceptance Criteria

- A user should be able to visit `/cats` and see a list of cats with their `id` and `name` (note: do NOT return every attribute of cats - only the id and name)
- A user should be able to visit `/cats/:id` and see all the detailed information about the cat with the corresponding `id`

### Rubric

| Task                                                                            | Points |
| ------------------------------------------------------------------------------- | ------ |
| Deployed on fly.io with Supabase postgres DB                                    | 1      |
| All tests passing                                                               | 1      |
| `CartoonCat` model has `getById` function that returns a Cat with a specific id | 2      |
| `CartoonCat` model has `getAll` function that returns all cats                  | 2      |
| Controller uses the `CartoonCat` model to retrieve data                         | 2      |
| `/cats/` route returns list of cats' names and ids                              | 1      |
| `/cats/:id` route returns detailed cat information                              | 1      |
