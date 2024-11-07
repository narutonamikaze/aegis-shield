// app/api/students/route.ts
import { NextResponse } from 'next/server';

const students = [
  { student_id: 'S001', student_name: 'Emma', class: 10, center_id: 'D002' },
  { student_id: 'S002', student_name: 'Liam', class: 1, center_id: 'D001' },
  { student_id: 'S003', student_name: 'Aria', class: 8, center_id: 'D001' },
  { student_id: 'S004', student_name: 'Noah', class: 10, center_id: 'D002' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get('student_id');

  const student = students.find((s) => s.student_id === studentId);
  
  if (student) {
    return NextResponse.json(student);
  } else {
    return NextResponse.json({ error: 'Student not found' }, { status: 404 });
  }
}

export async function POST(request: Request) {
  const newStudent = await request.json();
  students.push(newStudent);
  return NextResponse.json(newStudent, { status: 201 });
}
