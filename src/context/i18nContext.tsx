// "use client"
// import React, { createContext, useContext } from 'react';
// import i18n from '../config/initi18n'; // Import your i18next configuration

// const I18nContext = createContext(i18n);

// // Custom hook to access the i18n context
// export function useI18n() {
//   return useContext(I18nContext);
// }

// export function I18nProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <I18nContext.Provider value={i18n}>
//       {children}
//     </I18nContext.Provider>
//   );
// }