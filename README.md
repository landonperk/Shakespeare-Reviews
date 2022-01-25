# Shakespeare Reviews - Podium Code Challenge

## Built by Landon Perkins

Along with displaying the reviews, I also thought it would be interesting if the plays that the reviews were about were also represented in some way on the website as well.

There is a JSON file stored at ```src/data/playData.json``` that holds the titles and images that are used to represent the plays.

There isn't any condition the reviews need meet for them to be assigned to a play. It's completely random, and has nothing to do with the text in the review.

I had a great time building this! I hope you enjoy!

## Other features

### Sort Reviews
You are able to sort through the reviews by "Highest Rated", "Lowest Rated", "Newest" and "Oldest".

### Average Play Rating
After all the reviews have been assigned to a play an average rating is calculated and displayed as a star rating.

### Show Play Reviews
You are able to see the reviews of any Shakespeare play by clicking the "Show Reviews" buttons.

---------------------------------------------------------------------------------------------------------------
## Available Scripts

In the project directory, you can run:

### `npm install`
This will install the required node modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



---------------------------------------------------------------------------------------------------------------
# Front End Coding Assessment Instructions

It’s worth mentioning that we care about testing our code here at Podium, and it would be beneficial for you to demonstrate how you test in the challenge as well.

Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn’t have the chops to finish out the UI. That’s where you come in, your task is to build a client side app for Shakespeare’s API. The **design** of the application is up to you.

### API Documentation

**Authentication:**

- Authentication is done by passing your API token using the **x-api-key** header. The value of this header will contain nothing more than just the token value.
- Your authentication token is: ```H3TM28wjL8R4#HTnqk?c```

**Endpoints:**

Two endpoints exist for this API.

1. **Reviews Index**

    - **GET** [https://shakespeare.podium.com/api/reviews](https://shakespeare.podium.com/api/reviews)
    - Response looks like this:
```
  [
    {
        "rating": 0.8,
        "publish_date": "2016-09-05T23:25:47.642350Z",
        "id": "9783221620868",
        "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "author": "Kaley Schiller"
    },
    {
        "rating": 3.2,
        "publish_date": "2016-09-04T23:25:47.642388Z",
        "id": "9793364045824",
        "body": "Can one desire too much of a good thing?.",
        "author": "Fay Lemke"
    },
    {
        "rating": 4.1,
        "publish_date": "2016-09-03T23:25:47.642545Z",
        "id": "9784620626604",
        "body": "How bitter a thing it is to look into happiness through another man's eyes!",
        "author": "Tatyana Olson"
    }
]
```


2. **Reviews Show**

    - **GET** [https://shakespeare.podium.com/api/reviews/:id](https://shakespeare.podium.com/api/reviews/:id)
    - Response looks like this:
```
{
    "rating": 0.8,
    "publish_date": "2016-09-05T23:25:47.642350Z",
    "id": "9783221620868",
    "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "Kaley Schiller"
}
```

