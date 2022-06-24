import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.useQuery(['hello.name', { name: '' }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  console.log(hello.data.greeting);

  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
