# RomeoJuliet - Podium Code Challenge
### Built by Mark Perkins

Please clone application and the following environment file to the project directory with the file type being .env.
```
REACT_APP_BASE_URL=https://shakespeare.podium.com
REACT_APP_API_KEY=H3TM28wjL8R4#HTnqk?c

```
## Notes

### LOGIN:

The login screen is just to demonstrate a natural user experience.
No credentials are required at this time to log in. 
Please click the button to proceed.

### REVIEW & PLAY DATA:

To enhance and add further interest and presentation to the review data, I added a randomized play_id that references a list of play data sourced from [Open Source Shakespeare](http://www.opensourceshakespeare.org/).

### STANDARDS ROUTE:
The /home/standards route links to a google spreadsheet that I have sourced as reference material to building enterprise web applications. It is a work in progress still. Eventually this will act as a reporting tool and reminder for application deficiencies. Feel free to take a look.


## Recognitions

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- This project uses Material-UI and many other 3rd party libraries and generally follows these libraries development paradigms.

- This project uses some utility functions that were found or inspired by solutions online. All or most are recognized with code comments.



## Available Scripts

In the project directory, you can run:

### `yarn install`

This will install the required node modules.


### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
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
