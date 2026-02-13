import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export const revalidate = 100

export async function GET() {
  try {
    if (!process.env.NOTION_KEY || !process.env.NOTION_DB) {
      return NextResponse.json({ error: 'Notion credentials not configured' }, { status: 500 });
    }

    const notion = new Client({ auth: process.env.NOTION_KEY });

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB,
      filter: {
        property: 'Status',
        status: {
          equals: 'Live',
        },
      },
    });

    return NextResponse.json(response.results, { status: 200 });
  } catch (error) {
    console.error('Error fetching Notion data:', error);
    return NextResponse.json({ error: 'Error fetching Notion data' }, { status: 500 });
  }
}
