import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validace
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Jméno, email a zpráva jsou povinné.' },
        { status: 400 }
      );
    }

    // TODO: Zde bude integrace s Resend
    // Po registraci na resend.com a získání API klíče:
    // 1. npm install resend
    // 2. Přidat RESEND_API_KEY do .env.local
    // 3. Odkomentovat níže:

    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const serviceLabel = service === 'it' ? 'IT služby' : service === 'projektovani' ? 'Projektování' : 'Jiné';
    const recipient = service === 'it' ? 'devops@projektdevelop.cz' : 'jan.bracha@projektdevelop.cz';
    
    await resend.emails.send({
      from: 'kontakt@projektdevelop.cz', // Vyžaduje ověřenou doménu
      to: recipient,
      subject: `Nová zpráva z webu - ${serviceLabel}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Oblast zájmu:</strong> ${serviceLabel}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // Prozatím simulace úspěšného odeslání
    console.log('Formulář odeslán:', { name, email, phone, service, message });

    return NextResponse.json(
      { success: true, message: 'Zpráva byla úspěšně odeslána.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Chyba při odesílání:', error);
    return NextResponse.json(
      { error: 'Něco se pokazilo. Zkuste to prosím znovu.' },
      { status: 500 }
    );
  }
}
