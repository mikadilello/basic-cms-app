import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Headless CMS-Powered App</title>
      </Head>
      <header>
        <nav>
          <h2>Headless CMS App</h2>
          <Link href="/"> Home </Link>
          <Link href="https://github.com/mikadilello/basic-cms-app"> Github </Link>
          <Link href="https://dev-cs55-13-site.pantheonsite.io/"> Wordpress Site </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      <footer>
        <p>Week 12 Headless CMS: Footer</p>
      </footer>
    </div>
  );
}
