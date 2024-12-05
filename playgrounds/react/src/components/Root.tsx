import { TonConnectUIProvider } from '@tonconnect/ui-react';

import { App } from '@/components/App.tsx';
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx';

function ErrorBoundaryError({ error }: { error: unknown }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === 'string'
              ? error
              : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

export function Root() {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <TonConnectUIProvider
        manifestUrl={new URL('/tonconnect-manifest.json', window.location.href).toString()}
        walletsListConfiguration={
          includeWallets: [
            {
              "app_name": "architec.ton",
              "name": "Architec.ton",
              "image": "https://static.tildacdn.com/tild3333-3864-4236-a261-353164396136/IMG_9778.PNG",
              "about_url": "https://architecton.tech/",
              "universal_url": "https://t.me/architec_ton_bot?attach=wallet",
              "bridge": [
                {
                  "type": "sse",
                  "url": "https://tonconnect.architecton.site/"
                },
              ],
              "platforms": ["ios", "android", "macos", "windows", "linux"]
            }
          ]
        }
      >
        <App/>
      </TonConnectUIProvider>
    </ErrorBoundary>
  );
}
