// "use client";

// import {
//   ClerkLoaded,
//   SignedIn,
//   SignInButton,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import Form from "next/form";
// import { PackageIcon, TrolleyIcon } from "@sanity/icons";
// import useBasketStore from "@/store/store";

// function Header() {
//   const { user } = useUser();
//   // const itemCount = useBasketStore((state) =>
//   //   state.items.reduce((total, item) => total + item.quantity, 0)
//   // );
//   const itemCount = useBasketStore((state) => {
//     const uniqueItems = new Set(state.items.map((item) => item.product));
//     return uniqueItems.size; // Number of unique items
//   });

//   const createClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (err) {
//       console.error("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <header className="flex flex-wrap justify-between items-center px-4 py-2">
//       {/* Top row */}
//       <div className="flex w-full flex-wrap justify-between items-center">
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
//         >
//           Shopr
//         </Link>
//         <Form
//           action="/search"
//           className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
//         >
//           <input
//             type="text"
//             name="query"
//             placeholder="Search for products"
//             className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
//           />
//         </Form>

//         <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
//           <Link
//             href="/basket"
//             //   className="flex-1 relative flex justify-center sm:justify-start
//             // sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700
//             // text-white font-bold py-2 px-4 rounded"
//             className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:w-auto w-full max-w-xs"
//           >
//             <TrolleyIcon className="w-6 h-6" />
//             {/* span item count once global state is implemented */}
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {itemCount}
//               </span>
//             )}
//             <span>My Basket</span>
//           </Link>
//           {/* user area */}
//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2
//               bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 <PackageIcon className="w-6 h-6" />
//                 <span>My Orders</span>
//               </Link>
//               {user?.passkeys.length === 0 && (
//                 <button
//                   onClick={createClerkPasskey}
//                   className="bg-white  hover:bg-blue-700 hover:text-white
//                animate-pulse text-blue-500 font-bold py-2 px-4 rounded
//              border-blue-300 border"
//                 >
//                   Create Passkey
//                 </button>
//               )}
//             </SignedIn>

//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <UserButton />
//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-400">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}!</p>
//                 </div>
//               </div>
//             ) : null}

//             {/* // (
//               // <SignInButton mode="modal"  />
//               // <SignInButton mode="modal">
//               //   <div className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md sm:w-auto w-full max-w-sm cursor-pointer">
//               //     <span>Sign In</span>
//               //   </div>
//               // </SignInButton>
//               // ) */}
//           </ClerkLoaded>
//           {/* "Sign In" (or "Sign Up") button at the end */}
//           {!user && (
//             <SignInButton mode="modal">
//               <div className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md sm:w-auto w-full max-w-sm cursor-pointer">
//                 <span>Sign In</span>
//               </div>
//             </SignInButton>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// "use client";

// import { useState } from "react";
// import {
//   ClerkLoaded,
//   SignedIn,
//   SignInButton,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import { PackageIcon, TrolleyIcon } from "@sanity/icons";
// import useBasketStore from "@/store/store";
// import { Menu, X } from "lucide-react"; // Import hamburger and close icons

// function Header() {
//   const { user } = useUser();
//   const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
//   const itemCount = useBasketStore((state) => {
//     const uniqueItems = new Set(state.items.map((item) => item.product));
//     return uniqueItems.size; // Number of unique items
//   });

//   const createClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (err) {
//       console.error("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <header className="flex flex-wrap justify-between items-center px-4 py-2">
//       <div className="flex w-full flex-wrap justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
//         >
//           Shopr
//         </Link>

//         {/* Search Input */}
//         <form
//           action="/search"
//           className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
//         >
//           <input
//             type="text"
//             name="query"
//             placeholder="Search for products"
//             className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
//           />
//         </form>

//         {/* Hamburger icon for mobile */}
//         <button
//           className="sm:hidden flex items-center"
//           onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
//         >
//           {menuOpen ? (
//             <X className="h-6 w-6 text-blue-500" /> // Close icon when open
//           ) : (
//             <Menu className="h-6 w-6 text-blue-500" /> // Hamburger icon when closed
//           )}
//         </button>

//         {/* Main Navigation Links for Larger Screens */}
//         <div className="hidden sm:flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
//           <Link
//             href="/basket"
//             className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:w-auto w-full max-w-xs"
//           >
//             <TrolleyIcon className="w-6 h-6" />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {itemCount}
//               </span>
//             )}
//             <span>My Basket</span>
//           </Link>

