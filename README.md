# Badge

This React application will call a weather API and display the weather for the Dallas area. There is also another page that allows you to input a stock ticker and you will receive price information on the related stock. 

# Technical Information

I am using two APIS in this application, a weather API from https://openweathermap.org and a stock API from https://finnhub.io. The blueprint to call these APIS are stored in an API layer. I have two pages and you can switch between them using React Router. On the "Stocks" page there is a form with real-time validation and it only allows you to input capital letters. There are around 8 separate components for this application and two of them use React hooks. (StockCard.js and WeatherContainer.js). There are two tests written with Jest and the React testing library, one to see if the component renders with the proper testId and placeholder. The second test checks to see if props are being passed correctly to another component. 

# How To Run
in project directory: 

npm install

npm start

# How To Run Tests

in project directory:

npm test
