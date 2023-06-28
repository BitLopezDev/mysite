import * as React from 'react';

export function MSPBootAnimation() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 20000);
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
    </center>
  );
}
