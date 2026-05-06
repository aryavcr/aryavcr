/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Letter3DSwap from "../ui/letter-3d-swap"
import ScrambleIn from "../ui/scramble-in"

//icons
function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

function XIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

// social links
const socialLinks = [
    { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
    { label: "X", href: "#", Icon: XIcon },
    { label: "GitHub", href: "#", Icon: GitHubIcon },
    { label: "Email", href: "#", Icon: EmailIcon },
]


export default function ProfileCard() {
    return (
        <div
            className="bg-card rounded-card flex flex-col gap-5 p-5"
            style={{ boxShadow: "var(--shadow-card)" }} >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 ring-2 ring-border hover:ring-foreground transition-all duration-150 cursor-pointer hover:scale-105">
                    <AvatarImage src="https://pbs.twimg.com/profile_images/1808914099700649985/7W136SEj_400x400.jpg" alt="Aryav Chaturvedi" />
                    <AvatarFallback className="bg-zinc-900 text-white text-sm font-semibold">
                        AC
                    </AvatarFallback>
                </Avatar>
                <div>
                    <Letter3DSwap
                        mainClassName="bg-background tracking-tight font-medium"
                        frontFaceClassName={`bg-background text-foreground`}
                        secondFaceClassName={`bg-background text-foreground`}
                        rotateDirection="top"
                        staggerDuration={0.01}
                        staggerFrom="first"
                        transition={{ type: "spring", damping: 25 }}>
                        Aryav Chaturvedi
                    </Letter3DSwap>
                    <span className="text-sm opacity-60">@aryavcr</span>
                </div>
            </div>


            {/* Bio */}
            <p className="text-muted-foreground text-sm weight-medium">
                <ScrambleIn
                    text="Full-stack developer and builder with a focus on AI tools and developer experience. I like shipping things that are fast, useful, and a little bit ambitious."
                    scrambleSpeed={15}
                    scrambledLetterCount={5}
                    autoStart={true}
                />
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-1 mt-auto">
                {socialLinks.map(({ label, href, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
    )
}