'use client';

import { useUser, SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

function Header() {
	const { user } = useUser();

	return (
		<div className="flex justify-between items-center bg-gray-100 p-4 shadow-sm">
			<SignedIn>
				<div className="flex justify-between items-center w-full">
					<span className="text-lg font-semibold">Welcome, {user?.firstName}!</span>
					<UserButton afterSignOutUrl="/" />
				</div>
			</SignedIn>
			<SignedOut>
				<div className="flex justify-between items-center w-full">
					<span className="text-lg">Please sign in</span>
					<SignInButton />
				</div>
			</SignedOut>
		</div>
	);
}

export default Header;