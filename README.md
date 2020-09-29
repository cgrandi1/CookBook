CookBook

CookBook app (PDT) is an app to help create and edit your own personalized recipes. It is built with an API-only Ruby on Rails back-end and a React.js front-end. The back-end operates with complete autonomy for easy integration with any front-end framework.

Installation

Clone or download the repo: https://github.com/cgradnsion/CookBook

In your terminal, navigate to the app's directory and execute:

$ bundle

to install the Rails dependencies.

To create and seed the database, type:

$ rails db:migrate

and then, if you wish to make use of some basic learning categories and see what the app looks like when populated with a bit of data:

$ rails db:seed

To setup React, navigate to the pdt-app folder inside the top-level directory. Then execute:

$ npm install

The PDT site should then open up automatically in a browser, but you can always access it by visiting http://localhost:3000in your browser. The back-end JSON data can be accessed via http://localhost:4000. These ports can be changed in the Procfile.dev file.

To end the server session, type ctrl-c.

Usage

First time users will need to create a recipe by supplying info such as name, instructions, ingrediants and time. Go to the "Create Recipe" tab in the Navigation Bar at the top of the page. Once a recipe is created, click on the submit button.

Visit the "Recipes" tab where you will see a list of recipes that you have once created. You will have the ability to edit and/or delete the recipe on the page. 


Edit recipe, which includes the ability change the instructions, name, ingrediants and/or time. Access this feature by clicking on the edit button on the recipe page, and saving that change once redirected to the edit page.

Delete recipe button allows the user the ablitity to delete that paritcular recipe.


For Developers


Contributing

License

The gem is available as open source under the terms of the MIT License.
