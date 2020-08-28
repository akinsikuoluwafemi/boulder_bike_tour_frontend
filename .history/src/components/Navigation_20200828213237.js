import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Contest from './Contest/Contest';
import Location from './Location/Location';
import ImageList from './Photos/ImageList';
import Riders from './Riders/Riders';
import FooterContent from './Home/FooterContent';




export default function Navigation() {
    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contest" component={Contest} />
                <Route exact path="/riders" component={Riders} />
                <Route exact path="/location" component={Location} />
                <Route exact path="/photos" component={ImageList} />
            </Switch>
        </Router>
    )
}
