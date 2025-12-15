export const offlineBanner = `import { OfflineBanner } from "@equinor/eds-mobile";

// Shows banner when offline
<OfflineBanner isConnected={false} />

// Hides banner when online
<OfflineBanner isConnected={true} />

// Default behavior (shows offline message)
<OfflineBanner />`;
