import React from 'react';
import { ProblemViewPage, ContestsPage, FaqPage, HomePage, NotFound, PostViewPage, ProblemsPage, SubmissionsPage } from '../subSection';
import './Body.scss';
import TreeRoute, { ComponentTree } from '../../components/TreeRoute/TreeRoute';


const componentTree : ComponentTree = {
    main: HomePage,
    sub:[
        ["problems/",{
            main: ProblemsPage,
            sub:[
                [":id/",{
                    main:ProblemViewPage
                }]
            ]
        }],
        ["contests/",{
            main: ContestsPage
        }],
        ["submissions/",{
            main: SubmissionsPage
        }],
        ["FAQ/",{
            main: FaqPage
        }],
        ["posts/:id/",{
            main: PostViewPage
        }]

    ]
}
const Body : React.FC  = ()=> {
    return (
            <div id = "Body"> 
                <TreeRoute componentTree={componentTree} path="/" NotFound={NotFound}/>
            </div>
        )
}

export default Body;
