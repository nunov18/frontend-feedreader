/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TEST: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('checks if the feeds has a valid URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var url = allFeeds[i].url;
                expect(url).toBeTruthy();
            }
        });


        /* TEST: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('checks if the feeds has a valid Name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var name = allFeeds[i].name;
                expect(name).toBeTruthy();
            }
        });
    });


    /* TEST: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TEST: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden initially', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TEST: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('changes visibility when menu icon is clicked', function() {
            function hidden() {
                return $('body').hasClass('menu-hidden');
            }

            $('.menu-icon-link').click();
            expect(hidden()).not.toBe(true);
            $('.menu-icon-link').click();
            expect(hidden()).toBe(true);

        });

    });


    /* TEST: Write a new test suite named "Initial Entries" */

    /* TEST: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('checks if at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });



    /* TEST: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TEST: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var nextFeed;

        //
        beforeEach(function(done) {
            loadFeed(1, function() {
                nextFeed = $('.feed').html();
                done();
            });
        });

        it('has content from next feed changing upon loaded', function(done) {
            loadFeed(2, function() {
                expect($('.feed').html()).not.toBe(nextFeed);
                done();
            });
        });
    });


}());
