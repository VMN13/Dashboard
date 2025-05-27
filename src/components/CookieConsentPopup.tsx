import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

const COOKIE_NAME = 'cookie_consent';
const rootContainerId = 'root';
const blurClass = 'blurred-cookie-consent';

async function getCookieAsync(name: string): Promise<string | undefined> {
  return new Promise((resolve) => {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))
      ?.split('=')[1];
    console.log(`getCookieAsync: ${name}=${value}`);
    setTimeout(() => resolve(value), 200);
  });
}

async function setCookieAsync(name: string, value: string, days: number): Promise<void> {
  return new Promise((resolve) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    console.log(`setCookieAsync: set ${name}=${value}`);
    setTimeout(() => resolve(), 200);
  });
}

const CookieConsentPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const addBlur = () => {
    const root = document.getElementById(rootContainerId);
    if (root) root.classList.add(blurClass);
  };

  const removeBlur = () => {
    const root = document.getElementById(rootContainerId);
    if (root) root.classList.remove(blurClass);
  };

  const checkConsent = useCallback(async () => {
    console.log('Checking consent cookie...');
    const consent = await getCookieAsync(COOKIE_NAME);
    console.log('Consent value:', consent);
    if (!consent) {
      setVisible(true);
      addBlur();
      console.log('Cookie consent popup will be shown');
    } else {
      console.log('Cookie consent already given');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    checkConsent();
    return () => removeBlur();
  }, [checkConsent]);

  const closePopup = async (consentValue?: 'accepted' | 'rejected') => {
    setLoading(true);
    if (consentValue) {
      await setCookieAsync(COOKIE_NAME, consentValue, 365);
      console.log(`Cookie set: ${COOKIE_NAME}=${consentValue}`);
    }
    setVisible(false);
    removeBlur();
    setLoading(false);
  };

  if (loading) return <div>Loading consent status...</div>;

  if (!visible) return null;

  const portalRoot = document.getElementById('cookie-root') || document.body;

  return ReactDOM.createPortal(
    <div role="dialog" aria-live="polite" className='cookie-consent-popup' >
      <div className="message">
        Мы используем cookies для улучшения вашего опыта. Принимаете ли вы использование cookies?
      </div>
      <div className="buttons">
        <button className="accept" onClick={() => closePopup('accepted')} aria-label="Принять cookies">Принять</button>
        <button className="reject" onClick={() => closePopup('rejected')} aria-label="Отклонить cookies">Отклонить</button>
        <button className="close" onClick={() => closePopup()} aria-label="Закрыть окно уведомления">&times;</button>
      </div>
    </div>,
    portalRoot
  );
};

export default CookieConsentPopup;
