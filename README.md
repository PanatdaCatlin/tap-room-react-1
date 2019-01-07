# Tab Room Makeover - Guilty Pleasure

![screenshot](https://olzwqq.dm.files.1drv.com/y4mNFOhdoTzPsBdV3e9PQnEVEpSr4YNHnXdvg2oFZHBRDbDt5qtfk8fe91_a5iV4_uRbz1-GfOhjx0Cr_CJXEUdhg-jLgUD_5DZHCsaTt5Dy9czyF0ydhqlwKYgpe_XGJXiAFABVdiwV_nsDb2KtXl3EH_aXbv5G7BzzxzVSci_5GyyBb6R6o_4CFF6RuK2FLxp_H2JKA0ATAgkrXAHvN7VUg?width=5156&height=2924&cropmode=none)

![screenshot](https://olzxqq.dm.files.1drv.com/y4mdDCjRltOgvvYOMdXIMCF28aOXK6Sbe9t-XGz8Eh5_shc_SYltbOzS576CtUvlZBYxC2cnBLoyOTr0ixGtB6XzgqjpyZ_ZiwAd5IdfpsRpcB2E2U2JGOCP2MIVL_LRfIhRIUB-DJfpzvoFW1UdUFl1oL_Wh2w1g16hvz7j9-gLdp3Orel8x9yCeA3TK2B9TlUb1wIVDs7tc5IiLfotD-9Eg?width=5156&height=2924&cropmode=none)

#### _11/16/2018_

####  Keg tracking application for bars

#### By Hyewon Cho

## Description

A web application for bars to keep track of their kegs. If user clicks 'Employee' button, an admin page for employees will be displayed. Employee can sell, edit, and delete kegs. If user clicks 'Patron' button, user can buy kegs.

## Live demo
[https://tap-room-react.firebaseapp.com/](https://tap-room-react.firebaseapp.com/)

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

![structure](https://mbzaqq.dm.files.1drv.com/y4muSbca4PgnODou4ARoxEHWoiwvRxUlAdlcheYSWTXE2Gv3yci20JzrfdUxYyiNz4dx0WLpR-CJD5l1IrWW2ohwuUprasjSJUY4Fon2BHynOOcH6uhhZQ-dFTmHqzj_ixHtpi9_CK30XDwrRhXvIauGpUocNcIq6ZeV1tpgU8eJmuv2LxgZZOPEgDPlqLV6_XKl9cNHv96ZMhJ0WEoiDFnDw?width=960&height=720&cropmode=none)

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