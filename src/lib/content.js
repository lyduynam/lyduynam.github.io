export function newestFirst(items, key = "Year") {
  return [...items].sort((a, b) => String(b[key]).localeCompare(String(a[key])));
}
export function groupByYear(items, key = "Year") {
  const groups = new Map();
  for (const item of newestFirst(items, key)) {
    const year = String(item[key]).slice(0, 4);
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(item);
  }
  return Array.from(groups, ([year, entries]) => ({ year, entries }));
}
export function formatDate(value) {
  if (/^\d{4}$/.test(value)) return value;
  const isMonth = /^\d{4}-\d{2}$/.test(value);
  const date = new Date(isMonth ? `${value}-01T00:00:00Z` : `${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { month: "short", ...(isMonth ? {} : { day: "numeric" }), year: "numeric", timeZone: "UTC" }).format(date);
}
