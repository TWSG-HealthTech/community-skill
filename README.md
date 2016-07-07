## AWS Lambda Community Skill

### Code Structure

- All Intent handlers are put in handlers folder. 
- The code to dispatch intent to different handlers is in handlers/index.js

### MariaDB in Docker

```
docker run -p 3306:3306 --name HealthTechDb -e MYSQL_ROOT_PASSWORD=top-banana! -d mariadb:latest
```

### Create deployment package

- Run zip.sh to produce deployment.zip