# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: (http://127.0.0.1:5501/)
- Live Site URL: (https://ini-s.github.io/Tip-calculator-app/)

## My process

I built the foundation with html from the top to bottom, styled each section accordingly, used media queries and then used javascript to add functionality to the app.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flexbox
- [Bootstrap](https://getbootstrap.com/) - CSS Framework

### What I learned

I learnt how to use "change" event , isNan(), toFixed() and  parseInt() in js.

```js
  custom.addEventListener('change', (e)=>{
        tipVal = e.target.value;
        console.log(tipVal);
})

  isNaN(tipAmount)? tipAmount=0: tipAmount;

  tipAmountPrice.innerHTML = tipAmount.toFixed(2);

   parseInt(tipAmount);
```
### Useful resources

- [Mdn docs](https://developer.mozilla.org/en-US/) 
- [W3Schools](https://www.w3schools.com/)

## Author

- Website - [https://github.com/ini-s])
- Frontend Mentor - [@ini-s](https://www.frontendmentor.io/profile/ini-s)
- Twitter - [@kiinghazel](https://www.twitter.com/yourusername)

