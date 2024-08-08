import { google } from "googleapis";

export async function GET(req) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOGGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOGGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheet = google.sheets({ version: 'v4', auth: await auth.getClient() });
    const range = 'Sheet1!A2:G';

    try {
        const response = await sheet.spreadsheets.values.get({
            spreadsheetId: process.env.GOGGLE_SHEET_ID,
            range,
        });

        return new Response(JSON.stringify(response.data.values), { status: 200 });
    } catch (error) {
        console.error("Error fetching sheets data: " + error);
        return new Response(JSON.stringify({ error: "Error fetching sheets data" }), { status: 500 });
    }
}
