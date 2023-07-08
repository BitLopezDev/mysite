import * as React from 'react';

export function MSPBootAnimation() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5555);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <center>
      
      <div className="spinner">
        <div className="spinner1"></div>
       
      </div>
      
      <h1 className="antigradienttext">
           Cargando... 
           
          </h1>
          <h3>Esto solo tarda unos segundos</h3>
          
     
        
    </center>
  );
}
