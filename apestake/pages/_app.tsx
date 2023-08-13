import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "../styles/globals.css"; // Import your global CSS file here
import Head from "next/head";
import { metamaskWallet, walletConnect,  coinbaseWallet, } from "@thirdweb-dev/react";
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { CronosBeta } from "@thirdweb-dev/chains";











const backgroundImageUrl = "https://ipfs.flair.finance/ipfs/QmWjizft2Pok8LNKLHaTLw911qNPsEJwWaBYPV9PiTv2D1"; // Replace with the actual background image URL

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: `url(${backgroundImageUrl}) no-repeat fixed center center`, // Set the background image URL here
        backgroundSize: "cover",
      },
    },
  },
});

const activeChainId = "0x25";
const activeChain = "CronosBeta";



function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = CronosBeta;

  return (
    <ThirdwebProvider       
      
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 25, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://node.croswap.com/rpc", "https://evm.cronos.org/", "https://rpc.vvs.finance/", "https://rpc.crodex.app/"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chains native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Cronos",
          symbol: "CRO",
        },
        shortName: "CRO", // Display value shown in the wallet UI
        slug: "Cronos", // Display value shown in the wallet UI
        testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Cronos Mainnet", // Name of the network
        name: "Cronos Mainnet", // Name of the network
      }}
      dAppMeta={{
        name: "The Steakhouse",
        description: "Bringing you the meatiest tokens and nft's on the blockchain",
        logoUrl: "https://cdn.discordapp.com/attachments/983357184144465963/1102546115091517490/IMG_3155.png",
        url: "https://www.cronossteakhouse.com",
        isDarkMode: true,
      }}
sdkOptions={{
                gatewayUrls: [
                    "https://cloudflare-ipfs.com/ipfs/",
                    "https://ipfs-2.thirdwebcdn.com/ipfs",
                ],
            }}
      >
      <ChakraProvider>
      
        
      </ChakraProvider>
     </ThirdwebProvider>
  );
}

export default MyApp;

