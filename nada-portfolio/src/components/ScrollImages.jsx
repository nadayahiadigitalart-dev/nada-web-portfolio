import React, { useEffect, useState } from "react";

import ph01 from "../assets/ph01.png";
import ph02 from "../assets/ph02.png";
import ph03 from "../assets/ph03.png";
import ph04 from "../assets/ph04.png";
import ph05 from "../assets/ph05.png";
import ph06 from "../assets/ph06.png";
import ph07 from "../assets/ph07.png";
import ph08 from "../assets/ph08.png";
import ph09 from "../assets/ph09.png";
import ph10 from "../assets/ph10.png";
import ph11 from "../assets/ph11.png";
import ph12 from "../assets/ph12.png";
import ph13 from "../assets/ph13.png";
import ph14 from "../assets/ph14.png";
import ph15 from "../assets/ph15.png";
import ph16 from "../assets/ph16.png";

const ScrollImages = () => {
  const images = [
    ph01, ph02, ph03, ph05, ph06,
    ph07, ph08, ph09, ph10, ph11,
    ph12, ph13, ph14, ph15, ph16
  ];



  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const START_OFFSET = 0.00; // skip first 8% of scroll
const END_OFFSET = 0.1;   // last 10% for fade-out

useEffect(() => {
  const onScroll = () => {
    const section = document.getElementById("scroll-images");
    if (!section) return;

    const rect = section.getBoundingClientRect();

    let progress = Math.min(
      Math.max(-rect.top / rect.height, 0),
      1
    );

    // 🔥 remove early dead scroll
    progress = Math.max(progress - START_OFFSET, 0);
    const adjustedProgress = progress / (1 - START_OFFSET);

    const imgIndex = Math.min(
      Math.floor(adjustedProgress * images.length),
      images.length - 1
    );

    setIndex(imgIndex);

    // Fade out last image
    if (adjustedProgress > 1 - END_OFFSET) {
      setOpacity(1 - (adjustedProgress - (1 - END_OFFSET)) / END_OFFSET);
    } else {
      setOpacity(1);
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [images.length]);


  // useEffect(() => {
  //   const onScroll = () => {
  //     const section = document.getElementById("scroll-images");
  //     if (!section) return;

  //     const rect = section.getBoundingClientRect();
  //     const progress = Math.min(
  //       Math.max(-rect.top / rect.height, 0),
  //       1
  //     );

  //     const imgIndex = Math.min(
  //       Math.floor(progress * images.length),
  //       images.length - 1
  //     );

  //     setIndex(imgIndex);

  //     // Fade out ONLY at the very end
  //     if (progress > 0.95) {
  //       setOpacity(1 - (progress - 0.9) / 0.1);
  //     } else {
  //       setOpacity(1);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [images.length]);

  return (
    <section id="scroll-images" className="scroll-images">
      <img
        src={images[index]}
        style={{ opacity }}
        alt={`scroll-${index}`}
      />
    </section>
  );
};

export default ScrollImages;
















// import React, { useEffect, useState } from "react";
// import ph01 from "../assets/ph01.png";
// import ph02 from "../assets/ph02.png";
// import ph03 from "../assets/ph03.png";
// import ph04 from "../assets/ph04.png";
// import ph05 from "../assets/ph05.png";
// import ph06 from "../assets/ph06.png";
// import ph07 from "../assets/ph07.png";
// import ph08 from "../assets/ph08.png";
// import ph09 from "../assets/ph09.png";
// import ph10 from "../assets/ph10.png";
// import ph11 from "../assets/ph11.png";
// import ph12 from "../assets/ph12.png";
// import ph13 from "../assets/ph13.png";
// import ph14 from "../assets/ph14.png";
// import ph15 from "../assets/ph15.png";
// import ph16 from "../assets/ph16.png";


// const ScrollImages = () => {
//  const images = [
//   ph01,
//   ph02, ph03, ph04, ph05, ph06,
//   ph07, ph08, ph09, ph10, ph11,
//   ph12, ph13, ph14, ph15, ph16
// ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const section = document.getElementById("scroll-images");
//       if (!section) return;

//       const rect = section.getBoundingClientRect();

//       const progress = Math.min(
//         Math.max(-rect.top / rect.height, 0),
//         0.999
//       );

//       const newIndex = Math.floor(progress * images.length);

//       setIndex(newIndex);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [images.length]);

//   return (
//     <section id="scroll-images" className="scroll-images">
//       <img src={images[index]} alt={`scroll-${index}`} />
//     </section>
//   );
// };

// export default ScrollImages;
