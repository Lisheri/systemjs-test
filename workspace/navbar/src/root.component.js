import React from "react";

import { 
  BrowserRouter,
  Link  
} from "react-router-dom";

export default function Root(props) {
  return <BrowserRouter>
    <div>
      <Link to="/">welcome</Link>{"  "}
      <Link to="/react">test-react-micro</Link>{"  "}
      <Link to="/todo">react-todo</Link>{"  "}
      <Link to="/realworld">Vue</Link>{"  "}
    </div>
  </BrowserRouter>;
}
