import React from 'react';
import Icon from '../../Icon';

const IdeasClients = (props) => (
  <div className="clients">
    <h3>Our Clients</h3>
    <div className="clients__icons">
      <Icon className="fab fa-bandcamp" />
      <Icon className="fab fa-500px" />
      <Icon className="fas fa-atom" />
    </div>
    <button className="button view--all">View All</button>
  </div>
);

export default IdeasClients;