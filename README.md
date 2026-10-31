# Potluck

A react project that uses Supabase and creates a meals table.

## My Meals Table

| Components | What it shows | Where its values come from | What Supabase shows | Events that change it |
| --- | --- | --- | --- | --- |
| `Header` | my name | typed into JSX | --- | ---|
| `Footer` | copyright and current year | the year the page is opened | --- | --- |
| `Hero` | my hero Photo | heroPhoto, which calls imageURL | --- | --- |
| `MealCard` | meal name, guest name | typed into Supabase and user input | 'meal_name', 'guest_name', and 'serves' |  'Add' and 'Remove' event buttons |

## Built with

React, Supabase, Vite, Bun, and Pico CSS


## Where the data lives

The meals live in a table called `meals` in my Supabase project. The
page reads and writes it with the publishable key, which is built to be
public: Row Level Security policies let anyone read, add, and remove a
meal, and nothing else. The project's URL and key are in `.env.local`
on my laptop and in Netlify's environment variables, never in this
repo.







