import React, { useEffect } from "react";

function Landing() {
  useEffect(() => {
    // Load UnicornStudio script dynamically
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <div
        data-us-project="k0h8BiUtjlgbE4S0tsPW"
        className="w-full h-full relative"
      ></div>

      <style>{`
        /* Hide UnicornStudio logo */
        div[data-us-project] a[href*="unicorn.studio"],
        div[data-us-project] a[title*="unicorn.studio"],
        div[data-us-project] .unicorn-logo,
        div[data-us-project] [class*="logo"],
        div[data-us-project] [id*="logo"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        /* Make sure the animation covers the full section */
        div[data-us-project] > * {
          width: 100vw !important;
          height: 100vh !important;
        }
        
        /* Ensure UnicornStudio canvas takes full screen */
        div[data-us-project] canvas {
          width: 100vw !important;
          height: 100vh !important;
          object-fit: cover !important;
        }
      `}</style>
    </div>
  );
}

export default Landing;
