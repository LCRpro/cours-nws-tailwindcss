export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  const response = await fetch("https://api.resend.com/v1/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer re_Ft868DAJ_6JsUeGBSt1U5LG26QnR5SoVp", 
    },
    body: JSON.stringify({
      from: "Liam <cariou.liam@orange.fr>",
      to: ["cariou.liam@orange.fr"],
      subject: `Message de Jean Dupont`,
      html: `
        <p>Vous avez reçu un message depuis votre site web :</p>
        <p><strong>Nom :</strong> Test</p>
        <p><strong>Email :</strong> test@test.fr</p>
        <p><strong>Message :</strong></p>
        <p>Message</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  const data = await response.json()
 
  return Response.json({ data })
}