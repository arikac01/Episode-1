# Episode-1

# What is Emmet? 
Emmet -> It is a abbrevation for Html code, 
this is an inbuilt VS code feature to just type the abbrevation or 
the shortcut and it gives you all basic html code.
->Emmet prevents you from writing the entire code by yourself by providing Emmet abbreviations.
# Differences between Library and Framework?

The technical difference between a framework and library lies in a term called inversion of control. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.

# What is CDN? Why do we use it?

A content delivery network (CDN) is a distributed network of servers that delivers web content to users based on their geographical location. The main purpose of a CDN is to improve the performance of websites and reduce latency by caching static content such as images, videos, and HTML files in multiple locations around the world.
When a user requests a webpage that has been cached on a CDN server, the server closest to the user's geographical location will serve up the content. This reduces latency and improves website performance.

# Why is React known as React?

React, the JavaScript library for building user interfaces, was developed by Facebook. The name "React" comes from the idea of the library reacting to changes in the application state. React allows developers to create dynamic, interactive user interfaces by efficiently updating and rendering components in response to changes in data or user input.
So, the name "React" reflects the core philosophy of the library, which is to provide a reactive and efficient way to build user interfaces.

# What is Cross-origin in the Script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.CORS is used to manage cross-origin requests.
CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. 

# What is difference between React and ReactDOM?

As the name implies, ReactDOM is the glue between React and the DOM. For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application. The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.

# What is difference between react.development.js and react.production.js files via CDN?

--> In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

--> In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.
