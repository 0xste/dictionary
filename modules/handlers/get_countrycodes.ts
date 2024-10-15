import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import {CountryCode, countryCodes} from "../data/country_codes";

const alpha2Lookup: Map<string, CountryCode> = new Map();
const alpha3Lookup: Map<string, CountryCode> = new Map();
const numericLookup: Map<string, CountryCode> = new Map();
const fullNameLookup: Map<string, CountryCode> = new Map();
const shortNameLookup: Map<string, CountryCode> = new Map();

countryCodes.forEach(country => {
  alpha2Lookup.set(country.alpha2_code.toLowerCase(), country);
  alpha3Lookup.set(country.alpha3_code.toLowerCase(), country);
  numericLookup.set(country.numeric_code, country);
  fullNameLookup.set(country.full_name.toLowerCase(), country);
  shortNameLookup.set(country.short_name_lower_case, country);
});

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { alpha2_code, alpha3_code, numeric_code, full_name, short_name } = request.query;
  let results: CountryCode[] = [];

  if (alpha2_code) {
    const country = alpha2Lookup.get(alpha2_code.toLowerCase());
    if (country) results.push(country);
  } else if (alpha3_code) {
    const country = alpha3Lookup.get(alpha3_code.toLowerCase());
    if (country) results.push(country);
  } else if (numeric_code) {
    const country = numericLookup.get(numeric_code);
    if (country) results.push(country);
  } else if (full_name) {
    const country = fullNameLookup.get(full_name.toLowerCase());
    if (country) results.push(country);
  } else if (short_name) {
    const country = shortNameLookup.get(short_name.toLowerCase());
    if (country) results.push(country);
  } else {
    results = countryCodes;
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