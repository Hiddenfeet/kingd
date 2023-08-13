import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "../styles/globals.css"; // Import your global CSS file here
import Head from "next/head";
import { metamaskWallet, walletConnect,  coinbaseWallet, } from "@thirdweb-dev/react";
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Cronos } from "@thirdweb-dev/chains";










const MAINNET_RPC_URL = 'https://evm.cronos.org/';
const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x25',
      token: 'CRO',
      label: 'Cronos Mainnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ],
  appMetadata: {
    name: 'Apes Staking',
    icon: 'https://ipfs.flair.finance/ipfs/QmWjizft2Pok8LNKLHaTLw911qNPsEJwWaBYPV9PiTv2D1',
    description: 'NFT Staking App'
  }
});




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
const sdk = new ThirdwebSDK(Cronos, {
  clientId: "TW_CLIENT_ID",
});



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        walletConnect(),
        metamaskWallet(),
        coinbaseWallet(), 
      ]}
      activeChain={Cronos}
      clientId={process.env.TW_CLIENT_ID}
    >
      <ChakraProvider theme={theme}>
        <Head>
          {/* Add your custom text here */}
          <title>Kingdom Apes NFT Staking</title>
        </Head>
        {/* Wrap the background image with the Box component */}
        <Box
          w="100%"
          h="100vh"
          _hover={{
            background: "hsl(243, 4.9%, 18.8%)",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
