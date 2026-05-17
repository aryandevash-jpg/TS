export const CONTACT = {
  whatsappNumber: "+918002858802",
  whatsappDisplay: "+91 80028 58802",
  instagram: "twinstack",
  email: "aryanjr2010@gmail.com",
  calendly: "https://calendly.com/aryan-jangde821/30min",
};

export const waLink = (msg = "Hi TwinStack — I saw your site and would like to chat!") =>
  `https://wa.me/${CONTACT.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (config: { url: string }) => void;
    };
  }
}

export function openCalendlyPopup(evt?: { preventDefault?: () => void }, url = CONTACT.calendly) {
  evt?.preventDefault?.();
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
    return;
  }
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
