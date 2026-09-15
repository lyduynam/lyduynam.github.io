// Add verified Google Scholar profile URLs here when available.
// The fallback search URL lets every author name remain clickable until a
// profile is verified, avoiding incorrect author-identity matches.
export const authorScholar = {
  "Duy-Nam Ly": "https://scholar.google.com.vn/citations?user=fXfeDqcAAAAJ&hl=en",
  "Wolfgang Stuerzlinger": "https://scholar.google.com/citations?user=78KBaPsAAAAJ&hl=en",
  "Khanh-Duy Le": "https://scholar.google.com/citations?user=jSOYfjYAAAAJ&hl=en",
  "Minh-Triet Tran": "https://scholar.google.com/citations?user=lt2ATkkAAAAJ&hl=en",
  "Seungwoo Je": "https://scholar.google.com/citations?user=yecBkvAAAAAJ&hl=en",
  "Morten Fjeld": "https://scholar.google.com/citations?user=ZQhqxscAAAAJ&hl=en",
  "Cuong Nguyen": "https://scholar.google.com/citations?user=yBl_j4gAAAAJ&hl=en"

};

export function getScholarUrl(author) {
  const name = author.replace(/\*+$/, "").trim();
  return authorScholar[name];
}