import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "d-inline-flex d-items-center d-rounded-full d-border d-px-2.5 d-py-0.5 d-text-xs d-font-semibold d-transition-colors focus:d-outline-none focus:d-ring-2 focus:d-ring-ring focus:d-ring-offset-2",
  {
    variants: {
      variant: {
        default: "d-border-transparent d-bg-primary d-text-primary-foreground hover:d-bg-primary/80",
        secondary: "d-border-transparent d-bg-secondary d-text-secondary-foreground hover:d-bg-secondary/80",
        destructive: "d-border-transparent d-bg-destructive d-text-destructive-foreground hover:d-bg-destructive/80",
        outline: "d-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      Esto es un badge
    </div>
  );
}

export { Badge, badgeVariants };
