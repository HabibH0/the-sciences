// Course content is registered only when the Logic course is lazily loaded.
let course = null;
let visuals = null;
let items = new Map();
export function registerLogicCourse(next, nextVisuals) {
  course = next;
  visuals = nextVisuals;
  items = new Map(next.items.map(item => [item.id, item]));
}
export function logicCourse() { return course; }
export function logicVisuals() { return visuals; }
export function logicItem(id) { return items.get(id); }
