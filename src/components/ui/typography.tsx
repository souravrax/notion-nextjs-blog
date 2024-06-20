import * as React from "react";
import { cn } from "@/libs/utils";

export type TypographyProps = {
    children: React.ReactNode;
    className?: string;
};

export function TypographyH1({ className, ...rest }: TypographyProps) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                className
            )}
            {...rest}
        />
    );
}
export function TypographyH2({ className, ...rest }: TypographyProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...rest}
        />
    );
}
export function TypographyH3({ className, ...rest }: TypographyProps) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...rest}
        />
    );
}
export function TypographyH4({ className, ...rest }: TypographyProps) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...rest}
        />
    );
}
export function TypographyP({ className, ...rest }: TypographyProps) {
    return (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...rest}
        />
    );
}
export function TypographyBlockquote({ className, ...rest }: TypographyProps) {
    return (
        <blockquote
            className={cn("mt-6 border-l-2 pl-6 italic", className)}
            {...rest}
        />
    );
}
export function TypographyInlineCode({ className, ...rest }: TypographyProps) {
    return (
        <code
            className={cn(
                "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className
            )}
            {...rest}
        />
    );
}
export function TypographyLead({ className, ...rest }: TypographyProps) {
    return (
        <p
            className={cn("text-xl text-muted-foreground", className)}
            {...rest}
        />
    );
}
export function TypographyLarge({ className, ...rest }: TypographyProps) {
    return <div className={cn("text-lg font-semibold", className)} {...rest} />;
}
export function TypographySmall({ className, ...rest }: TypographyProps) {
    return (
        <small
            className={cn("text-sm font-medium leading-none", className)}
            {...rest}
        />
    );
}
export function TypographyMuted({ className, ...rest }: TypographyProps) {
    return (
        <p
            className={cn("text-sm text-muted-foreground", className)}
            {...rest}
        />
    );
}
