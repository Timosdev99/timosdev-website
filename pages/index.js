import Head from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="twitter:url" content="https://malik.com/" />
        <script
          defer
          data-domain="malik.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Nav active="Home" />
      <main className="mt-6 sm:mt-12 md:mt-16 flex flex-col text-white pl-12 md:pl-20">
        <section className="heading" aria-hidden="true">
          <div>
            Aremu Malik<div className="inline opacity-50">.</div>
          </div>
        </section>
        <section className="mt-8 md:mt-16 w-2/3 lg:w-1/2 md:text-xl">
          Hey! I'm Malik, loves blockchain,star wars, fantasy novels and brandon
          sanderson; thanks for stopping by! I'm fascinated about computer
          science and mathematics (& hope to also branch into some creative
          writing).
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://github.com/malik672"
          ></a>
          . If you ever see me, I'll probably either be talking about{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://starwars.fandom.com/wiki/Main_Page"
          >
            Star wars or quoting yoda
          </a>
          , <span style={{fontStyle: "italic", fontSize:"17px", textDecoration:"underline"}}>Do, or do not. There is no try - Yoda.</span> 
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://open.spotify.com/playlist/3zctAx5qGonJV8S3AR29jy"
          >
            Music fan?, then you've to recognise kendrick and the Weekend supremacy.
          </a>
           sometimes(mostimes tbh) I rant about{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            href="https://bookshelf.website/malik"
          >
            books
          </a>
          , obsess over cs, maths {" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            //href="desimonelab.org/"
          >
            and blockchains.
          </a>{" "}
          <a
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
            //href="https://jasanofflab.mit.edu/"
          >
            I hope to publish a research paper this year, learn more about zk,
            cryptography, form new connections,partake in more hackathons. Don't
            know how yet, but surely doing it.
          </a>
          , or just build more infra tools. I truly believe in e/acc, we've to
          progress at an exponential rate, that's the only way to save humanity!
          <br />
          <br />
          <span style={{ fontSize: "0.9rem", lineHeight: "0.7rem" }}>
            <span style={{ fontWeight: "bold" }}>Currently reading</span>:{" "}
            <span style={{ fontStyle: "italic" }}>
              Linear Algbera done right
            </span>{" "}
            by Sheldon Alexar.
          </span>
          {/* <br /><br />
          <span style={{fontSize: '0.9rem', lineHeight: '0.7rem'}}><span style={{fontWeight: 'bold'}}>Current Music Recs</span>: <span style={{fontStyle: 'italic'}} href="https://open.spotify.com/album/3gF9KIynrJaC80HbVayPMx?si=KBXUac8VREuHu01AzrYJqw">Unreal Unearth</span> by Hozier & <span style={{fontStyle: 'italic'}} href="https://open.spotify.com/album/2KqSL3vLfyVO7rrZJL9tUs?si=WqlNUWn1Q--C_cgiBfIYNw">Javelin</span> by Sufjan Stevens. (Also, my current playlist on loop: <span style={{textDecoration: "underline", "textDecorationStyle": 'dotted', fontStyle: 'italic'}} href="https://open.spotify.com/playlist/1ME2BDtz6wgqk4bLqyl892?si=16714ccd369b4d81">sizzle</span>.) </span> */}
        </section>
        <section className="mt-8 md:mt-8 w-2/3 lg:w-1/2 md:text-xl">
          <div className="icon-bar">
            <a href="https://twitter.com/MalikAremu1">
              <svg
                fill="white"
                height="20px"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/malik672">
              <svg
                fill="white"
                height="20px"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/"
              >
                <title>Github</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            {/* <a href="https://open.spotify.com/user/rsjahryaqu08yocko5k5cfd9s?si=d72ea19966304c10"><svg fill="white" height="20px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg></a>

            <a href="https://bookshelf.website/clairebookworm"><svg fill="white" height="20px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bookshelf</title><path d="M.3013 17.6146c-.1299-.3387-.5228-1.5119-.1337-2.4314l9.8273 5.6738a.329.329 0 0 0 .3299 0L24 12.9616v2.3542l-13.8401 7.9906-9.8586-5.6918zM.1911 8.9628c-.2882.8769.0149 2.0581.1236 2.4261l9.8452 5.6841L24 9.0823V6.7275L10.3248 14.623a.329.329 0 0 1-.3299 0L.1911 8.9628zm13.1698-1.9361c-.1819.1113-.4394.0015-.4852-.2064l-.2805-1.1336-2.1254-.1752a.33.33 0 0 1-.1378-.6145l5.5782-3.2207-1.7021-.9826L.6979 8.4935l9.462 5.463 13.5104-7.8004-4.401-2.5407-5.9084 3.4113zm-.1821-1.7286.2321.938 5.1984-3.0014-2.0395-1.1775-4.994 2.8834 1.3099.108a.3302.3302 0 0 1 .2931.2495zM24 9.845l-13.6752 7.8954a.329.329 0 0 1-.3299 0L.1678 12.0667c-.3891.919.003 2.0914.1332 2.4311l9.8589 5.692L24 12.1993V9.845z" /></svg></a>

            <a href="https://www.youtube.com/channel/UCxu_RGPnVSEke61ebevOJPA"><svg fill="white" height="20px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>

            <a href="https://clairebookworm.substack.com/"><svg role="img" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" fill="white"></path></svg></a> */}
          </div>
        </section>
        <section>
          {/* <img className="mt-8 md:mt-12 w-1/2 sm:w-1/3 lg:w-1/4" src="/signature.png" alt="signature of claire" aria-hidden="true" /> */}
        </section>
      </main>
      <footer className="text-white mt-8 md:mt-16 pl-12 md:pl-20 mb-5 flex flex-col space-y-4 text-xs sm:text-sm">
        <div id="footnotes" className="font-inter">
          ¹DFTBA: Don’t forget to be awesome!
          <br />
          ²I'm always happy to chat! You can find me by emailing me at
          aremumalik05 (at) gmail.com or any way you can find (linked above or
          otherwise).
        </div>
        <div className="font-gilroy uppercase opacity-40">
          Copyright {new Date().getFullYear()} Aremu Malik.
        </div>
      </footer>
    </div>
  );
}
