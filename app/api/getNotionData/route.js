import {NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { revalidatePath } from 'next/cache';

const notion = new Client({ auth: process.env.NOTION_KEY });
const NOTION_DB = process.env.NOTION_DB;

export const revalidate = 100

export async function GET() {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_DB, "filter": {
                "property": "Status",
                "status": {
                  "equals": "Live"
                }
              }
        });

        return NextResponse.json(response.results, { status: 200 });
    } catch (error) {
        console.error("Error fetching Notion data: " + error);
        return NextResponse.json({ error: "Error fetching Notion data" }, { status: 500 });
    }
}
