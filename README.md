# IoTHub + Web Display

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/?repository=https://github.com/gcrev93/IoTHM/)

This repo includes an Azure Resource Manager(ARM) template that will deploy an Azure IoT Hub, Storage Account, Service Bus, Logic App and Web Application. 

![Architecture Diagram](https://github.com/gcrev93/IoTHM/blob/master/img/architecure_diagram.JPG?raw=true)

The Iot Hub will be used to manage the different IoT devices. It will also be built with a Service Bus included as one of the messaging routes. 

The Service Bus will be used to receive and handle messages from the IoT Device. 

The Storage Account will be used to save the messages in an Azure table. 

The Logic App will be used to read the messages from the Service Bus and then push them to the appropriate Azure Table.

The Web Application will pull the messages from the Azure Table and display them in an HTML table.


## How To Deploy

After you press the deploy button, the following 



