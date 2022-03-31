import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import classes from "./ErrorCard.module.css";
function ErrorCard(props) {
  return (
    <div>
      <MDBCard
        style={{
          maxWidth: "44rem",
          backgroundColor: "lightpink",
          borderRadius: "40px",
        }}
      >
        <MDBCardBody>
          <MDBCardText className={classes.center}>
            NO INFORMAION ON {props.name}
          </MDBCardText>
          <MDBTable>
            <MDBTableHead color="primary-color">
              <tr>
                <th> Current Price</th>
                <th>Percent Change</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>${props.currentPrice}</td>
                <td>{props.percentChange}%</td>
              </tr>
            </MDBTableBody>
            <MDBTableHead color="primary-color">
              <tr>
                <th>Price High For Today</th>
                <th>Price Low For Today</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>${props.highPrice}</td>
                <td>${props.lowPrice}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
        <div className={classes.center}>
          <button className={classes.button} onClick={props.close}>
            Close
          </button>
        </div>
      </MDBCard>
    </div>
  );
}

export default ErrorCard;
