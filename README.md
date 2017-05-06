# Project Overview

In this project we here given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite.

## How to run
* Clone the repository or Download the Zip file
* Open index.html in the browser
* You will find unit test results in the bottom of the application

## Unit Tests

### Test Suite - RSS Feeds

- are defined
- checks if the feeds has a valid URL
- checks if the feeds has a valid name

### Test Suite - The Menu

- is hidden initially
- changes visibility when menu icon is clicked

### Test Suite - Initial Entries

- checks if at least a single .entry element within the .feed container

### Test Suite - New Feed Selection

- has content from next feed changing upon loaded


## What will I learnt?

I learnt how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Why testing?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## Resources
* [Udacity Course](https://www.udacity.com/course/ud549)
* [Required Project Assets](http://github.com/udacity/frontend-nanodegree-feedreader)
* [Jasmine documentation](http://jasmine.github.io/)
* [Testing DOM Events Using jQuery and Jasmine 2.0](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)
