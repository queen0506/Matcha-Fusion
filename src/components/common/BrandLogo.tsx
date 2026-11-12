import greenLogo from "@/assets/logos/green_logo.png"
import whiteLogo from "@/assets/logos/white_logo.png"

type BrandLogoProps = {
  size?: number

  variant?: "green" | "white"
}

export default function BrandLogo({
  size = 56,
  variant = "green",
}: BrandLogoProps) {
  return (
    <img
      src={variant === "white" ? whiteLogo : greenLogo}
      alt="Matcha Fusion logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  )
}
