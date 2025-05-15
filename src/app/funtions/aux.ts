export const isToday = (day: number, month: string) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString("pt-BR", { month: "long" });
  return day === currentDay && month === currentMonth;
};
