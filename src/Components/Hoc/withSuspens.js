import React from "react";

//render = {withSuspens(Component)}
export const withSuspens = (Component) => {
    return (props) => {
        return (<React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>)
    }
}