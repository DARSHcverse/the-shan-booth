import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRedesignReveal } from "../lib/useRedesign";
import { serviceSchema, JsonLd } from "../lib/serviceSchema";

// Keep in sync with Bookingpage.jsx / PackagesPage.jsx
const BOOTHS = [
  { name: "Open Booth", note: "Great for big groups", prices: { 2: 390, 3: 550, 4: 700, 5: 800 } },
  { name: "Glam Booth", note: "Soft-glow, magazine look", prices: { 2: 490, 3: 590, 4: 750, 5: 860 } },
  { name: "Enclosed Booth", note: "Private & classic", prices: { 2: 390, 3: 550, 4: 700, 5: 800 } },
];
const HOURS = [2, 3, 4, 5];

const QuickQuote = () => {
  const router = useRouter();
  useRedesignReveal();
  const [booth, setBooth] = useState("");
  const [hours, setHours] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const selected = BOOTHS.find((b) => b.name === booth);
  const price = selected && hours ? selected.prices[hours] : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!booth || !hours) {
      setStatus("Pick a booth and how many hours.");
      return;
    }
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          boothType: booth,
          packageDuration: `${hours} Hours`,
          price,
          source: "Quick Quote",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { value: price, currency: "AUD", booth_type: booth });
      }
      router.push("/thankyou");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please call us on +61 414 521 425.");
      setSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Quick Quote | Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Get an instant photo booth hire quote in Melbourne. Pick your booth and hours, see the price straight away, and we'll call you back."
          key="description"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/quickquote" />
        <JsonLd
          data={serviceSchema({
            name: "Photo Booth Hire Quick Quote",
            serviceType: "Photo Booth Hire",
            description: "Instant photo booth hire pricing for Melbourne and Geelong: choose your booth and hours to see your price.",
            path: "/quickquote",
            image: "/images/photobooth.webp",
            lowPrice: 390,
            highPrice: 860,
          })}
        />
      </Head>

      <div className="rd rd-landing booking-container">
        <div className="rd-book-head rd-reveal">
          <span className="rd-eyebrow">Takes 20 seconds</span>
          <h1>Get your quick quote</h1>
          <p>Pick a booth and how long you need it. You'll see the price straight away, and we'll call you back to confirm your date.</p>
        </div>

        <form onSubmit={handleSubmit} className="rd-book-card rd-book-form rd-qq rd-reveal">
          <fieldset className="rd-qq-group">
            <legend>1. Choose your booth</legend>
            <div className="rd-qq-booths">
              {BOOTHS.map((b) => (
                <button
                  key={b.name}
                  type="button"
                  className={`rd-qq-chip rd-qq-booth${booth === b.name ? " is-on" : ""}`}
                  aria-pressed={booth === b.name}
                  onClick={() => setBooth(b.name)}
                >
                  <strong>{b.name}</strong>
                  <span>{b.note}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="rd-qq-group">
            <legend>2. How many hours?</legend>
            <div className="rd-qq-hours">
              {HOURS.map((h) => (
                <button
                  key={h}
                  type="button"
                  className={`rd-qq-chip${hours === h ? " is-on" : ""}`}
                  aria-pressed={hours === h}
                  onClick={() => setHours(h)}
                >
                  {h} hrs
                </button>
              ))}
            </div>
          </fieldset>

          <div className="rd-qq-price" aria-live="polite">
            <span>Your price</span>
            <strong>{price ? `$${price}` : "$—"}</strong>
            <small>Includes delivery, setup, attendant &amp; unlimited prints</small>
          </div>

          <fieldset className="rd-qq-group">
            <legend>3. Where should we send it?</legend>
            <div className="rd-field-row">
              <div className="rd-field">
                <label htmlFor="qq-name">Name</label>
                <input id="qq-name" type="text" autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Smith" required />
              </div>
              <div className="rd-field">
                <label htmlFor="qq-phone">Phone</label>
                <input id="qq-phone" type="tel" inputMode="tel" autoComplete="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="04XX XXX XXX" pattern="[0-9+ ()-]{8,}" required />
              </div>
            </div>
          </fieldset>

          <button type="submit" className="rd-book-submit" disabled={sending}>
            {sending ? "Sending…" : "Get my quote →"}
          </button>
          {status && <p className="booking-status" role="alert">{status}</p>}
          <p className="rd-book-help">
            Ready to lock it in? <a href="/booking">Book now</a> · or call <a href="tel:+61414521425">+61 414 521 425</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default QuickQuote;
