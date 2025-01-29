"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setShowPrompt(false));
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed z-50 bottom-4 left-4 bg-white border p-4 rounded-lg shadow-lg">
      <p className="text-black pb-1">Install app to homescreen?</p>

      <div className="flex justify-between">
        <button
          onClick={handleInstallClick}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Install
        </button>
        <button
          onClick={() => setShowPrompt(false)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
