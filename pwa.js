(() => {
  const scriptUrl = new URL(document.currentScript.src);
  const serviceWorkerUrl = new URL("sw.js", scriptUrl);

  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register(serviceWorkerUrl);
    } catch (error) {
      console.error("ثبت سرویس‌ورکر انجام نشد:", error);
    }
  });
})();
