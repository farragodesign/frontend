import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const SERVER_URL = process.env.SERVER_URL



  const ServerProvider : React.FC<PropsWithChildren<{}>> = ({children}) =>{
    const client = new ApolloClient({
      uri: SERVER_URL,
      cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  }

  export default ServerProvider; 