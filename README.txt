# cowen-kapil-bhagvat
Coding challenge by Cowen to Kapil Bhagvat


What to expect:

--------------APPLICATION--------------

To access the application please use git clone {{url}} command. After that go to "coding-challenge" Angular project folder.

You can run it using "ng serve" OR "ng serve --open" command.

The landing page will have url http://localhost:4200/dashboard with two buttons; "Dashboard" (pre-selected) and "get List" additionally some quick info about application.

To see list of users from api click on "get List" button. It will show maximum 4 users on each page. You can view all users by clicking on pagination button. Also notice that url is changed to http://localhost:4200/list.

To view details of any user, you can click on any of the card/tile. New page will have similar UI with url changed to http://localhost:4200/detail/{{selectedUserId}}/albums. 
Adiitonally it will have "create new album" button. (details of it are further down)**

Each card/tile shows title of the Album. After clicking on any album, new page will show similar UI with 4 images along with their title below the image. Total count of images is displayed at top. Url will now be changed to http://localhost:4200/detail/{{selectedUserId}}/albums/{{albumId}}/photos

You can click on "go back" button on each page to visit previous page.
You can also click on "Dashboard" and "get List" button at the top side of the page anytime during the flow.


**create new album : 
on clicking this button new form will open with on textfield where you can enter New Album name. Url will be changed to http://localhost:4200/detail/{{selectedUserId}}/albums/new-album.
"Create" button will be enabled after you enter name with sufficient length. 
On clicking "Create" button you will go back to previous list of albums page. You will see your newly created album at first position. 
Clicking on this new album you will see three randomly generated images/photos with random text below each image.


--------------CODE--------------

Each page navigation is done by angular/routing. 

For pagination, ngb-pagination module is used.


--------------END to END TESTING--------------

for end-to-end testing you need to use "npm run cypress:open" command. You will see e2e-test.spec.js file. You can click on it to see end-to-end testing.

--------------UNIT TESTING--------------

To run Unit test use command "npm test". 

*****Unfortunately I am personally not very happy with my Unit Tests. As I have never worked in Jest or even Cypress for that matter, I managed to write only very basic unit test. I got the hold of Cypress quite fast but did not happen the same with Jest.******