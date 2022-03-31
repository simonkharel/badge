import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import classes from "./PictureCard.module.css";
function PictureCard(props) {
  return (
    <div>
      <div>
        <MDBCard
          style={{
            maxWidth: "44rem",
            backgroundColor: "aliceblue",
            borderRadius: "40px",
            outlineStyle: "solid",
            outlineColor: "steelblue",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <div>
            <MDBCardImage
              src={props.iconImage}
              style={{
                width: "500px",
                height: "400px",
                borderRadius: "40px 40px 0 0",
              }}
            />
          </div>{" "}
          <MDBCardBody>
            <MDBCardText className={classes.center}>{props.text}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default PictureCard;
