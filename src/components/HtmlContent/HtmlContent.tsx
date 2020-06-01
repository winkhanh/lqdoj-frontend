import React from 'react'

const HtmlContent: React.FC<{content: string}> = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{__html: content}}>
        </div>
    )
};

export default HtmlContent;
