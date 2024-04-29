export async function GET(request) {
  const users = [
    { id: 1, name: "Tsotne" },
    { id: 2, name: "Tsotne" },
    { id: 3, name: "Tsotne" },
  ];

  return new Response(JSON.stringify(users));
}
