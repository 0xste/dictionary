import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import {Sanction, sanctions} from "../data/sanctions";
import {formatErrorResponse} from "../utils/errors";

interface SanctionCheckRequest {
  address: string;
}

const addressLookup: Map<string, Sanction> = new Map();

sanctions.forEach(sanction => {
  addressLookup.set(sanction.address, sanction);
});

export default async function (request: ZuploRequest, context: ZuploContext) {
  let address = request.params["address"]
  if (address === ''){
    return await formatErrorResponse(context, request, 400, "address is a required field");
  }  
  let results: Sanction[] = [];

  results.push(addressLookup.get(address))

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