import { useEffect, useState } from "react";

const VideoEmbed = () => {
  const [clickCount, setClickCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src =
      "//pl23855745.highrevenuenetwork.com/e9/f2/47/e9f247537df9c3aafa85c68bb9388491.js";
    script.type = "text/javascript";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle video interaction
  const handleVideoInteraction = () => {
    if (cooldown) return; // Ignore clicks during cooldown

    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount % 2 === 0) {
        // Logic to display ads every 2 interactions
        console.log("User interacted, show ad now");

        // Assuming the ad network provides a function to display the ad
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

  return (
    <div
      onClick={handleVideoInteraction} // Increment click count on each user interaction
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        height: "auto",
      }}
    >
      <iframe
        src="https://dlhd.so/embed/stream-343.php"
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
