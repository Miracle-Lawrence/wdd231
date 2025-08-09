// scripts/places.mjs
export async function getPlaces() {
  const response = await fetch("./data/places.json");
  if (!response.ok) {
    throw new Error(`Failed to load places.json: ${response.status}`);
  }
  return await response.json();
}
