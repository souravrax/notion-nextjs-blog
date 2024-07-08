import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH4 } from "../ui/typography";
import { cn } from "@/libs/utils";

type TitleDescriptionCardType = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export function TitleDescriptionCard({
    title,
    children,
}: TitleDescriptionCardType) {
    return (
        <Card id={title.toLowerCase()} className={cn("w-full")}>
            <CardHeader>
                <TypographyH4 className="text-primary">{title}</TypographyH4>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
