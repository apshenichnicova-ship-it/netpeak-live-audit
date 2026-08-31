export interface LeadPayload {
  email: string;
  phone: string;
  siteUrl: string;
  espSystem: string;
  submittedAt?: string;
}

/**
 * URL Google Apps Script Веб-додатку (Web App URL).
 * Сюди можна безпосередньо вставити скопійований URL або задати через змінну VITE_GOOGLE_SHEETS_WEBHOOK_URL.
 * Формат: https://script.google.com/macros/s/AKfycb.../exec
 */
export const GOOGLE_SHEETS_WEBHOOK_URL = 
  (import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string) || 
  "https://script.google.com/macros/s/AKfycbzK1-6oRfC2Zvpp1-qw-hbA9fTRajr0c3XWOMYRsNrpphF5W8efSVPyRPoiq4AW59Uf/exec";

/**
 * Відправка ліда у Google Apps Script (Google Sheets + Email сповіщення)
 */
export async function sendLeadToGoogleSheets(data: LeadPayload): Promise<{ success: boolean; error?: string }> {
  const url = GOOGLE_SHEETS_WEBHOOK_URL.trim();

  // Якщо URL ще не прописано, виводимо зрозуміле попередження в консоль, але не ламаємо інтерфейс користувача
  if (!url) {
    console.info(
      "%c[Netpeak Leads]%c Google Sheets Webhook URL не прописано. Вставте отриманий Exec URL у `src/services/leadService.ts` або налаштуйте `VITE_GOOGLE_SHEETS_WEBHOOK_URL`.",
      "background: #5BACEA; color: #fff; font-weight: bold; padding: 2px 6px; border-radius: 4px;",
      "color: #0f172a; font-weight: 500;",
      data
    );
    // Імітація запиту для локального тестування
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { success: true };
  }

  try {
    const payload = {
      ...data,
      submittedAt: new Date().toISOString()
    };

    // Відправляємо POST-запит (mode: 'no-cors' для обходу обмежень CORS Google Apps Script)
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (err: any) {
    console.error("[Netpeak Leads] Помилка відправки:", err);
    return { 
      success: false, 
      error: err?.message || "Не вдалося відправити дані. Спробуйте пізніше або зв'яжіться напряму." 
    };
  }
}
