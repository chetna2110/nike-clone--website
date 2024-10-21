import { arrowRight } from "../assets/icons"


const Button = ({label}) => {
  return (
    <button
  className="
    flex justify-center items-center gap-2 py-4 px-6 border font-monsterrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red
    transition-all duration-300 ease-in-out 
    hover:bg-white hover:text-coral-red hover:border-coral-red 
    active:bg-dark-coral-red active:border-dark-coral-red active:text-white 
    focus:outline-none focus:ring-4 focus:ring-coral-red focus:ring-opacity-50
    disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
    "
  
>
  {label}
  <img
    src={arrowRight}
    alt="arrow right icon"
    className="ml-2 rounded-full w-5 h-5"
  />
</button>

  )
}

export default Button
