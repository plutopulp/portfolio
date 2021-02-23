# Portfolio
A portfolio website showcasing my projects and skills, built with ReactJS. Check out the live site https://yvanbuggy.com.

![Portfolio landing page](https://github.com/Aviemusca/portfolio/blob/master/portfolio.png?raw=true)

Includes docker-compose for both development and deployment, with SSL certs. 

# Installation
Clone the repo:
```
git clone https://github.com/Aviemusca/portfolio.git 
```
Change into the directory and run
```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

In order for the email service in the contact form to work, you will need to signup with https://emailjs.com and create a .env file matching the .env-template file with the 3 relevent IDs needed for sending emails.