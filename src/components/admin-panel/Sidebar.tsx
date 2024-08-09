"use client"

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathName = usePathname();

    return <div className="bg-white w-[300px] min-h-screen shrink-0 p-4">
        <div className="flex items-center gap-4">
            <img className="rounded-lg size-12" src="/techbuzzz.png" alt="logo" />
            <h2 className="text-[20px] font-semibold">Techbuzzz</h2>
        </div>
        <ul className="space-y-4 mt-6">
            <Link key={"Dashboard"} href={"/admin/dashboard"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${ 
                pathName == "/admin/dashboard" ? "bg-pink text-white" : "bg-gray-200" 
            }`}>
                <div className="text-[20px]">
                    <MdDashboard />
                </div>
                <p>Dashboard</p>
            </Link>
            <Link key={"Products"} href={"/admin/products"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${
                pathName === "/admin/products" ? "bg-pink text-white" : "bg-gray-200"
            }`}>
                <div className="text-[20px]">
                    <RiShoppingCartLine />
                </div>
                <p>Products</p>
            </Link>
            <Link key={"Accounts"} href={"#"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${
                pathName === "#" ? "bg-pink text-white" : "bg-gray-200"
            }`}>
                <div className="text-[20px]">
                    <MdManageAccounts />
                </div>
                <p>Accounts</p>
            </Link>
            <Link key={"Transactions"} href={"#"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${
                pathName === "#" ? "bg-pink text-white" : "bg-gray-200"
            }`}>
                <div className="text-[20px]">
                    <GrTransaction />
                </div>
                <p>Transactions</p>
            </Link>
            <Link key={"Analytics"} href={"#"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${
                pathName === "#" ? "bg-pink text-white" : "bg-gray-200"
            }`}>
                <div className="text-[20px]">
                    <IoAnalytics />
                </div>
                <p>Analytics</p>
            </Link>
            <Link key={"Settings"} href={"#"} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink 
            hover:text-white ${
                pathName === "#" ? "bg-pink text-white" : "bg-gray-200"
            }`}>
                <div className="text-[20px]">
                    <IoSettings />
                </div>
                <p>Settings</p>
            </Link>
        </ul>
    </div>
}