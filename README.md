# Expanded-GenSplice-App
An application designed to generate random audio, built using React

As a producer I want an application so that I can expedite the process of sifting through audio and manually splicing together different sounds.  

Instructions: Load any sound in using a soundcloud url, and input millisecond values assigned to each sound module. Included is a note length calculator that returns to the user millisecond values of quarter notes, half notes, etc. These are suggestions to input into each of the boxes associated with the modules. Click the Generate Audio Button unlimited times to generate newly spliced audio. The Audio Archive Database contains some DB seeded Title and Url pairs for the user to test the application within the window upon load. 

client - folder containing node_modules, the public folder, and the src (source) folder along with json files.

client/node_modules - contains all of the npm packages that help run required modules such as a key component like ReactPlayer.

client/public - contains the main index.html file that the App.js is displayed through. In index.html the application is connected to bootstrap. 

client/src - contains the components and utils as well as the main App.js, App.css and index.js files along with the package-lock.json and package.json files.

src/components - contains the AddButton, BPMCalc, generateButton, Grid and header components.

src/components/AddButton - A button intended to, on click, add a title and url to the mongodb of sounds.

src/components/BPMCalc - A calculator component that calculates note-length times in milliseconds based on a BPM input. This give suggestions to the user for musical ideas.

src/components/generateButton - The button responsible for handling the main generateAudio function responsible for manipulating the ReactPlayer Widgets based on the app's inputs.

src/components/Grid - Bootstraps grid stems with Container, Row and Column defined. 

src/components/header - The header text. 

src/utils - Contains the actions.js, GlobalState.js and API.js files intended to help route data

src/App.js - The main js file rendered as the application. It contains all components and utilizes all functions. 

src/App.css - A file designated for styling the main App page.

src/index.js - Renders the App.js file. 

src/package-lock.json - Reference for all the npm packages for Heroku to install

src/package.json - Contains the dependencies of the Application. 

controllers- Contains the soundsController.js file which queries based upon the model.

models- Contains the sound.js schema which requires mongoose to input the data in a particular format. The module is exported to index.js which exports the folder so that the controller may us it

routes- Contains the api routes for the data.

scripts- Contains the seed script with data that is put into mongoDB with npm run seed

package-lock.json- A reference to all the npm installations for Heroku

package.json- Contains important dependencies and scripts

server.js - The server for the app, designates which default PORT for the server to listen on. Links everything together in a sense. 