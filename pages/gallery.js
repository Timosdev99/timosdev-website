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
          title="Uniswap-sdk-core-rust"
          href="https://github.com/malik672/uniswap-sdk-core-rust"
          children="A Custom Uniswap SDK Core in Rust provides essential functionality for interacting with the Uniswap decentralized exchange"
        />
        <GalleryCard
          title="Open Stylus"
          href="https://github.com/malik672/open-stylus"
          children="Abstracted OpenZeppelin smart contracts written in Rust for Arbitrum Stylus(todo*)."
        />
        <GalleryCard
          title="Huff-ast"
          href="https://github.com/malik672/huff-ast"
          children="Huff-AST is an Abstract Syntax Tree (AST) implementation for Huff, crafted in Rust to facilitate seamless conversion between Solidity and Huff(todo*)."
        />
        <GalleryCard
          href="https://github.com/malik672/gas-analyzer"
          title="Gas Analyzer"
          children="Gas Analyzer is a static analysis tool designed to optimize Solidity smart contracts by analyzing gas consumption patterns."
        />
        <GalleryCard
          href="https://github.com/malik672/sol-utils"
          title="Sol utils"
          children="About Bunch of random shit in solidity e.g StringMethod Library which allows you various method not present in solidity"
        />
        <GalleryCard
          href="https://github.com/malik672/safe-contract-huff"
          title="safe-huff"
          children="gnosis safe written in huff(todo)"
        />
        <GalleryCard
          href="/"
          title="Sandwicher"
          children="A mev bot that sandwich transactions on uniswapv3 compartible across every chain (tbd)."
        />
         <GalleryCard
          href="/"
          title="Dsa in rust"
          children="Data structure and algorithms implementation rust(tbd)."
        />
      </div>
    </Layout>
  );
}
