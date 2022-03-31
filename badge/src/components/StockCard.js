import stockImage from "../assets/market.jpg";
import {
  MDBCard,
  MDBInput,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { StockAPI } from "../api/Stock";
import StockInfoDisplay from "./StockInfoDisplay";
import ErrorCard from "./ErrorCard";
import LoadingSpinner from "./LoadingSpinner";
import classes from "./StockCard.module.css";

function StockCard(props) {
  // Setting states for Stock data and conditional rendering
  const [ticker, setTicker] = useState("");
  const [stockObject, setStockObject] = useState([]);
  const [nameError, setNameError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [closeCard, setCloseCard] = useState(false);
  const [showCard, setShowcard] = useState(false);
  const [showErrorCard, setShowErrorCard] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str); // Function to return true if string only contains letters
  }

  function handleForm(event) {
    // Real time input validation
    setTicker(event.target.value);
    if (
      event.target.value !== event.target.value.toUpperCase() ||
      onlyLetters(event.target.value) === false
    ) {
      setNameError("Please use UPPERCASE letters only!");
      setShowError(true);
    } else {
      setNameError("");
      setShowError(false);
    }
  }

  function buttonHandler() {
    setShowLoading(true);
    setCloseCard(true);
    setShowcard(true);
    StockAPI.getStock(ticker.trim()) // Getting stock data of user input and setting fields
      .then(function (response) {
        setShowLoading(false);
        let update = {};
        update = [
          {
            currentPrice: response.data.c,
            percentChange: response.data.dp,
            highPrice: response.data.h,
            lowPrice: response.data.l,
          },
        ];
        if (
          /* API does not return 400 error so if
            there is an empty response, the app wil show
            an error card with empty data*/
          response.data.c === 0 &&
          response.data.dp === null &&
          response.data.h === 0 &&
          response.data.l === 0
        ) {
          setShowErrorCard(true);
          setShowInfo(false);
          setShowcard(true);
          setStockObject(update);
          setCloseCard(true);
        } else {
          setStockObject(update);
          setShowInfo(true);
          setCloseCard(true);
          setShowcard(true);
        }
      })
      .catch(function (error) {
        if (error.response) {
          alert("Request fell out of 200 range");
        } else if (error.request) {
          alert("No response was received");
        } else {
          alert("Error");
        }
      });
  }

  function closeHandler() {
    setShowcard(false);
    setCloseCard(false);
    setShowInfo(false);
  }

  function errorCloseHandler() {
    setShowErrorCard(false);
    setShowcard(false);
    setCloseCard(false);
  }

  return (
    <div className={classes.centerCard}>
      {closeCard && showCard ? (
        " "
      ) : (
        <MDBCard style={{ maxWidth: "22rem" }}>
          <MDBCardImage src={stockImage} position="top" />
          <MDBCardBody>
            <MDBCardText className={classes.errorCenter}>
              Enter a stock ticker to get the price
            </MDBCardText>
            <MDBInput
              data-testid="Ticker"
              placeholder="NIO"
              label="Ticker"
              id="typeText"
              type="text"
              autoComplete="off"
              onChange={handleForm}
            ></MDBInput>
            <div className={classes.errorCenter}>
              <p className={classes.errorText}>{showError ? nameError : ""}</p>
            </div>

            <div className={classes.center}>
              {showError ? (
                ""
              ) : (
                <button className={classes.button} onClick={buttonHandler}>
                  Submit
                </button>
              )}
            </div>
          </MDBCardBody>
        </MDBCard>
      )}
      <div>
        {showInfo && showCard
          ? stockObject.map((stockItem, index) => {
              return (
                <StockInfoDisplay
                  key={index}
                  name={ticker}
                  currentPrice={stockItem.currentPrice}
                  percentChange={stockItem.percentChange}
                  lowPrice={stockItem.lowPrice}
                  highPrice={stockItem.highPrice}
                  close={closeHandler}
                ></StockInfoDisplay>
              );
            })
          : ""}
      </div>
      <div>
        {showErrorCard
          ? stockObject.map((stockItem, index) => {
              return (
                <ErrorCard
                  key={index}
                  name={ticker}
                  currentPrice={stockItem.currentPrice}
                  percentChange={stockItem.percentChange}
                  lowPrice={stockItem.lowPrice}
                  highPrice={stockItem.highPrice}
                  close={errorCloseHandler}
                ></ErrorCard>
              );
            })
          : ""}
      </div>
      <div>{showLoading ? <LoadingSpinner></LoadingSpinner> : " "}</div>
    </div>
  );
}
export default StockCard;
