import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Container from "./container";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </div>
  );
}
