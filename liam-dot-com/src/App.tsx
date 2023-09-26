import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <h1>Hi, I'm Liam</h1>
        </>
    );
}

export default App;
