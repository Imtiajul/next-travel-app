import Image from "next/image"

type ButtonProps = {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string;
  full?: boolean;
}
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full ${variant} ${full && 'w-full'}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="cursor-pointer whitespace-nowrap bold-16">{title}</label>
    </button>
  )
}

export default Button
