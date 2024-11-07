import { NextResponse } from 'next/server';

let volunteers = [
  { volunteer_id: "V001", volunteer_name: "John Doe", address: "123 Main St", center_id: "D001" },
  { volunteer_id: "V002", volunteer_name: "Jane Smith", address: "456 Oak Ave", center_id: "D002" },
  { volunteer_id: "V003", volunteer_name: "Sam Wilson", address: "789 Pine Rd", center_id: "D003" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const volunteerId = searchParams.get('volunteer_id');

  const volunteer = volunteers.find((v) => v.volunteer_id === volunteerId);
  
  if (volunteer) {
    return NextResponse.json(volunteer);
  } else {
    return NextResponse.json({ error: 'Volunteer not found' }, { status: 404 });
  }
}

export async function POST(request: Request) {
  const newVolunteer = await request.json();
  volunteers.push(newVolunteer);
  return NextResponse.json(newVolunteer, { status: 201 });
}
