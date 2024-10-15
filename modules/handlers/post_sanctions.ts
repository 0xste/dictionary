import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import {Sanction, sanctions} from "../data/sanctions";
import {formatErrorResponse} from "../utils/errors";

const addressLookup: Map<string, Sanction> = new Map();

sanctions.forEach(sanction => {
  addressLookup.set(sanction.address, sanction);
});

export default async function (request: ZuploRequest, context: ZuploContext) {
  let address = request.params["address"]
  if (address === ''){
    return formatErrorResponse(context, request, 400, "address is a required field");
  }  

  let found = addressLookup.get(address)
  if (found == undefined){
    return formatErrorResponse(context, request, 404, "sanction not found");
  }

  return found;
}