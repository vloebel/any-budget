
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  ![banner](./assets/rm-banner.jpg)
  # talk-back: a social network API/back end
  ## UA Web Coding Bootcamp Challenge - Week 18
  
  ## Description  
  This project implements the back-end of a social networking API based on mongoose & MongoDB. [Insomnia](https://insomnia.rest/) or another similar desktop applications can be used for demonstration and testing. It is based on source code for  the University of Arizona's Web Developer Bootcamp, Module 18, and is subject to that program's copyright and restrictions.

  ### Link to YouTube Walkthrough
  [talkback demo part 1: User Routes](https://youtu.be/txrRT5tkMtU)    
  [talkback demo part 2: Thought Routes](https://youtu.be/lPIBj_VVjkA)    
  [talkback demo part 3: Bonus - Deleting a user also deletes the associated thoughts](https://youtu.be/Fm43mTNEgrc)  

  
  ## Table of Contents  
  * [Installation](#Installation)  
  * [Usage](#Usage) 
  * [User_Story](#User_Story)  
  * [User_Requirements](#User_Requirements)  
  * [Questions](#Questions)    
  * [License](#License)
  ## Installation  
  This project requires node.js. To install: 
  
1. NAVIGATE TO THE DIRECTORY where you will be using this software, initialize by typing "npm init" into the terminal in the root directory of your project, and installing the following packages:   

    * [express.js](https://expressjs.com/)    
    * [mongoDb](https://www.mongodb.com/)    
    * [mongoose](https://www.npmjs.com/package/mongoose)    
    
  ## Usage  
  * To start the server: 
    type "npm start" on the terminal command line.   
  * To interface with the server:  
    Start a desktop app such as [Insomnia](https://insomnia.rest/) and use the API methods it provides at http://localhost:3001.

  ## User_Story 
 * AS A social media startup
 * I WANT an API for my social network that uses a NoSQL database  
   SO THAT my website can handle large amounts of unstructured data
  ## User_Requirements
  GIVEN a social network API  
  * WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
  * WHEN I open API GET routes in Insomnia Core for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
  * WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
    THEN I am able to successfully create, update, and delete users and thoughts in my database
  * WHEN I test API POST and DELETE routes in Insomnia Cores  
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list  
 
  ![Insomnia Screenshot](./assets/insomnia.capture.jpg)

  ## Questions
  For more information, contact  
  * [vloebel on GitHub](https://github.com/vloebel)  
  * [VickyLoebel@gmail.com](mailto:VickyLoebel@gmail.com)
  ## License
  This software is distrubted without warranty under the MIT license agreement. To view terms and conditions, visit the [MIT License website](https://opensource.org/licenses/MIT).
      
# any-budget
