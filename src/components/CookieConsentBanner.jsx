import React, { useEffect, useMemo, useRef, useState } from "react";
import { useConsent } from "./ConsentProvider";

function useFocusTrap(isOpen, containerRef, onRequestClose) {
  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(container.querySelectorAll(focusableSelector));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (first) first.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onRequestClose?.();
        return;
      }
      if (e.key !== "Tab") return;
      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, containerRef, onRequestClose]);
}

export default function CookieConsentBanner() {
  const {
    consent,
    hasChoice,
    isReady,
    acceptAll,
    rejectAll,
    savePreferences,
    isDialogOpen,
    openDialog,
    closeDialog,
  } = useConsent();

  const [draft, setDraft] = useState(consent);
  const dialogRef = useRef(null);
  const manageBtnRef = useRef(null);

  useEffect(() => {
    setDraft(consent);
  }, [consent]);

  useFocusTrap(isDialogOpen, dialogRef, closeDialog);

  useEffect(() => {
    if (!isDialogOpen && manageBtnRef.current) {
      manageBtnRef.current.focus();
    }
  }, [isDialogOpen]);

  const shouldShowBanner = useMemo(() => isReady && !hasChoice, [isReady, hasChoice]);

  if (!isReady) return null;

  return (
    <>
      {shouldShowBanner && (
        <div className="cookie-banner" role="region" aria-label="Cookie consent">
          <div className="cookie-banner__content">
            <p className="cookie-banner__text">
              We use cookies to improve your experience. You can accept, reject, or manage preferences.{" "}
              <a className="cookie-banner__link" href="/privacy">
                Privacy policy
              </a>
              .
            </p>
            <div className="cookie-banner__actions">
              <button className="cookie-btn cookie-btn--primary" type="button" onClick={acceptAll}>
                Accept all
              </button>
              <button className="cookie-btn cookie-btn--secondary" type="button" onClick={rejectAll}>
                Reject all
              </button>
              <button
                className="cookie-btn cookie-btn--ghost"
                type="button"
                onClick={openDialog}
                ref={manageBtnRef}
              >
                Manage
              </button>
            </div>
          </div>
        </div>
      )}

      {isDialogOpen && (
        <div className="cookie-dialog__backdrop" role="presentation" onClick={closeDialog}>
          <div
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-dialog-title"
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cookie-dialog-title" className="cookie-dialog__title">
              Cookie preferences
            </h2>
            <p className="cookie-dialog__subtitle">
              Essential cookies are always on. Choose whether to allow analytics and marketing cookies.
            </p>

            <div className="cookie-dialog__options">
              <label className="cookie-toggle">
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Essential</strong> (required)
                </span>
              </label>

              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={Boolean(draft.analytics)}
                  onChange={(e) => setDraft((prev) => ({ ...prev, analytics: e.target.checked }))}
                />
                <span>
                  <strong>Analytics</strong>
                </span>
              </label>

              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={Boolean(draft.marketing)}
                  onChange={(e) => setDraft((prev) => ({ ...prev, marketing: e.target.checked }))}
                />
                <span>
                  <strong>Marketing</strong>
                </span>
              </label>
            </div>

            <div className="cookie-dialog__actions">
              <button
                className="cookie-btn cookie-btn--primary"
                type="button"
                onClick={() => {
                  savePreferences(draft);
                  closeDialog();
                }}
              >
                Save preferences
              </button>
              <button
                className="cookie-btn cookie-btn--secondary"
                type="button"
                onClick={() => {
                  acceptAll();
                  closeDialog();
                }}
              >
                Accept all
              </button>
              <button className="cookie-btn cookie-btn--ghost" type="button" onClick={closeDialog}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
