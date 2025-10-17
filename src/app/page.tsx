import ShoppingClientPage from "@/components/ShoppingPage/ShoppingClientPage";
import Image from "next/image";
import Cover from "@/assets/Cover.png";

export default function ShoppingPage() {

  return (
    <div className="min-h-screen bg-gray-600 relative overflow-hidden">
      {/* Background image container */}
      <div className="absolute left-0 top-0 w-screen z-0">
        <Image
          src={Cover}
          alt="Background Image"
          priority
          className="w-screen"
        />
      </div>

      <ShoppingClientPage />
    </div>
  );
}
