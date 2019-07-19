# Contact partners application

## How to:

First of all run:

```
npm i
```

Then add an Google maps API_KEY with access to the Geocoding API in `.env`:

```
API_KEY=YOUR_API_KEY_HERE
```

After that you can run the program using:
```
npm start
```

You can run tests using:
```
npm test
```

See coverage using:
```
npm run test-coverage
```

## Task list:

- [x] Read the file of partners using a provider function.
- [x] Find locations of the partners using the google geocoding API.
- [x] Safely store the API key.
- [x] Create a function that can validate that the points are not too far (75km) away.
- [x] Return a list of partners that are less than 75km away in a new JSON file.
- [x] Sort list by name.
- [ ] Get hired by Webbio. TODO: @Joeri & @Jordy

## Potential alternative solution(s):

Creating a circle 75km around the office and using geospacial methods to calculate if the locations are within the circular shape.
