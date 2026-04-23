'use client'
import { Link, Button } from "@heroui/react";
import { signOut, useSession } from '@/app/lib/auth-client'
import ThemeSwitch from './../themeSwitch/ThemeSwitch';

const Navbar = () => {
    const { data, isPending } = useSession()
    const user = data?.user;

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
                        <li><Link href="/model">Model</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/server-action">Server-Action</Link></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        {
                            user ? (
                                <div className="flex gap-5 items-center">
                                    <p>{user.name}</p>

                                    <Button
                                        onClick={() => {
                                            signOut();
                                            
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