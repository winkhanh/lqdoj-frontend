import React from 'react';
import {Route, Switch} from 'react-router-dom';
export interface ComponentTree{
    main: React.FC,
    sub?:[string,ComponentTree][]
}
interface TreeRouteProps{
    componentTree:ComponentTree,
    path: string,
    NotFound : React.FC
}
const NullComponent: React.FC = () => {
    return null;
}
const TreeRoute : React.FC<TreeRouteProps>= ({componentTree, path, NotFound}:TreeRouteProps) =>{
    return (
        <Switch>
            <Route exact path={path} component={componentTree.main}/>
            {(componentTree.sub)
            ?componentTree.sub.map( (subTree, idx)=>{
                return(
                    <Route key={idx} path={path+subTree[0]}>
                        <TreeRoute  componentTree={subTree[1]} path={path+subTree[0]} NotFound={NotFound}/>
                    </Route>
                );
            })
            :(<NullComponent/>)}
            <Route component={NotFound}/>
        </Switch>
    )
};

export default TreeRoute;