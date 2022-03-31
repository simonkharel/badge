import { MDBSpinner } from "mdb-react-ui-kit";

function LoadingSpinner() {
  return (
    <div>
      <MDBSpinner className="mx-2" color="info">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
}
export default LoadingSpinner;
