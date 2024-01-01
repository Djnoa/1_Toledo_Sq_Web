import React, { useContext } from 'react';
import FinalHtmlContext from '../contexts/FinalHtmlContext';

const Banner = () => {
    const { finalHtml } = useContext(FinalHtmlContext);

    return (
        <div dangerouslySetInnerHTML={{ __html: finalHtml }}></div>
    );
};

export default Banner;
