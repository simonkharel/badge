import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import classes from "./WeatherCard.module.css";
function WeatherCard(props) {
  return (
    <div>
      <MDBCard
        style={{
          maxWidth: "44rem",
          backgroundColor: "aliceblue",
          borderRadius: "40px",
          outlineStyle: "solid",
          outlineColor: "steelblue",
        }}
      >
        <div className={classes.center}>
          <MDBCardImage
            src={props.iconImage}
            style={{ width: "300px", height: "350px" }}
          />
        </div>{" "}
        <MDBCardBody>
          <MDBCardText className={classes.center}>
            {props.city} Weather
          </MDBCardText>
          <MDBCardText className={classes.center}>
            {" "}
            Description: {props.des}
          </MDBCardText>
          <MDBCardText className={classes.center}>
            Feels Like: {props.feels}℉
          </MDBCardText>
          <MDBCardText className={classes.center}>
            Actual: {props.temperature}℉
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default WeatherCard;
