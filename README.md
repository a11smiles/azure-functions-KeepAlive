# azure-functions-KeepAlive
An Azure timer function for keeping sites alive.

## To Install
First, prior to deployment of _any_ functions within your function app, you'll need to upgrade the **Runtime version** under the _Function app settings_ to **beta**.

Second, under the function app's **Application settings**, you'll need to update the _WEBSITE_NODE_DEFAULT_VERSION_ to **8.9.4**.  This will upgrade the installed version of NodeJS within your app instance.

Finally, update Azure function's core tooling.  Go to Kudu by visiting: `http://yourwebapp.scm.azurewebsites.net`. At the top menu, choose **Debug Console -> CMD**.  At the command line, type the following:
```
npm i -g azure-functions-core-tools@core
```

You are now ready to deploy the function.

## Install Dependencies
Create an Azure function and upload this code to it.

Once all of the code in this repo has been uploaded, go back to Kudu by visiting:
`http://yourwebapp.scm.azurewebsites.net`. At the top menu, choose **Debug Console -> CMD**.  Using the folders or the command-line navigate to the folder: **site/wwwroot/_functionName_**.  From the prompt, enter the following:
```
npm i
```

This will take a couple of seconds, but will install the few node dependencies of the app.

That's it.  Now, your function should execute every 5 minutes (default, but can be changed in the `functions.json`) and ping each site in the `sites.json` file.

## Note
Every time you modify the `sites.json` file, you'll need to restart the function in order to pick up the changes.