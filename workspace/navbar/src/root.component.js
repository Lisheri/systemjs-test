import React from "react";

import { 
  BrowserRouter,
  Link  
} from "react-router-dom";

export default function Root(props) {
  return <BrowserRouter>
    <div>
      <Link to="/">@single-spa/welcome</Link>{"  "}
      <Link to="/react">@study/test-react-micro</Link>{"  "}
      <Link to="/todo">@study/react-todo</Link>{"  "}
      <Link to="/realworld">@study/realworld</Link>{"  "}
    </div>
  </BrowserRouter>;
}
