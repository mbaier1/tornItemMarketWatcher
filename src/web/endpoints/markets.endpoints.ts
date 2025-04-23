import { tornBaseUri } from "../constants/uris.constants"

// TODO: Write the endpoint
export const getItemMarketListingsByItemId = async (id: number) => {
    const url = `${tornBaseUri}/market/${id}/itemmarket?offset=0`;
    //const request = new Request()
    //const result = await fetch(url, );
}