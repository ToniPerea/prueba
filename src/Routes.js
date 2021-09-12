import { BrowserRouter,Switch, Route } from "react-router-dom";
import App from "./App";
import Pepe from "./pages/exercises";

const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/exercises" component={Pepe}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;