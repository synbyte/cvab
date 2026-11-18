"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  const dismiss = useCallback(() => {
    setShowPrompt(false);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
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

  useEffect(() => {
    if (!showPrompt) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss, showPrompt]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setShowPrompt(false));
    }
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="tc-modal-backdrop"
        aria-label="Close install dialog"
        onClick={dismiss}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="install-prompt-title"
        aria-describedby="install-prompt-description"
        className="tc-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <AppIcon />
          <h2 id="install-prompt-title" className="mt-4 text-xl font-semibold text-ink sm:text-2xl">
            Install TC Info
          </h2>
          <p
            id="install-prompt-description"
            className="tc-muted mt-2 max-w-sm sm:text-base"
          >
            Add this app to your home screen for quick access to docket links,
            the color line, and court resources.
          </p>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={dismiss}
            className="tc-btn-secondary w-full sm:flex-1"
          >
            Not now
          </button>
          <button
            type="button"
            onClick={handleInstallClick}
            className="tc-btn-primary w-full sm:flex-1"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}

function AppIcon() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-card border border-brand-100 bg-brand-panel p-1 shadow-card sm:h-24 sm:w-24">
      <div className="relative h-full w-full overflow-hidden rounded-panel bg-white">
        <Image
          src="/icons/android-chrome-192x192.png"
          alt=""
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}