import { NextRequest, NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET () {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function PUT (request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if ( !userId || !id || !title || typeof (completed) !== 'boolean' ) {
    return NextResponse.json({ 'message': 'Missing required data' });
  }

  const res = await fetch(`${ DATA_SOURCE_URL }/${ id }`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed, id
    })
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}

export async function DELETE (request: NextRequest) {
  // const { id }: Partial<Todo> = await request.json();
  const id: string = request.nextUrl.searchParams.get('id') as string;

  if ( !id ) {
    return NextResponse.json({ "message": "Todo id is required" });
  }

  await fetch(`${ DATA_SOURCE_URL }/${ id }`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    }
  });

  return NextResponse.json({ "message": `Todo id = ${ id } is deleted` });
}
