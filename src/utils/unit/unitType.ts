export default function unitType(unit: string, quantity: number) {
  switch (unit) {
    case "un":
      return `${quantity} unidade${quantity > 1 ? "s" : ""}`;
    case "kg":
      return `${quantity} quilo${quantity > 1 ? "s" : ""}`;
    case "g":
      return `${quantity} grama${quantity > 1 ? "s" : ""}`;
    case "l":
      return `${quantity} litro${quantity > 1 ? "s" : ""}`;
    case "ml":
      return `${quantity} mililitro${quantity > 1 ? "s" : ""}`;
    default:
      return "Unidade desconhecida";
  }
}