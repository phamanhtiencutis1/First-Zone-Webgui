"use client";

import { LoginButton } from "./login-button";
import { ThemeToggle } from "./theme-toggle";
import { ColorTheme } from "./color-theme";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
	const { data: session } = useSession();

	return (
		<header className='border-b border-[hsl(var(--primary))] backdrop-blur-sm bg-background/190 dark:bg-background/10'>
			<div className='container mx-auto py-4 flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>Music Controller</h1>
				<div className='flex items-center space-x-4'>
					{session && (
						<div className='flex items-center space-x-2'>
							<Avatar>
								<AvatarImage
									src={session.user?.image_url}
									alt={session.user?.username}
								/>
								<AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
							</Avatar>
							<span>{session.user?.username}</span>
						</div>
					)}
					<LoginButton />
					<ColorTheme />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
