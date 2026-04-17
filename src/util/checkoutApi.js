/**
 * POST order to Flask API. Uses VITE_API_BASE when set (GitHub Pages + remote API),
 * otherwise same-origin /api (Vite dev proxy → backend).
 */
export async function submitOrderCheckout(orderPayload) {
  const apiOrigin = import.meta.env.VITE_API_BASE ?? "";
  const url = `${apiOrigin}/api/order-checkout`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(orderPayload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) {
    const message = data.error || response.statusText || "Request failed";
    throw new Error(message);
  }
  return data;
}
