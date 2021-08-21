import React from "react";
import Typed from "typed.js";

const Text = () => {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["professional freelancer.", "front-end developer.","professional freelancer."],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div>
      <h1>
        Hello, I’m <span className="text-border_color font-sign-new">Rakibul Hasan</span>.
      </h1>
      <h1 className="mt-4 ">
        A <span ref={el} className="text-text_head"> </span>
      </h1>
    </div>
  );
};

export default Text;
