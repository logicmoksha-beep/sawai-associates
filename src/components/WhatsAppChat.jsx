import { useState } from "react";
import { X, Send } from "lucide-react";
import { CONTACT } from "../data/contact";

function WhatsAppIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.6-1.48-1.9-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-.99 2.42.04 1.42 1.05 2.8 1.19 2.99.15.2 2.06 3.3 5.09 4.5 3.02 1.19 3.02.79 3.57.74.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34zM12.01 22h-.01a9.87 9.87 0 0 1-4.72-1.2l-3.3.86.88-3.22a9.85 9.85 0 0 1-1.4-5.06C3.46 7.86 7.29 4.03 12 4.03A9.9 9.9 0 0 1 22 13.9c0 4.46-3.86 8.1-9.99 8.1zM12 2C6.2 2 1.48 6.72 1.48 12.5c0 2.03.58 3.99 1.66 5.68L1.4 24l5.98-1.56A11.4 11.4 0 0 0 12 24h.01C18.29 24 24 19.02 24 12.5 24 6.72 19.28 2 12 2z" />
    </svg>
  );
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const send = (e) => {
    e.preventDefault();
    const msg =
      text.trim() ||
      "Hi! I would like to know more about your services.";
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noreferrer"
    );
    setText("");
  };

  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-card" role="dialog" aria-label="WhatsApp chat">
          <div className="wa-card-head">
            <span className="wa-avatar">
              <WhatsAppIcon size={24} />
            </span>

            <div className="wa-head-text">
              <strong>{CONTACT.brand} Support</strong>
              <span className="wa-online">
                <i /> Online now
              </span>
            </div>

            <button
              className="wa-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="wa-bubble">
            Hi! Looking for property, insurance or IT services in Pune?
            Chat with us directly on WhatsApp!
          </div>

          <form className="wa-form" onSubmit={send}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit" aria-label="Send on WhatsApp">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        className="wa-fab"
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={26} /> : <WhatsAppIcon />}
      </button>
    </div>
  );
}
