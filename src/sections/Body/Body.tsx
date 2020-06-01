import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContestsPage, FaqPage, HomePage, NotFound, PostViewPage, ProblemsPage, SubmissionsPage } from '../subSection';
import './Body.scss';
const NullComponent: React.FC = () => {
    return null;
}
const Body: React.FC = () => {
    return (
        <div id="Body">
            <Switch>
                {/*Main route*/}
                <Route exact path="/" component={HomePage} />
                <Route exact path="/problems" component={ProblemsPage} />
                <Route exact path="/contests" component={ContestsPage} />
                <Route exact path="/submissions" component={SubmissionsPage} />
                <Route exact path="/FAQ" component={FaqPage} />
                {/*Sub route*/}
                <Route path="/posts/:id" component={PostViewPage} />
                <Route path="/problems/:id" component={NullComponent} />
                <Route path="/contests/:id" component={NullComponent} />
                {/*404 Page*/}
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};
export default Body;