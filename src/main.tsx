
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/globals.css";

  // React DevTools 메시지 숨기기
  if (typeof window !== 'undefined') {
    const originalConsoleWarn = console.warn;
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    
    const filterDevToolsMessage = (message: any): boolean => {
      const msg = typeof message === 'string' ? message : String(message);
      return msg.includes('Download the React DevTools') || 
             msg.includes('reactjs.org/link/react-devtools');
    };
    
    console.warn = (...args: any[]) => {
      if (!filterDevToolsMessage(args[0])) {
        originalConsoleWarn.apply(console, args);
      }
    };
    
    console.log = (...args: any[]) => {
      if (!filterDevToolsMessage(args[0])) {
        originalConsoleLog.apply(console, args);
      }
    };
    
    console.error = (...args: any[]) => {
      if (!filterDevToolsMessage(args[0])) {
        originalConsoleError.apply(console, args);
      }
    };
  }

  createRoot(document.getElementById("root")!).render(<App />);
  