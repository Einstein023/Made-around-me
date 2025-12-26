import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

// const override: CSSProperties = {
//   margin: "0 auto",
//   borderColor: "red",
// };

function Loading() {

  return (
    <div className="loading-container">
        <h1>Made Around Me</h1>
    <div className="sweet-loading">
      <SyncLoader
        color={"#8f633d"}
        loading={true}
        // cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  );
}
export default Loading;