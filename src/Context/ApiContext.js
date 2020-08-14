import React from 'react';

const ApiContext = React.createContext({
      url: "http://localhost:5000/api/",
});

export default ApiContext;