# NBA_Ticker

# Project Overview

## Project Name
NBA Ticker

## Project Description

Give the latest stats of NBA players that you search.

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need
https://balldontlie.io/api/v1/players?search=lebron

{
    "data": [
        {
            "id": 237,
            "first_name": "LeBron",
            "height_feet": 6,
            "height_inches": 8,
            "last_name": "James",
            "position": "F",
            "team": {
                "id": 14,
                "abbreviation": "LAL",
                "city": "Los Angeles",
                "conference": "West",
                "division": "Pacific",
                "full_name": "Los Angeles Lakers",
                "name": "Lakers"
            },
            "weight_pounds": 250
        }
    ],
    "meta": {
        "total_pages": 1,
        "current_page": 1,
        "next_page": null,
        "per_page": 25,
        "total_count": 1
    }
}

## Wireframes

![image](https://media.git.generalassemb.ly/user/25137/files/7bd9f680-2e1e-11ea-91e7-c0a8a5e803fb)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render data on page 
-search for players and return results
-display stats for individual players

#### PostMVP 
- Allow user to choose favorites 
- Add second API
-add a live NBA scoreboard with up to date stats with most recent data.(scores from previous night)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Missed Class
|Jan 3rd| Approval/Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 5th| Styling(Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 6th| Pseudocode / actual code | Incomplete
|Jan 7th| Initial Clickable Model  | Incomplete
|Jan 8th| MVP/Clean-up | Incomplete
|Jan 9th| Present | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes
https://mail.google.com/mail/u/0?ui=2&ik=e9b3977323&attid=0.1&permmsgid=msg-a:r-616219139932929102&th=16f6cbf28f5ed602&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9jU78HQNJJj76BTG9pdAHb-tYTvi_Aq9dn-l-Bae6uHnCu7SK7iz8FgOTdUOqZ8aDQlQifBbNy1KgrTBOoq6O-7xDa5cFH3fiswGUqQPZkFEsGapIOqoP63lA&disp=emb&realattid=ii_k4yikn5n0
## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

## API Data Sample

Show us a snippet of JSON returned by your API so we know you can access it and get the info you need


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling overall page | H | 5 hrs | -- | -- |
| Adding Submit button and form adding the events and return data | H | 3hrs| -- | -- |
| Coding | H | 8hrs | -- | -- |`
| Working with API | H | 8hrs| 4hrs | -- | -- |
| adding and removing search subjects | M | 2hrs | -- | -- |
| stacking stats over one another | H | 5hrs | 
| Total | H | 6hrs| 5hrs | 5hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
