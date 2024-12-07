"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useBasketStore from "@/store/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Confetti from "react-confetti";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1500}
        gravity={0.8}
        wind={0.1}
        recycle={false}
        initialVelocityX={{ min: -35, max: 35 }}
        initialVelocityY={{ min: -30, max: 60 }}
        friction={0.9}
        colors={[
          "#ff0",
          "#f00",
          "#0f0",
          "#00f",
          "#ff00ff",
          "#ff6600",
          "#ffffff",
        ]}
      />
      <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Thank you for Your Order!
        </h1>

        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <p className="text-lg text-gray-700 mb-4">
            Your order has been successfully placed and will be shipped shortly.
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="text-gray-600 flex items-center space-x-5">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-green-600">
                  {orderNumber}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/orders">View Order Details</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
