import greenLogo from "@/assets/logos/green_logo.png"
import coloredLogo from "@/assets/logos/colored_logo.png"
import orangeLogo from "@/assets/logos/orange_logo.png"
import blackLogo from "@/assets/logos/black_logo.png"
import whiteLogo from "@/assets/logos/white_logo.png"

type BrandLogoVariant = "green" | "colored" | "orange" | "black" | "white"

type BrandLogoProps = {
  size?: number

  variant?: BrandLogoVariant
}

const logoSources: Record<BrandLogoVariant, string> = {
  green: greenLogo,
  colored: coloredLogo,
  orange: orangeLogo,
  black: blackLogo,
  white: whiteLogo,
}

export default function BrandLogo({
  size = 56,
  variant = "green",
}: BrandLogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt="Matcha Fusion logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  )
}
