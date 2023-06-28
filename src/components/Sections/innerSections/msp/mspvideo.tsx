import React, { useEffect, useRef } from 'react';

export function MSPVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 1000);
  }, []);

  return (
    <video ref={videoRef} width="100%" autoPlay muted loop style={{ height: '500px' }}>
      <source src="/videos/malworld.mp4" type="video/mp4" />
      Sorry, your browser does not support videos.
    </video>
  );
}
