import { useEffect } from "react";

const VideoEmbed = () => {
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

  // Function to handle video play event
  const handleVideoPlay = () => {
    // Logic to display ads when the video starts playing
    console.log("Video started playing, show ads now");
    // You can add more logic here if needed
  };

  return (
    <div
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
        onLoad={handleVideoPlay}
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
