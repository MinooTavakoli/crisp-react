import React, { useEffect, useRef } from "react";

function CrispChat({ crispWebsiteId = null, domain = undefined }) {
  const ref = useRef();
  const crispChat = () => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = crispWebsiteId;
    let d = document;
    let s = d.createElement("script");
    s.type = "text/javascript";
    s.src = "https://client.crisp.chat/l.js" ;
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  };
  useEffect(() => {
    if (crispWebsiteId) {
      let e = document;
      let a = window;
      if ("complete" === e.readyState) crispChat();
      else {
        a.attachEvent
          ? a.attachEvent("onload", crispChat)
          : a.addEventListener("load", crispChat, !1);
      }
    }
  }, [crispWebsiteId]);
  return <div ref={ref} />;
}

export default CrispChat;