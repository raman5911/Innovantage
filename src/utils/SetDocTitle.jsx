import React from "react";
import { Helmet } from "react-helmet";

function SetDocTitle(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title ? props.title : 'Innovantage - Integrating Supply Chain Solutions ...'}</title>
      </Helmet>
    </div>
  );
}

export default SetDocTitle;
