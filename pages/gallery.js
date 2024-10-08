import { GalleryCard } from "../components/card";
import Layout from "../components/layout";

export default function Gallery() {
  return (
    <Layout active="Gallery">
      <h1 className="heading">
        Projects <div className="inline opacity-50">&</div> Portfolio
        <div className="inline opacity-50">.</div>
      </h1>

      <h2 className="gallerySubhead">Major Projects & In Progress</h2>
      <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <GalleryCard
          title="websocket protocol from scratch"
          href="https://github.com/Timosdev99/websocket-protocol-"
          children="A websocket protcol built from scratch with javascript "
        />
        <GalleryCard
          title="command line interface"
          href="https://github.com/Timosdev99/cli"
          children="A simple command line interface used in checking crypto."
        />
        <GalleryCard
          title="auth with JWT"
          href="https://github.com/Timosdev99/user-authentication-with-node-js"
          children="User authentication with JWT in js."
        />
        <GalleryCard
          href="https://github.com/Timosdev99/health-compliance-API"
          title="health compliance api"
          children="health complaince api for reporting health issues, writing health blog and keeping record of health incident."
        />
        <GalleryCard
          href="https://github.com/Timosdev99/blog-api-s-"
          title="blog api"
          children="An api endpoint for writing blog"
        />
        <GalleryCard
          href="https://github.com/Timosdev99/luhn-algorithm"
          title="luhn algorithm"
          children="implemention of luhn algorithm in javascript"
        />
        <GalleryCard
          href="/"
          title="DDBSM"
          children="distributed database management system (tbd)."
        />
         <GalleryCard
          href="/"
          title="Dsa in C"
          children="Data structure and algorithms implementation C(tbd)."
        />
      </div>
    </Layout>
  );
}
