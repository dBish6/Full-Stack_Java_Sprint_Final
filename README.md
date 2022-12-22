# Full-Stack_SpringAPI_Sprint_Final
This is our very last sprint project from my Solfware Development Course at Keyin Collage, Semester 4 2022. Team members included David Bishop, Dominic Whelan, Blake Waddleton and Chris Doucette. This project is an e-commerce website hosting many medi-eval and historic weapons.

__Note:__ _If you look in the console you'll see errors if not running the server locally. This is because the front end, when fetching the routes from the back end, it tries both of the avialble URLs. If one was succesful, it will warn you in the console that it was able to find a working server, but the other will show a small error. So, don't worry about it!_

## Application Details
Our Challenge for this project was to produce a back end rest API with Spring Boot coupled with a React front end. The back end was written in the Java language using object orientated programming. 

The database used was MySQL and AWS RDS for deployment. The back end was containerized using Docker and deployed with AWS Elastic Beanstalk. The React portion was developed in javascript and was deployed using S3 Web Hosting.

__DockerHub Container Repo:__<br />
`https://hub.docker.com/repository/docker/dbish6/finalsprint_raven_api_repo`

__Deployed Stable Version of the Website:__<br />
`http://ravenblacksmith.xyz.s3-website-us-east-1.amazonaws.com/home`

## Testing
Testing of the back end utilized Mockito and J-Unit frameworks. There is testing of the controller mappings, Class methods and Service methods.
