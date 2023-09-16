// clerk.js
import { ClerkProvider } from '@clerk/clerk-react';

export const clerkFrontend = process.env.pk_test_bW9yYWwtbWFydGVuLTc0LmNsZXJrLmFjY291bnRzLmRldiQ;

export const ClerkAuthProvider = ({ children }) => {
  return (
    <ClerkProvider frontendApi={clerkFrontend}>
      {children}
    </ClerkProvider>
  );
};
