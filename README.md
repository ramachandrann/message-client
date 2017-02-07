This project requires
1. Zookeeper
2. Kafka
3. Kafka Connect
4. Debezium (CDC tool for MySql)
5. Local MySql

# Socketmessages
It demonstrates how sockets may be utilized to stream (notifications) data to an Angular2 front end via NodeJS

### Startup options on windows (after installing Zookeeper, Kafka, Kafka Connect, Debezium)
zookeeper 
localhost:2181

cd C:\zookeeper-3.4.9\bin
zkServer.cmd

cd C:\kafka_2.11-0.10.1.1\bin\windows
kafka-server-start.bat ../../config/server.properties

enable in mysql.ini file.
# Binary Logging.
log_bin=mysql-bin

# Server Id.
server-id=184054

(created kafka-connect.bat under windows)

C:\kafka_2.11-0.10.1.1\bin\windows>kafka-connect ../../config/connect-standalone.properties ../../config/mysql.connector.properties

Since Kafka Connect is intended to be run as a service, it also provides a REST API for managing connectors. By default, this service runs on port 8083
GET /connectors

C:\kafka_2.11-0.10.1.1\bin\windows>kafka-console-consumer --bootstrap-server localhost:9092 --topic localmysql.demo.message --from-beginning

pm2 start app.js --watch
pm2 stop --watch 0 will stop watching


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
