# Tab Room Makeover - Guilty Pleasure

![screenshot](https://mbzbqq.dm.files.1drv.com/y4mLiWcs-EE8Jj5tF6ScT-pmTc9JUSUUobq2H6MBWV7BTv3WoLcInGWJv5TAvyZfDucA0JCz_tpbhLqbwlkugc8A_8N9aCYiEX1-eh7FEf2OULWYuImSVEdChbC9Pj0tmf8l14sY7eXK_ZQgQHcyEjQ6CTczHs_Jox3XQztG6-_gpGYPVNTxqR6W9Ftv_knB_hbHcyGi5Ipelv-0rzqEltYwg?width=1602&height=900&cropmode=none)

#### _11/16/2018_

####  Keg tracking application for bars

#### By Hyewon Cho

## Description

A web application for bars to keep track of their kegs. If user clicks 'Employee' button, an admin page for employees will be displayed. Employee can sell, edit, and delete kegs. If user clicks 'Patron' button, user can buy kegs.

## Unforeseen issues and questions

* Some components had to be converted into class based component to use state.

## Difference in development process

* Difference in the way of communicating between parent component and child component.
  * Angular: Pass through Input and output
  * React: Props and refs

## Setup/Installation Requirements

* Clone this repository(https://github.com/hyewon92cho/tap-room-react.git).
* Download Node js from this [website](https://nodejs.org/en/download/)  and install it.
* Open Mac Terminal or Windows Command Prompt.
* Type "cd tap-room-react" and press enter to go to the solution directory.
* Type "npm install" to install dependencies.
* Type "npm run start" and press enter to run the local server.
* Open a web browser and go to http://localhost:8080/.

## Specifications

1. As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
2. As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
3. As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
4. As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
5. As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
6. As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
7. As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
8. As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

## Structure

![structure](https://mbzaqq.dm.files.1drv.com/y4mCm5WNGnyueqR8ISXhzlvm0eWM8SZLueGEEf-W4RV84cYM98kI7P6GKmFjs4bNoK31mgcYKnIdLOnOwGtFCc2ur9HB_o6v6Lp5vAGExK9Df3d3DvUsEUs7Jk8AZsbe2SNuxp3ejtgjslBTFhZmx1hBvV6dUd05MdLG8CvHwvvIHILqIx3GZyUmAHcKgHT7x52EEYf6ztXxIuc-oYIdPrHRA?width=960&height=720&cropmode=none)

## Technologies Used

* HTML/CSS/Bootstrap
* JavaScript/jQuery
* Node.js
* React
* Webpack
* Babel
* ESLint
* Animate.css
* Anime.js

## Support and contact details

Hyewon Cho https://github.com/hyewon92cho

## License

MIT License

Copyright (c) 2018 **_Hyewon Cho_**