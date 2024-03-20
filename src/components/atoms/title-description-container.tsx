import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TypographyH1, TypographyH3, TypographyH4 } from "../ui/typography";
import { cn } from "@/lib/utils";

type TitleDescriptionCardType = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export function TitleDescriptionCard({
    title,
    description,
    children,
}: TitleDescriptionCardType) {
    return (
        <Card className={cn("w-full")}>
            <CardHeader>
                <TypographyH4 className="text-primary">{title}</TypographyH4>
                {/* <CardDescription>{description}</CardDescription> */}
            </CardHeader>
            <CardContent>{children}</CardContent>
            {/* <CardFooter className="flex justify-between"> */}
            {/* <Button variant="outline">Cancel</Button> */}
            {/* <Button>Deploy</Button> */}
            {/* </CardFooter> */}
        </Card>
    );
}
