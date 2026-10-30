import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'inquiries.json');

function readInquiries() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      const dir = path.dirname(dataFilePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dataFilePath, '[]', 'utf8');
      return [];
    }
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContent || '[]');
  } catch (error) {
    console.error('Error reading inquiries:', error);
    return [];
  }
}

function writeInquiries(data) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing inquiries:', error);
  }
}

// GET: Retrieve all inquiries
export async function GET() {
  const inquiries = readInquiries();
  return NextResponse.json({ success: true, count: inquiries.length, inquiries });
}

// POST: Save a new inquiry submission
export async function POST(request) {
  try {
    const body = await request.json();
    const { role, name, email, organization, phone, pilotScale, message } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required.' }, { status: 400 });
    }

    const inquiries = readInquiries();

    const newInquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      role: role || 'Lending Partner / NBFC / Bank',
      name: name.trim(),
      email: email.trim(),
      organization: organization ? organization.trim() : 'N/A',
      phone: phone ? phone.trim() : 'N/A',
      pilotScale: pilotScale || '50-200 Livelihoods',
      message: message ? message.trim() : '',
      status: 'New'
    };

    // Prepend newest first
    inquiries.unshift(newInquiry);
    writeInquiries(inquiries);

    return NextResponse.json({ success: true, inquiry: newInquiry }, { status: 201 });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH: Update status of an inquiry
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and status are required.' }, { status: 400 });
    }

    const inquiries = readInquiries();
    const index = inquiries.findIndex((i) => i.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Inquiry not found.' }, { status: 404 });
    }

    inquiries[index].status = status;
    inquiries[index].updatedAt = new Date().toISOString();
    writeInquiries(inquiries);

    return NextResponse.json({ success: true, inquiry: inquiries[index] });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
