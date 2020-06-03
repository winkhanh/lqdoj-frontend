import React from 'react';

interface ContextsProviderAllProps{
    contexts: [React.Context<any>,any][],
}
const ContextsProviderAll: React.FC<ContextsProviderAllProps> = ({contexts, children})=>{
    if (contexts.length===0) 
        return (
            <>
            {children}
            </>
        )
    else
    {
        const CurContext = contexts[0][0];
        const curValue = contexts[0][1];
        return(
            <CurContext.Provider value={curValue}>
                <ContextsProviderAll contexts={contexts.slice(1)}>
                    {children}
                </ContextsProviderAll>
            </CurContext.Provider>
        )
    }
        
}
export default ContextsProviderAll;