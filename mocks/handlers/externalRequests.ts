import { http, HttpResponse } from "msw";

/** Handle requests to the Google Fonts API. */
const RequestGoogleFonts = http.get(
  "https://fonts.googleapis.com/css2",
  ({ request }) => {
    // Construct a URL instance out of the intercepted request.
    const url = new URL(request.url);

    // Read the URL query parameters using the "URLSearchParams" API.
    const display = url.searchParams.get("display");
    const family = url.searchParams.get("family");

    // Note that query parameters are potentially undefined.
    // Make sure to account for that in your handlers.
    if (!family) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json({ display, family });
  }
);

const externalRequests = [RequestGoogleFonts];

export default externalRequests;
