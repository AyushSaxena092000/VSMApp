import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/books">Go to Books</Link>
      <br />
      <Link href="/feeds">Go to Feeds</Link>
    </div>
  );
};

export default HomePage;
