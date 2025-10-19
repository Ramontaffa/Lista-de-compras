export default function unitType(unit: string, quantity: number) {
  switch (unit) {
    case "un":
      return `${quantity} Unidade${quantity > 1 ? "s" : ""}`;
    case "kg":
      return `${quantity} Quilo${quantity > 1 ? "s" : ""}`;
    case "g":
      return `${quantity} Grama${quantity > 1 ? "s" : ""}`;
    case "l":
      return `${quantity} Litro${quantity > 1 ? "s" : ""}`;
    case "ml":
      return `${quantity} Mililitro${quantity > 1 ? "s" : ""}`;
    default:
      return "Unidade desconhecida";
  }
}