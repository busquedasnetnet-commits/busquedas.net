import { NextResponse } from "next/server";

const TO_EMAIL = "info@busquedas.net";

type ContactBody = {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const service = String(body.service ?? "").trim();
    const description = String(body.description ?? "").trim();

    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { error: "Completá todos los campos." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "El email no es válido." },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const subject = `Nueva consulta técnica — ${service}`;

    // Preferido: Web3Forms (configurá WEB3FORMS_ACCESS_KEY en Vercel)
    if (accessKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          to: TO_EMAIL,
          subject,
          from_name: "busquedas.net",
          name,
          email,
          service,
          message: description,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || data.success === false) {
        return NextResponse.json(
          { error: data.message || "No se pudo enviar el mensaje." },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback sin API key: FormSubmit → info@busquedas.net
    // La primera vez FormSubmit envía un mail de activación a info@busquedas.net
    const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        service,
        message: description,
        _subject: subject,
        _replyto: email,
        _template: "table",
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar el envío." },
      { status: 500 },
    );
  }
}
