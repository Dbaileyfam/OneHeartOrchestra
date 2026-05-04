/** Shared formatting for `shows` entries in site.ts */

export function formatShowDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function upcomingShows<T extends { date: string }>(items: readonly T[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return items.filter((s) => {
    const d = new Date(`${s.date}T12:00:00`);
    return d >= today;
  });
}
