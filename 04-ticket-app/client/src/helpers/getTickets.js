export const getTickets = async () => {
  const req = await fetch('http://localhost:8080/tickets');
  const data = await req.json();
  console.log(data);
  return data;
};
