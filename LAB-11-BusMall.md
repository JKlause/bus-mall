# Assignment Overview: Lab 11

## BusMall

### Backstory

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seat back pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

But in this case, BusMall catalogs are placed on transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

### Problem Domain

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you'll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview (very cool!), plus, there are lots of online tools.

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

## Requirements/Guidance

**This is an individual assignment today, but you are free (heck, even encouraged) to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.**

1. You'll need data that describes the products (you can bootstrap into store). Include: 
    * an `id` that uniquely identifies each product
    * an `image` property that is the path to image to display
    * a `name` property that is the product name to display
1. The thing you want to build today will select three random photos from the 
available product images and display them side-by-side-by-side in the browser window.
1. In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes. Do this for both:
    * Individual session
    * STRETCH: All time across all products
1. Keep in mind that the Individual session should "restart" on each page load
1. Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before (you may want to layer in this second requirement after the first is working).
1. After 25 selections have been made, hide or disable the images (to prevent additional voting) and display a list of the products with times viewed and votes received. You do not need to display products that were not viewed.
1. STRETCH: Create a separate page that shows the all-time results.

## Planning

**Note: There's a lot of moving pieces in this assignment, and more details to attend to than it might seem at first. Build methodically, in small pieces, that you test and check regularly. ACP regularly on at least one non-master branch. Try sketching out a plan on paper and breaking down the problem conceptually before getting into the code.**

Spend 30-45 minutes planning your project today.

Start by reading this document in it's entirety. Especially the "requirements/guidance" section.

### User Stories

Part of your assignment today is to write your own user stories. Be sure to consider the multiple roles involved: the marketing research team and the focus group participant who will be using the application. Try to write 1-3 user stories for each role. DO THIS STEP FIRST in a file called `user-stories.md`.

As a reminder, user stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

### Technical Plan

Also draft a technical plan for the project (a detailed to-do list of things to make, step by step and tested at each stage) before getting into the code. That time spent in thought and planning will make the code flow a lot faster. Give yourself a series of little problems to solve (rather an a ginormous thing that you just wade through and poke at).

1. What pages will need to be created?
1. What data will need to be saved, updated, and when?
1. What data will need to be retrieved and when?
1. What rules exists and what algorithms (flow charts) need to be defined?

### Result

The commit logs in your repo will have a first couple of commits for the scaffolding process, but next you should have a 'user stories' and 'plan' commit that is in place before any code is written.

Set 'em up, and knock 'em down.

Plan your work, and work your plan.

## Setup For This Lab

**Note: There's a lot of moving pieces in this assignment, and more details to attend to than it might seem at first. Build methodically, in small pieces, that you test and check regularly. ACP regularly on at least one non-master branch. Try sketching out a plan on paper and breaking down the problem conceptually before getting into the code.**

Do today's work on a branch! (not `master`)

* Create a new repo for this weekly project called `bus-mall`
* Clone locally and setup with usually config/scaffolding
* You can include your base `store` object with `get` and `save`, _if you are going
to persist data_.
* Copy into the repo:
    * This `LAB-11-BusMall.md`, and
    * The assets from the `assets/` directory and place them in an `/assets/products` directory
* Write your user stories as described above and place them in a file called `user-stories.md` in your repo. Utilize good Markdown style to make this document look nice.
* Write down your technical plan in a file called `plan.md`.


## Stretch Goals For This Lab

* Handle the display and voting for an arbitrary number of images
* Using a variable, declare in your JS how many images to show
* Based on that value, dynamically create that many `<img>` tags
* Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking.

---

## Points Break Down

Looking For | Points (10)
:--|--:
User stories and technical plan | 2
Display random images with non-dup rules | 3
Track results | 3
Display results on completion | 2
Track and display all-time views and clicks | +4


