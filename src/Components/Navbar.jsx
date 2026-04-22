'use client'
import { Link, Button } from "@heroui/react";
import { signOut, useSession } from '@/app/lib/auth-client'
import ThemeSwitch from './../themeSwitch/ThemeSwitch';
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

const Navbar = () => {
    const { data, isPending } = useSession()
    const user = data?.user;


    const hasShownToast = useRef(false);


    useEffect(() => {
        if (user && !hasShownToast.current) {
            toast.success(`Welcome ${user.name} 🎉`);
            hasShownToast.current = true;
        }
    }, [user]);

    if (isPending) {
        return <div>loading....</div>
    }

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">Authentication</p>
                    </div>

                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        {
                            user ? (
                                <div className="flex gap-5 items-center">
                                    <p>{user.name}</p>

                                    <Button
                                        onClick={() => {
                                            signOut();
                                            toast("Logged out 👋");
                                            hasShownToast.current = false;
                                        }}
                                        variant="ghost"
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            )
                            :
                            (
                                <Link href="/auth/signin">
                                    <Button variant="ghost">Sign In</Button>
                                </Link>
                            )
                        }

                        <ThemeSwitch />
                    </div>
                </header>
            </nav>
        </div>
    )
}

export default Navbar;