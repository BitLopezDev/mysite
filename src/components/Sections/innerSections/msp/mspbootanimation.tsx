import * as React from 'react' ;

export function MSPBootAnimation() {
  
  const [fadeOutEnd, setFadeOutEnd] = React.useState(false);

  const handleAnimationEnd = () => {
    setFadeOutEnd(true);
  };
  return (
    <>
    <div
      className={`fade-out ${fadeOutEnd ? 'fade-out-end' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <center>
      <h1 className="antigradienttext">
      <div className="container">
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
           
          </h1>

      </center>
    </div>
    </>
  );
}
