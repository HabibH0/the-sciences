// Authored references only. These helpers never infer or paginate ideas.
export const card = (title, ...refs) => ({ title, refs });
export const rows = (line, ...indices) => ({ line, rows: indices });
export const labelled = (line, label) => ({ line, label });
// A source paragraph may contain several complete arguments. Their boundaries
// are explicitly authored, never inferred from viewport size or text length.
export const part = (line, part) => ({ line, part });
export const visual = (caption, ...items) => ({ caption, items });
export const question = (prompt, options, hint) => ({ prompt, ...(options ? { options } : {}), ...(hint ? { hint } : {}) });
export const plan = (number, title, concepts, recap, details = {}) => ({ number, title, concepts, recap, copy: {}, analysisLabels: {}, ...details });
