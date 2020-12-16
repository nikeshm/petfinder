# Petfinder

This web application will allow you to see all of the adoptable pets in a given zipcode. The web app is currently served by an Express server that contains sample data about dogs, cats, and rabbits in Santa Clara zipcodes.

## How to Run

After downloading the project files and ensuring you have NodeJS and `npm` installed, run the following terminal commands using `npm`.

```
# Install dependencies
npm install

# Serve on localhost:3000
npm run start
```

The server is only hosting the data for 24 pets; not all query combinations will have animals associated with them. Here are a few queries that will show results:

* **Location**: 95050, **Age**: 5 , **Type**: dog, **Breed**: bulldog
* **Location**: 95053, **Age**: 1, **Type**: cat, **Breed**: shorthair
* **Location**: 95051, **Age**: 5, **Type**: rabbit, **Breed:** californian
