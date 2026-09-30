import { PremiumProvider } from "@/premium/kit/premium-provider";
import "lenis/dist/lenis.css";
import "@/premium/premium.css";

/**
 * Everything under /premium gets smooth scrolling and the premium
 * stylesheet. None of it loads on the standard templates. Each page mounts
 * its own <Cursor /> inside its theme, so the cursor takes the page's accent.
 */
export default function PremiumLayout({ children }: { children: React.ReactNode }) {
  return <PremiumProvider>{children}</PremiumProvider>;
}
