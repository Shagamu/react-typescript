import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../pages";
import { Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      
      <Route exact path="/pagina-inicial" element={Dashboard} />

      <Route path="*" Component={() => <Redirect to="/pagina-inicial"/>}/>
      
    </BrowserRouter>
  );
}