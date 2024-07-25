import { useEffect, useState } from "react";

const VideoEmbed = () => {
  const [clickCount, setClickCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Load the ad script
    const script = document.createElement("script");
    script.src =
      "//pl23855745.highrevenuenetwork.com/e9/f2/47/e9f247537df9c3aafa85c68bb9388491.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Set the cookie
    document.cookie = "secure; samesite=None";
  }, []);

  const handleVideoInteraction = () => {
    if (cooldown) return; // Ignore clicks during cooldown

    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount % 2 === 0) {
        // Display ad every 2 interactions
        console.log("User interacted, show ad now");

        if (typeof window.showAd === "function") {
          window.showAd();
        }
      }

      if (newCount >= 4) {
        setCooldown(true);
        setTimeout(() => {
          setClickCount(0);
          setCooldown(false);
        }, 10000);
      }

      return newCount;
    });
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeLoaded(true);
    setIframeError(true);
  };

  return (
    <div
      onClick={handleVideoInteraction}
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        width: "100%",
        height: "auto",
      }}
    >
      <iframe
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups"
        referrerpolicy="no-referrer-when-downgrade"
        // Test with different video source URLs
        src="https://www.youtube.com/embed/tgbNymZ7vqY" // Replace with your video source URL
        frameBorder="0"
        allowFullScreen
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
      {!iframeLoaded && <p>Loading...</p>}
      {iframeError && (
        <p>
          There was an error loading the video. Please try again later or check
          your network settings.
        </p>
      )}
    </div>
  );
};

export default VideoEmbed;
