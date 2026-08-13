(function () {
  if (window.__isEng) return;
  window.__isEng = 1;
  var t0 = Date.now(),
    maxS = 0,
    sent = 0,
    rp = 0;
  window.dataLayer = window.dataLayer || [];
  window.__isEngStart = t0;
  addEventListener(
    "scroll",
    function () {
      if (rp) return;
      rp = 1;
      requestAnimationFrame(function () {
        var d = document.documentElement,
          s = d.scrollHeight - innerHeight,
          p = s > 0 ? Math.round((scrollY / s) * 100) : 0;
        if (p > maxS) maxS = p > 100 ? 100 : p;
        rp = 0;
      });
    },
    { passive: true },
  );
  window.__isEngScroll = function () {
    return maxS;
  };
  function ex() {
    if (sent) return;
    sent = 1;
    var ms = Date.now() - t0;
    var q =
      ms < 1000
        ? "bounce_under_1s"
        : ms < 5000
          ? "quick_exit_under_5s"
          : ms < 30000
            ? "browsed"
            : "engaged";
    var m = {
      dwell_ms: ms,
      dwell_seconds: Math.round(ms / 1000),
      scroll_depth_pct: maxS,
      exit_quality: q,
      reached_form: maxS > 25,
    };
    dataLayer.push(Object.assign({ event: "engagement_exit" }, m));
    if (ms < 1000)
      dataLayer.push(Object.assign({ event: "engagement_bounce" }, m));
    else if (ms < 5000)
      dataLayer.push(Object.assign({ event: "engagement_quick_exit" }, m));
    if (navigator.sendBeacon) {
      try {
        navigator.sendBeacon(
          "/api/engagement",
          JSON.stringify(Object.assign({ event: "engagement_exit" }, m)),
        );
      } catch (e) {}
    }
  }
  addEventListener("pagehide", ex);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") ex();
  });
})();
