import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_CONSENT, readConsentFromCookie, writeConsentCookie } from "../lib/consent";

const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState({ ...DEFAULT_CONSENT });
  const [hasChoice, setHasChoice] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const { consent: parsed, hasChoice: choice } = readConsentFromCookie(
      typeof document === "undefined" ? "" : document.cookie,
    );
    setConsent(parsed);
    setHasChoice(choice);
    setIsReady(true);
  }, []);

  const persist = useCallback((nextConsent) => {
    setConsent(nextConsent);
    setHasChoice(true);
    writeConsentCookie(nextConsent);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ analytics: true, marketing: true });
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ analytics: false, marketing: false });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs) => {
      persist({
        analytics: Boolean(prefs?.analytics),
        marketing: Boolean(prefs?.marketing),
      });
    },
    [persist],
  );

  const openDialog = useCallback(() => setIsDialogOpen(true), []);
  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  const value = useMemo(
    () => ({
      consent,
      hasChoice,
      isReady,
      acceptAll,
      rejectAll,
      savePreferences,
      isDialogOpen,
      openDialog,
      closeDialog,
    }),
    [consent, hasChoice, isReady, acceptAll, rejectAll, savePreferences, isDialogOpen, openDialog, closeDialog],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within a ConsentProvider");
  return ctx;
}

