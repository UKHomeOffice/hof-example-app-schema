# hof-example-app-schema
A simple container to run migrations for the hof example app.

Currently a work in progress.

## Local Setup
The migrations folder is used by knex to setup a local DB for testing the hof example app.

Run the following commands to setup a test DB:
```
brew install postgres
brew services start postgresql
psql postgres
CREATE ROLE knex WITH LOGIN PASSWORD 'knex';
ALTER ROLE knex WITH SUPERUSER;
CREATE DATABASE hof_example_app_form;
\q
```
If you download Postico for Mac (https://eggerapps.at/postico/), you can then inspect your postgres DB for example and look at the test entries inserted into the test table 'Forms'.

### Adding the latest migration

Run 

```
knex migrate:latest
```

To update the package.json version, tag the repo with the same version, i.e. `v1.2.0`, create a release note and publish a new npm module:
```
npm publish
```