const InputValue = () => {
  return (
    <div className="flex justify-center hidden">
        <div className="mb-3 xl:w-96">
            <input
            type="text"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-[#8AB933] focus:outline-none
            "
            id="inputValue"
            placeholder="Ejemplo: 470K"
            />
        </div>
    </div>
  )
}

export default InputValue
