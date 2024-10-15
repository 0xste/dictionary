import { ZuploContext, ZuploRequest } from '@zuplo/runtime';
import {Chain, chains} from "../data/chains";

const chainIdLookup: Map<string, Chain> = new Map();
const protocolLookup: Map<string, Chain[]> = new Map();
const networkLookup: Map<string, Chain[]> = new Map();

chains.forEach(chain => {
  chainIdLookup.set(chain.chain_id.toLowerCase(), chain);
  
  if (!protocolLookup.has(chain.protocol.toLowerCase())) {
    protocolLookup.set(chain.protocol.toLowerCase(), []);
  }
  protocolLookup.get(chain.protocol.toLowerCase())!.push(chain);
  
  if (!networkLookup.has(chain.network.toLowerCase())) {
    networkLookup.set(chain.network.toLowerCase(), []);
  }
  networkLookup.get(chain.network.toLowerCase())!.push(chain);
});

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { id, protocol, network } = request.query;
  
  let results: Chain[] = [];

  if (id) {
    const chain = chainIdLookup.get(id.toLowerCase());
    if (chain) results.push(chain);
  } else if (protocol) {
    results = protocolLookup.get(protocol.toLowerCase()) || [];
  } else if (network) {
    results = networkLookup.get(network.toLowerCase()) || [];
  } else {
    // If no specific query parameter is provided, return all chains
    results = chains;
  }

  const page = parseInt(request.query.page_number as string) || 1;
  const pageSize = parseInt(request.query.page_size as string) || 20;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults = results.slice(startIndex, endIndex);

  return {
    data: paginatedResults,
    pagination: {
      total_items: results.length,
      total_pages: Math.ceil(results.length / pageSize),
      current_page: page,
      page_size: pageSize
    }
  };
}