import React from 'react';
import InsightsHeader from './insightsHeader/InsightsHeader';
import InsightsArticle from './insightsArticle/InsightsArticle';
import InsightsNavigation from './insightsNavigation/InsightsNavigation';

const Insights = () => (
    <div className="insights">
        <InsightsHeader />
        <InsightsArticle />
        <InsightsNavigation />
    </div>
    
);

export default Insights;