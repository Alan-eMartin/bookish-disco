import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.useQuery(['hello.name', { name: '' }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  console.log(hello.data.greeting);

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Hello {hello.data.greeting}
      </h1>
    </div>
  );
}
