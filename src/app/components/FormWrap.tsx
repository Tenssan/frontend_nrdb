const FormWrap = ({children}:any) => {
    return (
        <div className="min-h-fit h-full flex items-center justify-center pb-12 pt-24">
            <div className="max-w-[650px] bg-white w-full flex flex-col gap-6
            items-center shadow-xl rounded p-4 md:p-8">{children}</div>
        </div>
    )
}

export default FormWrap;