//           {/* User Area */}
//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 <PackageIcon className="w-6 h-6" />
//                 <span>My Orders</span>
//               </Link>
//               {user?.passkeys.length === 0 && (
//                 <button
//                   onClick={createClerkPasskey}
//                   className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
//                 >
//                   Create Passkey
//                 </button>
//               )}
//             </SignedIn>

//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <UserButton />
//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-400">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}!</p>
//                 </div>
//               </div>
//             ) : (
//               <SignInButton mode="modal">
//                 <div className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md sm:w-auto w-full max-w-sm cursor-pointer">
//                   <span>Sign In</span>
//                 </div>
//               </SignInButton>
//             )}
//           </ClerkLoaded>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="sm:hidden absolute top-0 left-0 right-0 bg-white shadow-md z-10 p-4 flex flex-col space-y-4">
//           <Link href="/basket" className="text-blue-500">
//             My Basket
//           </Link>
//           <ClerkLoaded>
//             <SignedIn>
//               <Link href="/orders" className="text-blue-500">
//                 My Orders
//               </Link>
//               {user?.passkeys.length === 0 && (
//                 <button
//                   onClick={createClerkPasskey}
//                   className="bg-white hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
//                 >
//                   Create Passkey
//                 </button>
//               )}
//             </SignedIn>

//             {!user && (
//               <SignInButton mode="modal">
//                 <div className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md sm:w-auto w-full max-w-sm cursor-pointer">
//                   <span>Sign In</span>
//                 </div>
//               </SignInButton>
//             )}
//           </ClerkLoaded>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;


"use client";

import { useState, useEffect, useRef } from "react";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";
import { Menu, X } from "lucide-react"; 

function Header() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const itemCount = useBasketStore((state) => {
    const uniqueItems = new Set(state.items.map((item) => item.product));
    return uniqueItems.size; // Number of unique items
  });
  const menuRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside the menu

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, []);

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
    <div className="flex w-full flex-wrap justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
      >
        Shopr
      </Link>
  
      {/* Search Input and Hamburger Button */}
      <div className="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden flex items-center mr-2"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-blue-500" /> // Close icon when open
          ) : (
            <Menu className="h-6 w-6 text-blue-500" /> // Hamburger icon when closed
          )}
        </button>
  
        <form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full sm:w-[400px] "
          />
        </form>
      </div>
  
      {/* Main Navigation Links for Larger Screens */}
      <div className="hidden sm:flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
        <Link
          href="/basket"
          className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:w-auto w-full max-w-xs"
        >
          <TrolleyIcon className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
          )}
          <span>My Basket</span>
        </Link>
  
        {/* User Area */}
        <ClerkLoaded>
          <SignedIn>
            <Link
              href="/orders"
              className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create Passkey
              </button>
            )}
          </SignedIn>
  
          {user ? (
            <div className="flex items-center space-x-2">
              <UserButton />
              <div className="hidden sm:block text-xs">
                <p className="text-gray-400">Welcome Back</p>
                <p className="font-bold">{user.fullName}!</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <div className="relative flex justify-center sm:justify-start items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-md sm:w-auto w-full max-w-sm cursor-pointer">
                <span>Sign In</span>
              </div>
            </SignInButton>
          )}
        </ClerkLoaded>
      </div>
    </div>
  
    {/* Mobile Menu - This will toggle when `menuOpen` is true */}
    {menuOpen && (
      <div
        ref={menuRef}
        className="sm:hidden absolute top-0 left-0 right-0 bg-white shadow-md z-10 p-4 flex flex-col space-y-4"
      >
        <Link
          href="/basket"
          className="flex items-center space-x-2 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-700"
          onClick={() => setMenuOpen(false)}
        >
          <TrolleyIcon className="w-6 h-6" />
          <span>My Basket</span>
        </Link>
  
        <ClerkLoaded>
          <SignedIn>
            <Link
              href="/orders"
              className="flex items-center space-x-2 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>
  
            {/* Passkey and Sign Out */}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Create Passkey
              </button>
            )}
  
            <SignOutButton>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full text-red-500 py-2 px-4 rounded-md bg-white hover:bg-red-100"
              >
                Log Out
              </button>
            </SignOutButton>
          </SignedIn>
  
          {!user && (
            <SignInButton mode="modal">
              <div className="flex items-center space-x-2 text-white py-2 px-4 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">
                <span>Sign In</span>
              </div>
            </SignInButton>
          )}
        </ClerkLoaded>
      </div>
    )}
  </header>
  

  
  );
}

export default Header;
