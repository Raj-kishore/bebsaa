To generate jar file of spring boot app 

Without test cases

> ./mvn clean package -DskipTests

Jar file is created in /target folder. 

Copy the Jar file and paste it inside the docker folder and rename the file as docker-spring-boot-postgres-0.0.1-SNAPSHOT.jar 

Now go to the /docker folder.
To start the docker compose,

> docker-compose up

The application is exposed to the localhost with the port 9002. Access the app with http://localhost:9002

To stop all containers 

> docker-compose down

Delete the application docker image 

>docker rmi docker-spring-boot-postgres:latest

Use docker desktop to check the logs.

Thanks!!

Rajkishor