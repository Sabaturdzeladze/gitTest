import React from 'react';
import IdeasHeader from './header/IdeasHeader';
import IdeasParagraph from './paragraph/IdeasParagraph';
import IdeasImage from './image/IdeasImage';
import IdeasClients from './clients/IdeasClients';


const Ideas = () => (
    <div class="making--ideas">
        <IdeasHeader />
        <IdeasParagraph />
        <IdeasImage />
        <IdeasClients />
    </div>
);

export default Ideas;